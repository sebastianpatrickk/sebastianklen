import Link from "next/link";
import Logo from "./Logo";
import { headerLinks } from "@/lib/constants";

export default function Header() {
  return (
    <div className="mx-auto flex w-full items-center justify-between text-sm">
      <Logo />

      <div className="flex items-start gap-4">
        {headerLinks.map((link) => (
          <Link
            key={link.name}
            href={link.url}
            target={link.target}
            className="font-medium text-text-muted transition-colors hover:text-ds-blue-700"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
