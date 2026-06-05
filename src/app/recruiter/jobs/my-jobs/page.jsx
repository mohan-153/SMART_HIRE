"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import InlineLoader from "@/components/InlineLoader";

import { Eye } from "lucide-react";
import Link from "next/link";

export default function MyJobsPage() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadJobs();
  }, []);

  const loadJobs = async () => {
    try {
      setLoading(true);
      const me = await axios.get("/api/auth/me");

      const recruiterId =
        me.data.user._id;

      const res =
        await axios.get(
          `/api/jobs/recruiter/${recruiterId}`
        );

      setJobs(
        res.data.jobs || []
      );
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="p-6 flex items-center justify-center min-h-[40vh]">
        <InlineLoader />
      </div>
    );
  }

  return (
    <>

      <div className="flex min-h-screen bg-gray-50">


        <div className="flex-1 p-8">

          <h1 className="text-3xl font-bold mb-6">
            My Jobs
          </h1>

          <div className="bg-white rounded-2xl shadow overflow-hidden">

            <table className="w-full">

              <thead className="bg-gray-100">

                <tr>

                  <th className="p-4 text-left">
                    Job Title
                  </th>

                  <th className="p-4 text-left">
                    Type
                  </th>

                  <th className="p-4 text-left">
                    Location
                  </th>

                  <th className="p-4 text-left">
                    Status
                  </th>

                  <th className="p-4 text-left">
  Action
</th>

                </tr>

              </thead>

              <tbody>

                {jobs.length === 0 ? (
                  <tr>
                    <td
                      colSpan="4"
                      className="p-8 text-center"
                    >
                      No Jobs Found
                    </td>
                  </tr>
                ) : (
                  jobs.map((job) => (
                    <tr
                      key={job._id}
                      className="border-t"
                    >
                      <td className="p-4">
                        {job.jobTitle}
                      </td>

                      <td className="p-4">
                        {job.jobType}
                      </td>

                      <td className="p-4">
                        {job.location}
                      </td>

                      <td className="p-4">
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                          Published
                        </span>
                      </td>

                      <td className="p-4">
        <Link
          href={`/recruiter/jobs/view/${job._id}`}
          className="text-blue-600"
        >
          <Eye size={20} />
        </Link>
      </td>
                    </tr>
                  ))
                )}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </>
  );
}