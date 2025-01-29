import * as React from "react";
import clsx from "clsx"; // Import clsx for class merging

interface CardProps extends React.HTMLProps<HTMLDivElement> {
  className?: string;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={clsx("rounded-lg border bg-white p-4 shadow-md", className)} // Merging class names
    {...props}
  />
));

Card.displayName = "Card";

export { Card };