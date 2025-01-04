"use client";

import { Post } from "@/types";
import classNames from "classnames";
import { ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useRouter } from "next/navigation";
import React from "react";

// const posts = [
//   {
//     title: "Task Board",
//     description: "An agile project management tool for teams.",
//     link: "/writing/task-board",
//   },
//   {
//     title: "Learning TypeScript",
//     description: "A comprehensive guide to mastering TypeScript.",
//     link: "/writing/learning-typescript",
//   },
//   {
//     title: "React Best Practices",
//     description: "Tips and tricks for writing clean and efficient React code.",
//     link: "/writing/react-best-practices",
//   },
//   {
//     title: "Next.js Performance",
//     description: "How to optimize your Next.js applications for speed.",
//     link: "/writing/nextjs-performance",
//   },
// ];

const transition = {
  type: "tween",
  ease: "easeOut",
  duration: 0.15,
};

export default function Posts({ posts }: { posts: Post[] }) {
  const router = useRouter();

  const [hoveredPost, setHoveredPost] = React.useState<number | null>(null);

  return (
    <motion.div
      className="flex flex-col gap-2"
      onHoverEnd={() => setHoveredPost(null)}
    >
      {posts.map((post, i) => (
        <motion.div
          key={i}
          className={classNames(
            "group relative -mx-3 flex w-full cursor-pointer items-center justify-between p-3",
            {
              "text-slate-700": hoveredPost === i,
            },
          )}
          onClick={() => router.push(`/writing/${post.slug}`)}
          onHoverStart={() => setHoveredPost(i)}
          onFocus={() => setHoveredPost(i)}
        >
          <div className="z-20 space-y-1">
            <h2>{post.title}</h2>
            <p className="text-text-muted">{post.description}</p>
          </div>
          <ArrowUpRight className="text-text-muted z-20 size-4 shrink-0 transition-all duration-300 group-hover:rotate-45" />

          <AnimatePresence>
            {i === hoveredPost ? (
              <motion.div
                className="bg-ds-gray-100 absolute top-0 right-0 bottom-0 left-0 z-10"
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                transition={transition}
                layoutId="hover"
              />
            ) : null}
          </AnimatePresence>
        </motion.div>
      ))}
    </motion.div>
  );
}
