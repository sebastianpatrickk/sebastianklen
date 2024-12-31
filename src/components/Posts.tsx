import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const posts = [
  {
    title: "Task Board",
    description: "An agile project management tool for teams.",
    link: "/writing/task-board",
  },
  {
    title: "Learning TypeScript",
    description: "A comprehensive guide to mastering TypeScript.",
    link: "/writing/learning-typescript",
  },
  {
    title: "React Best Practices",
    description: "Tips and tricks for writing clean and efficient React code.",
    link: "/writing/react-best-practices",
  },
  {
    title: "Next.js Performance",
    description: "How to optimize your Next.js applications for speed.",
    link: "/writing/nextjs-performance",
  },
];

export default function Posts() {
  return (
    <div className="space-y-2">
      {posts.map((post, index) => (
        <Post key={index} {...post} />
      ))}
    </div>
  );
}

export function Post({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link: string;
}) {
  return (
    <Link
      href={link}
      className="group flex w-full items-center justify-between py-1"
    >
      <div className="space-y-1">
        <h2>{title}</h2>
        <p className="text-text-muted">
          {description.length > 100
            ? `${description.slice(0, 100)}...`
            : description}
        </p>
      </div>
      <ArrowUpRight
        className="text-primary transition-all group-hover:rotate-45"
        size={16}
      />
    </Link>
  );
}
