"use client";

import { usePathname } from "next/navigation";
import { unslugify } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export default function Logo() {
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
    <div>
      <h1 className="text-base font-medium capitalize">
        {headerContent.title}
      </h1>
      <Link href="/" className="text-text-muted">
        {headerContent.subtitle}
      </Link>
    </div>
  );
}
