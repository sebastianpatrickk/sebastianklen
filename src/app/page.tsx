import Posts from "@/components/Posts";
import { Link } from "@/components/ui/Link";
import { getBlogPosts } from "@/lib/mdx-utils";
import { MoveUpRight } from "lucide-react";

export default function Home() {
  const posts = getBlogPosts();

  return (
    <div className="gap-4.5 flex w-full flex-col text-sm font-medium">
      <p>
        Hi, I&apos;m Sebastian, full-stack developer who loves building and
        improving things. <br />
        I&apos;m currently working at{" "}
        <Link href="https://www.taskgrip.com/en" target="_blank">
          TaskGrip
          <MoveUpRight className="size-4 text-text-muted" />
        </Link>
        , but I&apos;m looking for new opportunities.
      </p>
      <div className="space-y-3">
        <h1 className="font-medium">Experience</h1>
        <p>
          Exploring the world of technology, diving into new projects and
          discovering innovative solutions. Passionate about outdoor activities
          like hiking, cycling, and rock climbing.
        </p>
      </div>
      <div className="space-y-2">
        <h1 className="font-medium">Projects</h1>

        <Posts posts={posts} />
      </div>
    </div>
  );
}
