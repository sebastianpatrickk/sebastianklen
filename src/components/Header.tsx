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
    <div
      className="animate-fade-up mx-auto mt-8 flex w-full max-w-2xl items-center justify-between"
      style={{ animationDelay: "0.10s", animationFillMode: "both" }}
    >
      <Logo />

      <div className="flex items-start gap-4">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.url}
            className="hidden hover:underline md:inline-block"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
