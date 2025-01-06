import Link from "next/link";
import Logo from "./Logo";

const links = [
  {
    name: "GitHub",
    url: "https://github.com/sebastianpatrickk",
  },
  {
    name: "CV",
    url: "/cv",
  },
];

export default function Header() {
  return (
    <div className="relative mx-auto mt-6 flex w-full max-w-screen-sm items-center justify-between text-sm">
      <Logo />

      <div className="flex items-start gap-4">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.url}
            className="hidden font-medium text-text-muted transition-colors hover:text-ds-blue-700 md:inline-block"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
