export type ContactInput = {
  name: string;
  email: string;
  subject: string;
  phone: string;
  message: string;
};

export type Contact = ContactInput & {
  id: number;
  isRead: boolean;
  createdAt: string;
};

const createContactUrl = '/api/contacts';

export const createContact = async (data: ContactInput): Promise<Contact> => {
  const response = await fetch(createContactUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`Contact request failed: ${response.status}`);
  }

  return response.json() as Promise<Contact>;
};
