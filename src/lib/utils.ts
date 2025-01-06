import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function unslugify(str: string) {
  return str.replace(/-/g, " ");
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
