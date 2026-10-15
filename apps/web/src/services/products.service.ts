export type Product = {
  id?: number;
  name: string;
  description: string;
  buttonText: string;
  href: string;
  accent: string;
  imageUrl: string;
  sortOrder?: number;
  isActive?: boolean;
};

const request = async (url: string, options?: RequestInit) => {
  const response = await fetch(url, options);
  if (!response.ok) throw new Error(`Product request failed: ${response.status}`);
  return response.json() as Promise<Product | Product[]>;
};

export const getProducts = () => request('/api/products') as Promise<Product[]>;
export const createProduct = (product: Omit<Product, 'id'>) => request('/api/products', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(product),
}) as Promise<Product>;
export const updateProduct = (id: number, product: Omit<Product, 'id'>) => request(`/api/products/${id}`, {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(product),
}) as Promise<Product>;
export const deleteProduct = (id: number) => request(`/api/products/${id}`, { method: 'DELETE' });

export const uploadProductImage = async (file: File): Promise<{ url: string; key: string }> => {
  const formData = new FormData();
  formData.append('file', file);
  const response = await fetch('/api/upload/products', { method: 'POST', body: formData });
  if (!response.ok) throw new Error(`Product image upload failed: ${response.status}`);
  return response.json() as Promise<{ url: string; key: string }>;
};
