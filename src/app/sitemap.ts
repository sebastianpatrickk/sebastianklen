import { getBlogPosts } from "@/lib/mdx-utils";

export const baseUrl = "https://sebastianklen.com";

export default async function sitemap() {
  const blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/writing/${post.slug}`,
    lastModified: post.publishedAt,
  }));

  const routes = [""].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, blogs];
}
