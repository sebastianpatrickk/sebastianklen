"use client";

import { usePathname } from "next/navigation";
import { unslugify } from "@/lib/utils";
import Link from "next/link";
import React from "react";

import { motion, AnimatePresence } from "motion/react";

const Logo = () => {
  const pathname = usePathname();

  const getInitialHeaderContent = (pathname: string) => {
    if (pathname.startsWith("/writing/")) {
      return {
        title: unslugify(pathname.replace("/writing/", "")),
        subtitle: "Sebastian Patrick Klen",
      };
    }
    return {
      title: "Sebastian Patrick Klen",
      subtitle: "Software Engineer",
    };
  };

  const [headerContent, setHeaderContent] = React.useState(
    getInitialHeaderContent(pathname),
  );

  React.useEffect(() => {
    if (pathname.startsWith("/writing/")) {
      setHeaderContent({
        title: unslugify(pathname.replace("/writing/", "")),
        subtitle: "Sebastian Patrick Klen",
      });

      return;
    }

    setHeaderContent({
      title: "Sebastian Patrick Klen",
      subtitle: "Software Engineer",
    });
  }, [pathname]);

  return (
    <div className="relative overflow-hidden py-3 text-sm font-medium">
      <div className="bg-fade-to-transparent pointer-events-none absolute left-0 top-0 z-50 h-4 w-full" />
      <div className="bg-fade-to-transparent pointer-events-none absolute bottom-0 left-0 z-50 h-4 w-full rotate-180" />
      <AnimatePresence initial={false}>
        <motion.div
          key={headerContent.title}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -40, position: "absolute" }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="h-10"
        >
          <h1 className="capitalize">{headerContent.title}</h1>
          <Link href="/" className="text-text-muted">
            {headerContent.subtitle}
          </Link>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Logo;
