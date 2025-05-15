export type Project = {
  slug: string;
  title: string;
  description?: string;
  tech?: string[];
  link?: string;
  platform?: 'github' | 'gitlab';
  details?: string;
};
