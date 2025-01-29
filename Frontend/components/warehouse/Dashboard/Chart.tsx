"use client"

import { Bar, BarChart, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { SideBar } from '@/components/warehouse/SideBar';

const data = [
  {
    warehouse: "Warehouse A",
    totalSpace: 1000,
    availableSpace: 800,
  },
  {
    warehouse: "Warehouse B",
    totalSpace: 800,
    availableSpace: 400,
  },
  {
    warehouse: "Warehouse C",
    totalSpace: 1200,
    availableSpace: 600,
  },
];

export default function WarehouseChart() {

  return (
    <div className="min-h-screen flex bg-royal-blue">
      {/* Sidebar Section */}
      <div className="w-64 bg-gray-800 text-white p-6">
        <SideBar />
      </div>

      {/* Main Content Section */}
      <div className="flex-1 p-4 overflow-x-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Warehouse Space Overview
        </h1>
        <div className="w-full max-w-5xl bg-gold rounded-lg shadow-lg p-6 overflow-x-auto">
          <div className="h-[400px] w-full relative">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data}
                margin={{ top: 20, right: 40, bottom: 5, left: 32 }}
                barGap={-10}
                barCategoryGap={50}
              >
                <Legend
                  align="right"
                  verticalAlign="top"
                  wrapperStyle={{
                    position: "absolute",
                    top: -20,
                    right: 0,
                  }}
                />
                <XAxis
                  dataKey="warehouse"
                  tickLine={false}
                  axisLine={false}
                  fontSize={12}
                />
                <YAxis tickLine={false} axisLine={false} fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgb(24 24 27)",
                    border: "1px solid rgb(63 63 70)",
                    borderRadius: "6px",
                  }}
                  labelStyle={{ color: "rgb(244 244 245)" }}
                  itemStyle={{ color: "rgb(244 244 245)" }}
                />
                <Bar
                  dataKey="totalSpace"
                  fill="rgb(255, 99, 71)"
                  radius={[4, 4, 0, 0]}
                  maxBarSize={80}
                  name="Total Space"
                />
                <Bar
                  dataKey="availableSpace"
                  fill="rgb(100, 149, 237)"
                  radius={[4, 4, 0, 0]}
                  maxBarSize={80}
                  name="Available Space"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
