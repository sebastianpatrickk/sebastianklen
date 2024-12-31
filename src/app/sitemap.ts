export const baseUrl = "https://sebastianklen.com";

export default async function sitemap() {
  //   const blogs = getBlogPosts().map((post) => ({
  //     url: `${baseUrl}/writing/${post.slug}`,
  //     lastModified: post.metadata.publishedAt,
  //   }));

  const routes = [""].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes];
}
