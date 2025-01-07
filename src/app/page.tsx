import Posts from "@/components/Posts";
import Projects from "@/components/Projects";
import { Link } from "@/components/ui/Link";
import { projects } from "@/lib/constants";
import { getBlogPosts } from "@/lib/mdx-utils";

export default function Home() {
  const posts = getBlogPosts();

  return (
    <div className="mt-8 w-full text-sm font-medium">
      <p className="leading-5">
        Hi, I&apos;m Sebastian, full-stack developer who loves building and
        improving things. I&apos;m currently working at{" "}
        <Link href="/work">TaskGrip</Link>, but I&apos;m looking for new
        opportunities.
      </p>

      <p className="pt-4 leading-5">
        Exploring the world of technology, diving into new projects and
        discovering innovative solutions. Passionate about outdoor activities
        like hiking, cycling, and rock climbing.
      </p>

      <div className="space-y-3 pt-8">
        <h1 className="font-semibold">Projects</h1>
        <Projects projects={projects} />
      </div>
      {posts.length > 0 && (
        <div className="space-y-3 pt-8">
          <h1 className="font-semibold">Writings</h1>
          <Posts posts={posts} />
        </div>
      )}
    </div>
  );
}
