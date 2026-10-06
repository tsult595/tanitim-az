export type Contact = {
  id: number;
  name: string;
  email: string;
  subject: string;
  phone: string;
  message: string;
  status: 'new' | 'read' | 'replied';
  createdAt: string;
};

type ContactsResponse = {
  data: Contact[];
};

type ContactResponse = {
  data: Contact;
};

type ReplyResponse = ContactResponse & {
  mailto: string;
};

const apiUrl = import.meta.env.PUBLIC_API_URL ?? 'http://localhost:8787';

const request = async <T>(path: string, init?: RequestInit): Promise<T> => {
  const response = await fetch(`${apiUrl}${path}`, init);

  if (!response.ok) {
    throw new Error(`Contact request failed: ${response.status}`);
  }

  return response.json() as Promise<T>;
};

export const getContacts = () => request<ContactsResponse>('/contacts');

export const deleteContact = (id: number) =>
  request<ContactResponse>(`/contacts/${id}`, { method: 'DELETE' });

export const markContactAsRead = (id: number) =>
  request<ContactResponse>(`/contacts/${id}/read`, { method: 'PATCH' });

export const replyToContact = (id: number, reply: string) =>
  request<ReplyResponse>(`/contacts/${id}/reply`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ reply }),
  });
