import * as React from "react";
import clsx from "clsx"; // Import clsx for merging class names

const Table: React.FC<React.ComponentPropsWithoutRef<"table">> = ({ className, ...props }) => (
  <table className={clsx("w-full border-collapse text-sm", className)} {...props} />
);

const TableHead: React.FC<React.ComponentPropsWithoutRef<"thead">> = ({ className, ...props }) => (
  <thead className={clsx("bg-gray-100 text-left font-medium", className)} {...props} />
);

const TableRow: React.FC<React.ComponentPropsWithoutRef<"tr">> = ({ className, ...props }) => (
  <tr className={clsx("border-b", className)} {...props} />
);

const TableHeader: React.FC<React.ComponentPropsWithoutRef<"th">> = ({ className, ...props }) => (
  <th className={clsx("px-4 py-2 text-gray-700", className)} {...props} />
);

const TableBody: React.FC<React.ComponentPropsWithoutRef<"tbody">> = (props) => <tbody {...props} />;

const TableCell: React.FC<React.ComponentPropsWithoutRef<"td">> = ({ className, ...props }) => (
  <td className={clsx("px-4 py-2", className)} {...props} />
);

export { Table, TableHead, TableRow, TableHeader, TableBody, TableCell };
