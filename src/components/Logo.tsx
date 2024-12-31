"use client";

import { usePathname } from "next/navigation";
import { unslugify } from "@/lib/utils";
import Link from "next/link";

const headerContent = {
  title: "Sebastian Patrick Klen",
  subtitle: "Software Engineer",
};

export default function Logo() {
  const pathname = usePathname();

  if (pathname.startsWith("/writing/")) {
    headerContent.title = unslugify(pathname.replace("/writing/", ""));
    headerContent.subtitle = "Sebastian Patrick Klen";
  }

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
