"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

const buttonVariants = cva(
  "inline-flex items-center text-ds-blue-700 hover:text-ds-blue-600 text-sm font-medium",
  //   {
  //     variants: {
  //       variant: {
  //         default: "bg-primary text-primary-foreground hover:bg-primary/90",
  //         destructive:
  //           "bg-destructive text-destructive-foreground hover:bg-destructive/90",
  //         outline:
  //           "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
  //         secondary:
  //           "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  //         ghost: "hover:bg-accent hover:text-accent-foreground",
  //         link: "text-primary underline-offset-4 hover:underline",
  //       },
  //       size: {
  //         default: "h-10 px-4 py-2",
  //         sm: "h-9 rounded-md px-3",
  //         lg: "h-11 rounded-md px-8",
  //         icon: "h-10 w-10",
  //       },
  //     },
  //     defaultVariants: {
  //       variant: "default",
  //       size: "default",
  //     },
  //   },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href: string;
  target?: string;
}

const Link = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, href, target, ...props }, ref) => {
    const router = useRouter();
    return (
      <button
        className={cn(buttonVariants({ className }))}
        ref={ref}
        {...props}
        onClick={() =>
          target === "_blank" ? window.open(href, "_blank") : router.push(href)
        }
      />
    );
  },
);
Link.displayName = "Link";

export { Link, buttonVariants };
