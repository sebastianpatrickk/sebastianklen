import { getBlogPosts } from "@/lib/mdx-utils";
import { notFound } from "next/navigation";
import { CustomMDX } from "@/components/Mdx";

export async function generateStaticParams() {
  const posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  const post = getBlogPosts().find((post) => post.slug === slug);

  if (!post) {
    return;
  }

  const {
    title,
    publishedAt: publishedTime,
    description,
    slug: postSlug,
  } = post;

  return {
    title,
    description,
    alternates: {
      canonical: `/writing/${postSlug}`,
    },

    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
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

  return (
    <div className="mt-2">
      <CustomMDX source={post.content} />
    </div>
  );
}
