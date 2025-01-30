"use client";

import { useState} from "react";
import { Button } from "@/components/ui/button";
import { SideBar } from "@/components/admin/SideBar";

export default function UserTable() {
  const [users, setUsers] = useState([
    { id: 1, name: "Alice Johnson", email: "alice@example.com" },
    { id: 2, name: "Bob Smith", email: "bob@example.com" },
    { id: 3, name: "Charlie Davis", email: "charlie@example.com" },
    { id: 4, name: "Diana Ross", email: "diana@example.com" },
    { id: 5, name: "Ethan Hunt", email: "ethan@example.com" },
  ]);

  const handleVerification = (id: number, status: boolean) => {
    alert(status ? "User is verified!" : "User not verified");
    setUsers(users.filter((user) => user.id !== id));  // This will remove the user after verification
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/5 p-4 border-r border-gray-300">
        <SideBar />
      </div>
      <div className="p-4 max-w-3xl mx-auto flex-1">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-black text-white">
              <th className="border p-2">Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2 text-center">Document</th>
              <th className="border p-2">✔️</th>
              <th className="border p-2">❌</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border">
                <td className="border p-2">{user.name}</td>
                <td className="border p-2">{user.email}</td>
                <td className="border p-2 text-center">📄</td>
                <td className="border p-2 text-center">
                  <Button onClick={() => handleVerification(user.id, true)}>
                    ✅
                  </Button>
                </td>
                <td className="border p-2 text-center">
                  <Button onClick={() => handleVerification(user.id, false)}>
                    ❌
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
