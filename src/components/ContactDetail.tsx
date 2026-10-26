import React, { useState } from "react";
import { CheckIcon, CopyIcon } from "lucide-react";

type ContactDetailProps = {
  label: string;
  value: string;
  href: string;
};

export function ContactDetail({ label, value, href }: ContactDetailProps) {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setStatus("copied");
    } catch {
      setStatus("error");
    }
    window.setTimeout(() => setStatus("idle"), 1800);
  };

  return (
    <div className="flex items-center justify-between gap-3 py-3">
      <div className="min-w-0">
        <p className="text-xs font-medium text-ink-muted">{label}</p>
        <a
          href={href}
          className="block truncate font-display text-lg font-medium text-ink transition-colors duration-150 ease-out hover:text-brand focus:outline-none focus-visible:underline">
          
          {value}
        </a>
      </div>
      <button
        type="button"
        onClick={handleCopy}
        className="flex h-9 shrink-0 items-center gap-1.5 rounded-lg px-3 text-sm font-medium text-brand transition-colors duration-150 ease-out hover:bg-brand-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
        aria-label={`Copy ${label.toLowerCase()}`}>
        
        {status === "copied" ?
        <CheckIcon className="h-4 w-4" aria-hidden="true" /> :

        <CopyIcon className="h-4 w-4" aria-hidden="true" />
        }
        <span aria-live="polite">{status === "copied" ? "Copied" : status === "error" ? "Failed" : "Copy"}</span>
      </button>
    </div>);

}