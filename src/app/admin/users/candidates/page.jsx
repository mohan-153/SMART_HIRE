"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function CandidatesPage() {
  const [candidates, setCandidates] =
    useState([]);

  const [search, setSearch] =
    useState("");

  const router = useRouter();

  useEffect(() => {
    fetchCandidates();
  }, []);

  const fetchCandidates =
    async () => {
      try {
        const res =
          await axios.get(
            "/api/admin/candidates"
          );

        setCandidates(
          res.data.candidates || []
        );
      } catch (error) {
        console.log(error);
      }
    };

  const deleteUser =
    async (id) => {
      if (
        !confirm(
          "Delete candidate?"
        )
      )
        return;

      try {
        await axios.delete(
          `/api/admin/candidates/${id}`
        );

        fetchCandidates();
      } catch (error) {
        console.log(error);
      }
    };

  const filtered =
    candidates.filter((user) =>
      `${user.firstName} ${user.lastName}`
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  return (
    <div>

      <h1 className="text-4xl font-bold mb-8">
        Candidates
      </h1>

      <div className="bg-white rounded-3xl shadow p-6">

        <input
          type="text"
          placeholder="Search Candidate..."
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
                  Name
                </th>

                <th className="text-left p-4">
                  Email
                </th>

                <th className="text-left p-4">
                  Status
                </th>

                <th className="text-left p-4">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody>

              {filtered.map(
                (user) => (
                  <tr
                    key={user._id}
                    className="border-b"
                  >

                    <td className="p-4">
                      {
                        user.firstName
                      }{" "}
                      {
                        user.lastName
                      }
                    </td>

                    <td className="p-4">
                      {user.email}
                    </td>

                    <td className="p-4">

                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                        Active
                      </span>

                    </td>

                    <td className="p-4 flex gap-2">

                      <button
                        onClick={() =>
                          router.push(
                            `/admin/users/candidates/${user._id}`
                          )
                        }
                        className="bg-blue-500 text-white px-4 py-2 rounded-xl"
                      >
                        View
                      </button>

                      <button
                        onClick={async () => {
                          await axios.put(
                            `/api/admin/candidates/${user._id}`
                          );

                          fetchCandidates();
                        }}
                        className="bg-yellow-500 text-white px-4 py-2 rounded-xl"
                      >
                        {user.isBlocked
                          ? "Unblock"
                          : "Block"}
                      </button>

                      <button
                        onClick={async () => {
                          await axios.delete(
                            `/api/admin/candidates/${user._id}`
                          );

                          fetchCandidates();
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