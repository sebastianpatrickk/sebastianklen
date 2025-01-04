"use client";

import { usePathname } from "next/navigation";
import { unslugify } from "@/lib/utils";
import Link from "next/link";
import React from "react";

import { motion, AnimatePresence } from "motion/react";

const Logo = () => {
  const pathname = usePathname();

  const [headerContent, setHeaderContent] = React.useState({
    title: "Sebastian Patrick Klen",
    subtitle: "Software Engineer",
  });

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
    <div className="relative overflow-hidden py-3">
      <div className="from-background pointer-events-none absolute top-0 left-0 z-50 h-4 w-full bg-linear-to-b to-transparent" />
      <div className="from-background absolute bottom-0 left-0 z-50 h-4 w-full bg-linear-to-t to-transparent" />
      <AnimatePresence initial={false}>
        <motion.div
          key={headerContent.title}
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -48, position: "absolute" }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="h-12"
        >
          <h1 className="text-base font-medium capitalize">
            {headerContent.title}
          </h1>
          <Link href="/" className="text-text-muted">
            {headerContent.subtitle}
          </Link>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Logo;
