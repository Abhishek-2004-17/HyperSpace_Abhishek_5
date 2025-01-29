import React from "react";
import { Card } from "@/components/ui/card";
import { Table, TableHead, TableRow, TableHeader, TableBody, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { SideBar } from '@/components/client/SideBar';

// Define type for status
type Status = "Pending" | "Approved" | "Rejected";

// Define notifications with correct types for status and updated product names
const notifications: { product: string; warehouse: string; space: string; status: Status }[] = [
  { product: "Electric Kettle", warehouse: "Warehouse A", space: "50 sq ft", status: "Pending" },
  { product: "Coffee Machine", warehouse: "Warehouse B", space: "30 sq ft", status: "Approved" },
  { product: "Toaster", warehouse: "Warehouse C", space: "20 sq ft", status: "Rejected" },
  { product: "Blender", warehouse: "Warehouse D", space: "40 sq ft", status: "Pending" },
  { product: "Oven", warehouse: "Warehouse A", space: "25 sq ft", status: "Approved" },
];

const statusColors: Record<Status, string> = {
  Pending: "yellow",
  Approved: "green",
  Rejected: "red",
};

export default function NotificationPage() {
  return (
    <div style={{ display: 'flex', height: '100vh', margin: 0, padding: 0 }}>
      {/* Sidebar */}
      <div style={{
        width: '20%',
        padding: '10px',
        position: 'relative',
        height: '100vh',
        boxSizing: 'border-box',
      }}>
        <SideBar />
      </div>

      {/* Content */}
      <div style={{ width: '80%', padding: '20px',marginTop: '140px',
        marginRight: '50px',
        marginLeft: '40px', boxSizing: 'border-box' }}>
        <Card className="p-4 shadow-md">
          <h2 className="text-xl font-bold mb-4">Warehouse Notifications</h2>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeader>Product Name</TableHeader>
                <TableHeader>Warehouse Name</TableHeader>
                <TableHeader>Space Required</TableHeader>
                <TableHeader>Request Status</TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              {notifications.map((item, index) => {
                const badgeColor = statusColors[item.status]; // Get color from statusColors
                const badgeClass = `bg-${badgeColor}-500 text-white px-2 py-1 rounded`; // Dynamically create class name

                return (
                  <TableRow key={index}>
                    <TableCell>{item.product}</TableCell>
                    <TableCell>{item.warehouse}</TableCell>
                    <TableCell>{item.space}</TableCell>
                    <TableCell>
                      <Badge className={badgeClass}>{item.status}</Badge>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Card>
      </div>
    </div>
  );
}
