export type AboutImage = {
  src: string;
  alt: string;
};

export type AboutContent = {
  id: number;
  title: string;
  description: string;
  buttonText: string;
  images: AboutImage[];
  updatedAt: string;
};

type ApiAboutContent = Omit<AboutContent, 'images'> & {
  images: string | AboutImage[];
};

const parseContent = (content: ApiAboutContent): AboutContent => ({
  ...content,
  images: typeof content.images === 'string'
    ? JSON.parse(content.images) as AboutImage[]
    : content.images,
});

export const getAboutContent = async (): Promise<AboutContent | null> => {
  const response = await fetch('/api/about');
  if (!response.ok) throw new Error(`About request failed: ${response.status}`);
  const content = await response.json() as ApiAboutContent | null;
  return content ? parseContent(content) : null;
};

export const updateAboutContent = async (
  data: Omit<AboutContent, 'id' | 'updatedAt'>,
) => {
  const response = await fetch('/api/about', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error(`About request failed: ${response.status}`);
  return parseContent(await response.json() as ApiAboutContent);
};
