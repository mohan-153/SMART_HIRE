"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function RecruitersPage() {
  const [recruiters, setRecruiters] =
    useState([]);
  const router = useRouter();

  const [search, setSearch] =
    useState("");

  useEffect(() => {
    fetchRecruiters();
  }, []);

  const fetchRecruiters =
    async () => {
      try {
        const res =
          await axios.get(
            "/api/admin/recruiters"
          );

        setRecruiters(
          res.data.recruiters || []
        );
      } catch (error) {
        console.log(error);
      }
    };

  const filtered =
    recruiters.filter((item) =>
      (
        item.companyName ||
        ""
      )
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  return (
    <div>

      <h1 className="text-4xl font-bold mb-8">
        Recruiters
      </h1>

      <div className="bg-white rounded-3xl shadow p-6">

        <input
          type="text"
          placeholder="Search Recruiter..."
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }
          className="border p-3 rounded-xl w-full mb-6"
        />

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="border-b">

                <th className="text-left p-4">
                  Company
                </th>

                <th className="text-left p-4">
                  Email
                </th>

                <th className="text-left p-4">
                  Jobs
                </th>

                <th className="text-left p-4">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody>

              {filtered.map(
                (item) => (
                  <tr
                    key={item._id}
                    className="border-b"
                  >

                    <td className="p-4">
                      {
                        item.companyName
                      }
                    </td>

                    <td className="p-4">
                      {item.email}
                    </td>

                    <td className="p-4">
                      {item.jobsCount || 0}
                    </td>

                    <td className="p-4 flex gap-2">

                      <button
                        onClick={() =>
                          router.push(
                            `/admin/users/recruiters/${item._id}`
                          )
                        }
                        className="bg-blue-500 text-white px-4 py-2 rounded-xl"
                      >
                        View
                      </button>

                      <button
                        onClick={async () => {
                          await axios.put(
                            `/api/admin/recruiters/${item._id}`
                          );

                          fetchRecruiters();
                        }}
                        className="bg-yellow-500 text-white px-4 py-2 rounded-xl"
                      >
                        {item.isBlocked
                          ? "Unblock"
                          : "Block"}
                      </button>

                      <button
                        onClick={async () => {
                          await axios.delete(
                            `/api/admin/recruiters/${item._id}`
                          );

                          fetchRecruiters();
                        }}
                        className="bg-red-500 text-white px-4 py-2 rounded-xl"
                      >
                        Delete
                      </button>

                    </td>

                  </tr>
                )
              )}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}