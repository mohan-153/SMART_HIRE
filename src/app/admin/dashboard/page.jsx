"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminDashboard() {
  const [stats, setStats] =
    useState(null);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard =
    async () => {
      try {
        const res =
          await axios.get(
            "/api/admin/dashboard"
          );

        setStats(
          res.data.stats
        );
      } catch (error) {
        console.log(error);
      }
    };

  return (
    <div>

      <div className="flex justify-between items-center mb-8">

        <h1 className="text-4xl font-bold">
          Admin Dashboard
        </h1>

        <div className="flex gap-3">

          <input
            type="date"
            className="border rounded-xl px-4 py-2"
          />

          <select className="border rounded-xl px-4 py-2">
            <option>
              Month
            </option>

            <option>
              January
            </option>

            <option>
              February
            </option>

            <option>
              March
            </option>

            <option>
              April
            </option>

            <option>
              May
            </option>

            <option>
              June
            </option>

            <option>
              July
            </option>

            <option>
              August
            </option>

            <option>
              September
            </option>

            <option>
              October
            </option>

            <option>
              November
            </option>

            <option>
              December
            </option>
          </select>

          <select className="border rounded-xl px-4 py-2">
            <option>
              Year
            </option>

            <option>
              2026
            </option>

            <option>
              2025
            </option>

            <option>
              2024
            </option>
          </select>

        </div>

      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">

        <div className="bg-white rounded-2xl p-6 shadow">

          <h3 className="text-gray-500">
            Candidates
          </h3>

          <h2 className="text-4xl font-bold text-green-600 mt-3">
            {
              stats?.totalCandidates || 0
            }
          </h2>

        </div>

        <div className="bg-white rounded-2xl p-6 shadow">

          <h3 className="text-gray-500">
            Recruiters
          </h3>

          <h2 className="text-4xl font-bold text-blue-600 mt-3">
            {
              stats?.totalRecruiters || 0
            }
          </h2>

        </div>

        <div className="bg-white rounded-2xl p-6 shadow">

          <h3 className="text-gray-500">
            Jobs
          </h3>

          <h2 className="text-4xl font-bold text-purple-600 mt-3">
            {
              stats?.totalJobs || 0
            }
          </h2>

        </div>

        <div className="bg-white rounded-2xl p-6 shadow">

          <h3 className="text-gray-500">
            Applications
          </h3>

          <h2 className="text-4xl font-bold text-orange-600 mt-3">
            {
              stats?.totalApplications || 0
            }
          </h2>

        </div>

        <div className="bg-white rounded-2xl p-6 shadow">

          <h3 className="text-gray-500">
            Active Jobs
          </h3>

          <h2 className="text-4xl font-bold text-emerald-600 mt-3">
            {
              stats?.activeJobs || 0
            }
          </h2>

        </div>

      </div>

      <div className="bg-white rounded-3xl shadow mt-10 p-8">

        <h2 className="text-2xl font-bold mb-4">
          Platform Overview
        </h2>

        <p className="text-gray-500">
          Charts and analytics will be displayed here.
        </p>

      </div>

    </div>
  );
}