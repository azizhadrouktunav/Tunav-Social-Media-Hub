import React from "react";
import { ArrowUpRightIcon } from "lucide-react";
import { BrandIcon } from "./BrandIcon";
import type { CompanyLink } from "../data/links";

type LinkButtonProps = {
  link: CompanyLink;
  primary?: boolean;
};

export function LinkButton({ link, primary = false }: LinkButtonProps) {
  const base =
  "group flex w-full items-center gap-4 rounded-2xl px-4 py-3.5 transition-[background-color,border-color,transform] duration-150 ease-out active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2";

  const styles = primary ?
  "bg-brand text-white hover:bg-brand-dark py-5" :
  "border border-brand/15 bg-white text-ink hover:border-brand/40 hover:bg-brand-soft";

  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles}`}
      aria-label={`${link.label} — ${link.handle} (opens in a new tab)`}>
      
      <span
        className={`flex shrink-0 items-center justify-center rounded-xl ${
        primary ? "h-12 w-12 bg-white/15 text-white" : "h-11 w-11 bg-brand-soft text-brand"}`
        }>
        
        <BrandIcon id={link.id} className={primary ? "h-6 w-6" : "h-5 w-5"} />
      </span>
      <span className="flex min-w-0 flex-1 flex-col text-left">
        <span className={`font-display font-semibold leading-tight ${primary ? "text-xl" : "text-base"}`}>
          {link.label}
        </span>
        <span className={`truncate text-sm ${primary ? "text-white/80" : "text-ink-muted"}`}>{link.handle}</span>
      </span>
      <ArrowUpRightIcon
        className={`h-5 w-5 shrink-0 transition-transform duration-150 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${
        primary ? "text-white" : "text-brand"}`
        }
        aria-hidden="true" />
      
    </a>);

}