import Posts from "@/components/Posts";
import { getBlogPosts } from "@/lib/mdx-utils";

import Link from "next/link";

export default function Home() {
  const posts = getBlogPosts();

  return (
    <div className="flex w-full flex-col gap-6">
      <p
        className="animate-fade-up"
        style={{ animationDelay: "0.20s", animationFillMode: "both" }}
      >
        Hi, I&apos;m Sebastian, full-stack developer who loves building and
        improving things. <br />
        I&apos;m currently working at{" "}
        <Link
          href="https://www.taskgrip.com/en"
          className="text-primary-foreground hover:text-primary"
        >
          TaskGrip
        </Link>
        , but I&apos;m looking for new opportunities.
      </p>
      <div
        className="animate-fade-up space-y-3"
        style={{ animationDelay: "0.30s", animationFillMode: "both" }}
      >
        <h1 className="font-medium">Experience</h1>
        <p>
          Exploring the world of technology, diving into new projects and
          discovering innovative solutions. Passionate about outdoor activities
          like hiking, cycling, and rock climbing.
        </p>
      </div>
      <div
        className="animate-fade-up space-y-2"
        style={{ animationDelay: "0.40s", animationFillMode: "both" }}
      >
        <h1 className="font-medium">Projects</h1>

        <Posts posts={posts} />
      </div>
    </div>
  );
}
