import { footerLinks } from "@/lib/constants";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-12 flex w-full items-center justify-center gap-4">
      {footerLinks.map((link) => (
        <Link
          key={link.name}
          href={link.url}
          target={link.target}
          className="text-text-muted transition-colors hover:text-ds-blue-700"
        >
          {link.name}
        </Link>
      ))}
    </footer>
  );
}
