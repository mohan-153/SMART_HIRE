"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import InlineLoader from "@/components/InlineLoader";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RecruiterSidebar from "@/components/RecruiterSidebar";

export default function DraftJobsPage() {
  const [drafts, setDrafts] =
    useState([]);
  const [loading, setLoading] = useState(true);
  const loadDrafts = async () => {
    try {
      setLoading(true);
      const me = await axios.get("/api/auth/me");
      const recruiterId = me.data.user._id;
      const res = await axios.get(`/api/jobs/drafts/${recruiterId}`);
      setDrafts(res.data.jobs || []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDrafts();
  }, []);

  if (loading) {
    return (
      <div className="p-6 flex items-center justify-center min-h-[40vh]">
        <InlineLoader />
      </div>
    );
  }

  const publishJob =
    async (jobId) => {
      try {
        await axios.put(
          `/api/jobs/publish/${jobId}`
        );

        loadDrafts();
      } catch (error) {
        console.log(error);
      }
    };

  return (
    <>

      <div className="flex min-h-screen bg-gray-50">


        <div className="flex-1 p-8">

          <h1 className="text-3xl font-bold mb-6">
            Draft Jobs
          </h1>

          <div className="bg-white rounded-2xl shadow overflow-hidden">

            <table className="w-full">

              <thead className="bg-gray-100">

                <tr>

                  <th className="p-4 text-left">
                    Job Title
                  </th>

                  <th className="p-4 text-left">
                    Location
                  </th>

                  <th className="p-4 text-left">
                    Action
                  </th>

                </tr>

              </thead>

              <tbody>

                {drafts.length === 0 ? (
                  <tr>
                    <td
                      colSpan="3"
                      className="p-8 text-center"
                    >
                      No Draft Jobs
                    </td>
                  </tr>
                ) : (
                  drafts.map(
                    (job) => (
                      <tr
                        key={
                          job._id
                        }
                        className="border-t"
                      >
                        <td className="p-4">
                          {
                            job.jobTitle
                          }
                        </td>

                        <td className="p-4">
                          {
                            job.location
                          }
                        </td>

                        <td className="p-4">
                          <button
                            onClick={() =>
                              publishJob(
                                job._id
                              )
                            }
                            className="bg-green-600 text-white px-4 py-2 rounded-lg"
                          >
                            Post Job
                          </button>
                        </td>
                      </tr>
                    )
                  )
                )}

              </tbody>

            </table>

          </div>

        </div>

      </div>

      
    </>
  );
}