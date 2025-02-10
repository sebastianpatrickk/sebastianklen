import { Link } from "@/components/ui/Link";

export default function Page() {
  return (
    <div className="mt-8 flex space-y-6 text-sm font-medium">
      <div>
        <div>
          <h1 className="font-semibold">TaskGrip</h1>
          <p className="text-text-muted">
            Software Engineer, May 2024 - Present
          </p>
        </div>

        <div className="">
          <p className="pt-4">
            <Link href="https://taskgrip.com">TaskGrip</Link> is a modern task
            management platform that helps teams and individuals organize their
            work efficiently. As a full-stack engineer, I contribute to both
            frontend and backend development.
          </p>
          <p className="pt-4">
            I work closely with the product team to implement new features and
            improve existing ones. My responsibilities include writing clean,
            maintainable code and ensuring high{" "}
            <Link href="https://web.dev/performance">performance</Link> across
            the application.
          </p>
          <p className="pt-4">
            Some key technologies I work with include{" "}
            <Link href="https://react.dev">React</Link>,{" "}
            <Link href="https://www.typescriptlang.org">TypeScript</Link>, and{" "}
            <Link href="https://nodejs.org">Node.js</Link>. I&apos;ve helped
            implement real-time collaboration features and improve the
            platform&apos;s notification system.
          </p>
          <p className="pt-4">
            I also participate in{" "}
            <Link href="https://github.com/features/code-review">
              code reviews
            </Link>
            , architectural discussions, and mentor junior developers. Working
            in an{" "}
            <Link href="https://agilemanifesto.org">agile environment</Link>, I
            contribute to sprint planning and technical documentation.
          </p>
        </div>
      </div>
    </div>
  );
}
