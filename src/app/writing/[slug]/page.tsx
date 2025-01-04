import { getBlogPosts } from "@/lib/mdx-utils";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Blog({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  const post = getBlogPosts().find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  return <div>posts</div>;
}
