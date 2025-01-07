export interface Post {
  title?: string;
  description?: string;
  publishedAt?: string;
  slug: string;
  content: string;
}

export interface Project {
  title: string;
  description: string;
  url: string;
}
