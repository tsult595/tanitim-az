export type Client = {
  id: number;
  name: string;
  logoUrl: string;
  website: string | null;
  sortOrder: number;
  isActive: boolean;
  createdAt: string;
};

const request = async <T>(path: string, init?: RequestInit): Promise<T> => {
  const response = await fetch(`/api/clients${path}`, init);

  if (!response.ok) {
    throw new Error(`Clients request failed: ${response.status}`);
  }

  return response.json() as Promise<T>;
};

const normalizeLogoUrl = (client: Client): Client => ({
  ...client,
  logoUrl: client.logoUrl.replace(
    /^https:\/\/cdn\.tanitim\.az\/clients\//,
    '/clients/',
  ),
});

export const getClients = async () => {
  const clients = await request<Client[]>('');
  return clients.map(normalizeLogoUrl);
};

export const createClient = (data: Pick<Client, 'name' | 'logoUrl'>) =>
  request<Client>('', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

export const updateClient = (id: number, data: Partial<Client>) =>
  request<Client>(`/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

export const deleteClient = (id: number) =>
  request<{ success: boolean }>(`/${id}`, { method: 'DELETE' });
