import React, { ComponentPropsWithoutRef } from "react";
import { Link } from "@/components/ui/Link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { MoveUpRight } from "lucide-react";
import { highlight } from "sugar-high";

type HeadingProps = ComponentPropsWithoutRef<"h1">;
type ParagraphProps = ComponentPropsWithoutRef<"p">;
type ListProps = ComponentPropsWithoutRef<"ul">;
type ListItemProps = ComponentPropsWithoutRef<"li">;
type AnchorProps = ComponentPropsWithoutRef<"a">;
type BlockquoteProps = ComponentPropsWithoutRef<"blockquote">;

const components = {
  h1: (props: HeadingProps) => (
    <h1 className="pb-6 pt-16 font-semibold text-text" {...props} />
  ),
  h2: (props: HeadingProps) => (
    <h2 className="pt-6 font-semibold text-text" {...props} />
  ),
  p: (props: ParagraphProps) => (
    <p className="pt-4 font-medium leading-5 text-text" {...props} />
  ),
  ol: (props: ListProps) => (
    <ol
      className="list-decimal space-y-2 pl-5 pt-4 font-medium text-text"
      {...props}
    />
  ),
  ul: (props: ListProps) => (
    <ul
      className="list-disc space-y-1 pl-5 pt-4 font-medium text-text"
      {...props}
    />
  ),
  li: (props: ListItemProps) => <li className="pl-1" {...props} />,
  em: (props: ComponentPropsWithoutRef<"em">) => (
    <em className="font-medium" {...props} />
  ),
  strong: (props: ComponentPropsWithoutRef<"strong">) => (
    <strong className="font-medium" {...props} />
  ),
  a: ({ href = "", children }: AnchorProps) => {
    if (href.startsWith("/")) {
      return <Link href={href}>{children}</Link>;
    }
    return (
      <Link href={href} target="_blank">
        {children}
        <MoveUpRight className="size-4 text-text-muted" />
      </Link>
    );
  },
  code: ({ children, ...props }: ComponentPropsWithoutRef<"code">) => {
    const codeHTML = highlight(children as string);
    return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
  },
  Table: ({ data }: { data: { headers: string[]; rows: string[][] } }) => (
    <table className="table-auto">
      <thead>
        <tr>
          {data.headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.rows.map((row, index) => (
          <tr key={index}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  ),
  blockquote: (props: BlockquoteProps) => (
    <blockquote
      className="border-l-3 ml-[0.075em] border-ds-gray-400 pl-4 text-text-muted"
      {...props}
    />
  ),
};

declare global {
  type MDXProvidedComponents = typeof components;
}

export function useMDXComponents(): MDXProvidedComponents {
  return components;
}

interface Props {
  source: string;
  components?: Record<string, React.ComponentType<any>>;
}

export function CustomMDX(props: Props) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
