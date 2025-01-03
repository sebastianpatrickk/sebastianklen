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
    <div className="overflow-hidden">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={headerContent.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
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
