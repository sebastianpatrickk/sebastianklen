import Link from "next/link";

const links = [
  {
    name: "GitHub",
    url: "https://github.com/sebastianpatrickk",
    target: "_blank",
  },
  {
    name: "CV",
    url: "/cv",
    target: "",
  },
  {
    name: "X",
    url: "https://x.com/sbstkl",
    target: "_blank",
  },
];

export default function Footer() {
  return (
    <footer className="mt-12 flex w-full items-center justify-center gap-4">
      {links.map((link) => (
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
