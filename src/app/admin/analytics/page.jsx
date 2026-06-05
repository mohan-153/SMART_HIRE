"use client";

import { useEffect, useState } from "react";
import axios from "axios";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";

export default function AnalyticsPage() {
  const [data, setData] = useState([]);

  const fetchAnalytics = async () => {
    try {
      const res = await axios.get(
        "/api/admin/analytics"
      );

      setData(res.data.stats);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAnalytics();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black p-6">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-3xl font-bold mb-8">
          Analytics Dashboard
        </h1>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* Bar Chart */}

          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow">

            <h2 className="text-xl font-semibold mb-5">
              Platform Statistics
            </h2>

            <ResponsiveContainer
              width="100%"
              height={350}
            >
              <BarChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" />
              </BarChart>
            </ResponsiveContainer>

          </div>

          {/* Pie Chart */}

          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow">

            <h2 className="text-xl font-semibold mb-5">
              Platform Distribution
            </h2>

            <ResponsiveContainer
              width="100%"
              height={350}
            >
              <PieChart>
                <Pie
                  data={data}
                  dataKey="value"
                  outerRadius={120}
                  label
                >
                  {data.map(
                    (entry, index) => (
                      <Cell
                        key={index}
                      />
                    )
                  )}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>

          </div>

        </div>

      </div>

    </div>
  );
}