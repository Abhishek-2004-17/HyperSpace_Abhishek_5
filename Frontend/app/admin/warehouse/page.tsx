"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import axios from "axios";

type Client = {
  id: string;
  name: string;
  email: string;
  password: string; // In reality, don't expose passwords
  documentUrl: string;
};

export default function ClientVerification() {
  const [clients, setClients] = useState<Client[]>([]);

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    try {
      const response = await axios.get("/api/clients/pending");
      setClients(response.data);
    } catch (error) {
      console.error("Error fetching Wareshouse", error);
    }
  };

  const verifyClient = async (clientId: string) => {
    try {
      await axios.post("/api/clients/verify", { id: clientId });
      setClients(clients.filter(client => client.id !== clientId)); // Remove from list
      alert("Warehouse verified and notified successfully");
    } catch (error) {
      console.error("Error verifying Warehouse", error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Warehouse Verification</h1>
      <div className="grid gap-4">
        {clients.length === 0 ? (
          <p>No pending clients</p>
        ) : (
          clients.map((client) => (
            <Card key={client.id} className="p-4 border rounded-lg shadow-md">
              <CardContent>
                <p><strong>Name:</strong> {client.name}</p>
                <p><strong>Email:</strong> {client.email}</p>
                <p>
                  <strong>Business Document:</strong>{" "}
                  <a
                    href={client.documentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    View PDF
                  </a>
                </p>
                <Button
                  className="mt-4 bg-green-600 text-white"
                  onClick={() => verifyClient(client.id)}
                >
                  Verify Warehouse
                </Button>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}

