import { ArrowRight } from "lucide-react";
import type { AnchorHTMLAttributes } from "react";

type ArrowButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "solid" | "outline";
};

export function ArrowButton({
  children,
  className = "",
  variant = "solid",
  ...props
}: ArrowButtonProps) {
  return (
    <a className={`pulse-button ${variant === "outline" ? "outline-button" : ""} ${className}`} {...props}>
      <span>{children}</span>
      <ArrowRight aria-hidden size={26} strokeWidth={1.7} />
    </a>
  );
}
