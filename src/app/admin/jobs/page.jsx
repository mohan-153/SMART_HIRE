"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function AdminJobsPage() {
    const [jobs, setJobs] =
        useState([]);
    const router = useRouter();

    const [search, setSearch] =
        useState("");

    useEffect(() => {
        fetchJobs();
    }, []);

    const fetchJobs =
        async () => {
            try {
                const res =
                    await axios.get(
                        "/api/admin/jobs"
                    );

                setJobs(
                    res.data.jobs || []
                );
            } catch (error) {
                console.log(error);
            }
        };

    const filtered =
        jobs.filter((job) =>
            job.jobTitle
                ?.toLowerCase()
                .includes(
                    search.toLowerCase()
                )
        );

    return (
        <div>

            <h1 className="text-4xl font-bold mb-8">
                Manage Jobs
            </h1>

            <div className="bg-white rounded-3xl shadow p-6">

                <input
                    type="text"
                    placeholder="Search Job..."
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
                                    Job
                                </th>

                                <th className="text-left p-4">
                                    Company
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
                                (job) => (
                                    <tr
                                        key={job._id}
                                        className="border-b"
                                    >

                                        <td className="p-4">
                                            {
                                                job.jobTitle
                                            }
                                        </td>

                                        <td className="p-4">
                                            {
                                                job.companyName
                                            }
                                        </td>

                                        <td className="p-4">

                                            <span
                                                className={`px-3 py-1 rounded-full ${job.status ===
                                                        "published"
                                                        ? "bg-green-100 text-green-700"
                                                        : "bg-red-100 text-red-700"
                                                    }`}
                                            >
                                                {
                                                    job.status
                                                }
                                            </span>

                                        </td>

                                        <td className="p-4 flex gap-2">

                                            <button
                                                onClick={() =>
                                                    router.push(
                                                        `/admin/jobs/${job._id}`
                                                    )
                                                }
                                                className="bg-blue-500 text-white px-4 py-2 rounded-xl"
                                            >
                                                View
                                            </button>

                                            <button
                                                onClick={async () => {
                                                    await axios.put(
                                                        `/api/admin/jobs/${job._id}`
                                                    );

                                                    fetchJobs();
                                                }}
                                                className="bg-yellow-500 text-white px-4 py-2 rounded-xl"
                                            >
                                                {job.status ===
                                                    "published"
                                                    ? "Close"
                                                    : "Publish"}
                                            </button>

                                            <button
                                                onClick={async () => {
                                                    await axios.delete(
                                                        `/api/admin/jobs/${job._id}`
                                                    );

                                                    fetchJobs();
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