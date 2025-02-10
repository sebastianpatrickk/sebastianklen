"use client";

import React from "react";
import { Project } from "@/types";
import { ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useRouter } from "next/navigation";

const transition = {
  type: "tween",
  ease: "easeOut",
  duration: 0.15,
};

export default function Projects({ projects }: { projects: Project[] }) {
  const router = useRouter();
  const [hoveredPost, setHoveredPost] = React.useState<number | null>(null);

  return (
    <motion.div
      className="flex flex-col"
      onHoverEnd={() => setHoveredPost(null)}
    >
      {projects.map((post, i) => (
        <motion.div
          key={i}
          className="group relative flex w-full cursor-pointer items-center justify-between gap-2 py-3"
          onClick={() =>
            post.url.startsWith("/")
              ? router.push(post.url)
              : window.open(post.url, "_blank")
          }
          onHoverStart={() => setHoveredPost(i)}
          onFocus={() => setHoveredPost(i)}
        >
          <div className="z-20 space-y-1">
            <h2>{post.title}</h2>
            <p className="text-text-muted">{post.description}</p>
          </div>
          <ArrowUpRight className="z-20 size-4 shrink-0 text-text-muted transition-all duration-300 group-hover:rotate-45" />

          <AnimatePresence>
            {i === hoveredPost ? (
              <motion.div
                className="absolute -left-3 -right-3 bottom-0 top-0 z-10 bg-ds-gray-100"
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
