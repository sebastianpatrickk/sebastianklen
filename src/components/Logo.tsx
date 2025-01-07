"use client";

import { usePathname } from "next/navigation";
import { unslugify } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const Logo = () => {
  const pathname = usePathname();

  const getInitialHeaderContent = (pathname: string) => {
    if (pathname.startsWith("/writing/")) {
      return {
        title: unslugify(pathname.replace("/writing/", "")),
        subtitle: "Sebastian Patrick Klen",
      };
    }

    if (pathname.startsWith("/work")) {
      return {
        title: "Work",
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

    if (pathname.startsWith("/work")) {
      setHeaderContent({
        title: "Work",
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
    <div className="">
      <h1 className="font-semibold capitalize">{headerContent.title}</h1>
      <Link href="/" className="font-medium text-text-muted">
        {headerContent.subtitle}
      </Link>
    </div>
  );
};

export default Logo;
