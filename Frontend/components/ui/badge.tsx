import * as React from "react";
import clsx from "clsx"; // Import clsx for merging class names

interface BadgeProps extends React.HTMLProps<HTMLSpanElement> {
  className?: string;
  children: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({ className, children, ...props }) => (
  <span
    className={clsx(
      "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
      "bg-gray-200 text-gray-800", // Default style
      className // Allows customization
    )}
    {...props}
  >
    {children}
  </span>
);

export { Badge };
