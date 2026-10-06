export type CreateContactData = {
  name: string;
  email: string;
  subject: string;
  phone: string;
  message: string;
};

type CreateContactResponse = {
  data: CreateContactData & {
    id: number;
    status: 'new' | 'read' | 'replied';
    createdAt: string;
  };
};

const apiUrl = import.meta.env.PUBLIC_API_URL ?? 'http://localhost:8787';

export const createContact = async (
  data: CreateContactData,
): Promise<CreateContactResponse> => {
  const response = await fetch(`${apiUrl}/contacts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Contact message could not be sent');
  }

  return response.json() as Promise<CreateContactResponse>;
};
