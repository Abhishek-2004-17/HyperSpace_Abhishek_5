import * as React from "react";
import clsx from "clsx"; // Import clsx for merging class names

interface TableProps extends React.HTMLProps<HTMLTableElement> {
  className?: string;
}

interface TableHeadProps extends React.HTMLProps<HTMLTableSectionElement> {
  className?: string;
}

interface TableRowProps extends React.HTMLProps<HTMLTableRowElement> {
  className?: string;
}

interface TableHeaderProps extends React.HTMLProps<HTMLTableCellElement> {
  className?: string;
}

interface TableBodyProps extends React.HTMLProps<HTMLTableSectionElement> {}

interface TableCellProps extends React.HTMLProps<HTMLTableCellElement> {
  className?: string;
}

const Table: React.FC<TableProps> = ({ className, ...props }) => (
  <table className={clsx("w-full border-collapse text-sm", className)} {...props} />
);

const TableHead: React.FC<TableHeadProps> = ({ className, ...props }) => (
  <thead className={clsx("bg-gray-100 text-left font-medium", className)} {...props} />
);

const TableRow: React.FC<TableRowProps> = ({ className, ...props }) => (
  <tr className={clsx("border-b", className)} {...props} />
);

const TableHeader: React.FC<TableHeaderProps> = ({ className, ...props }) => (
  <th className={clsx("px-4 py-2 text-gray-700", className)} {...props} />
);

const TableBody: React.FC<TableBodyProps> = ({ ...props }) => <tbody {...props} />;

const TableCell: React.FC<TableCellProps> = ({ className, ...props }) => (
  <td className={clsx("px-4 py-2", className)} {...props} />
);

export { Table, TableHead, TableRow, TableHeader, TableBody, TableCell };
