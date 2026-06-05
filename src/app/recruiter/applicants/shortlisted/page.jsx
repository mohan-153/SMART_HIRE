"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import InlineLoader from "@/components/InlineLoader";

export default function ApplicantsPage() {
  const [applications, setApplications] =
    useState([]);
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const fetchApplicants =
  async () => {
    try {
      setLoading(true);
      const me =
        await axios.get(
          "/api/auth/me"
        );

      const recruiterId =
        me.data.user._id;

      const res =
        await axios.get(
          `/api/recruiter/applicants?recruiterId=${recruiterId}`
        );

      setApplications(
        res.data.applications.filter(
          (item) =>
            item.status ===
            "Shortlisted"
        )
      );
    } catch (error) {
      console.log(error);
    }
    finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplicants();
  }, []);

  if (loading) {
    return (
      <div className="p-6 flex items-center justify-center min-h-[40vh]">
        <InlineLoader />
      </div>
    );
  }

  const updateStatus =
    async (
      applicationId,
      status
    ) => {
      try {
        await axios.put(
          "/api/applications/status",
          {
            applicationId,
            status,
          }
        );

        toast.success(
          "Status Updated"
        );

        fetchApplicants();
      } catch (error) {
        toast.error(
          "Update Failed"
        );
      }
    };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black p-6">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-3xl font-bold mb-8">
          Job Applicants
        </h1>

        <div className="space-y-5">

          {applications.map(
            (application) => (
              <div
                key={application._id}
                onClick={() => router.push(`/recruiter/applicants/${application._id}`)}
                className="bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow cursor-pointer"
              >

                <div className="flex flex-col lg:flex-row justify-between gap-5">

                  <div>

                    <h2 className="text-xl font-bold">
                      {
                        application
                          .candidateId
                          ?.firstName
                      }{" "}
                      {
                        application
                          .candidateId
                          ?.lastName
                      }
                    </h2>

                    <p className="text-gray-500">
                      {
                        application
                          .candidateId
                          ?.email
                      }
                    </p>

                    <p className="text-green-600 mt-2">
                      Applied For:
                      {" "}
                      {
                        application
                          .jobId
                          ?.jobTitle
                      }
                    </p>

                  </div>

                  <div className="flex items-center">
                    <span className={`px-4 py-2 rounded-full font-semibold ${
                      application.status === "Applied"
                        ? "bg-gray-100 text-gray-800"
                        : application.status === "Under Review"
                        ? "bg-yellow-100 text-yellow-800"
                        : application.status === "Shortlisted"
                        ? "bg-blue-100 text-blue-800"
                        : application.status === "Selected"
                        ? "bg-green-100 text-green-800"
                        : application.status === "Rejected"
                        ? "bg-red-100 text-red-800"
                        : "bg-gray-100 text-gray-800"
                    }`}>
                      {application.status}
                    </span>
                  </div>

                </div>

              </div>
            )
          )}

        </div>

      </div>

    </div>
  );
}