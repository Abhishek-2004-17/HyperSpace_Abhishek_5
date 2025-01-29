"use client";

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
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white p-4 h-screen fixed top-0 left-0">
        <SideBar />
      </div>

      {/* Main Content */}
      <div className="flex-grow ml-64 p-6">
        <div className="w-full rounded-lg border bg-card p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4">Warehouse Space Overview</h2>
          <div className="h-[400px] w-full relative">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data} // Pass your data here
                margin={{ top: 20, right: 40, bottom: 5, left: 32 }}
                barGap={-10}
                barCategoryGap={50}
              >
                {/* Legend */}
                <Legend
                  align="right"
                  verticalAlign="top"
                  wrapperStyle={{
                    position: "absolute",
                    top: -50,
                    right: -20,
                  }}
                />
                <XAxis dataKey="warehouse" tickLine={false} axisLine={false} fontSize={12} />
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
                  isAnimationActive={false}  // Disable animation
                />
                <Bar
                  dataKey="availableSpace"
                  fill="rgb(100, 149, 237)"
                  radius={[4, 4, 0, 0]}
                  maxBarSize={80}
                  name="Available Space"
                  isAnimationActive={false}  // Disable animation
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
