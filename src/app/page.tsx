import Posts from "@/components/Posts";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex w-full flex-col gap-6">
      <p>
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
      <div className="space-y-3">
        <h1 className="font-medium">Experience</h1>
        <p>
          Exploring the world of technology, diving into new projects and
          discovering innovative solutions. Passionate about outdoor activities
          like hiking, cycling, and rock climbing.
        </p>
      </div>
      <div className="space-y-3">
        <h1 className="font-medium">Projects</h1>
        <Posts />
      </div>
    </div>
  );
}
