"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import InlineLoader from "@/components/InlineLoader";

export default function AppliedJobsPage() {
  const router = useRouter();

  const [applications,
    setApplications] =
    useState([]);

  const [loading,
    setLoading] =
    useState(true);

  useEffect(() => {
    loadApplications();
  }, []);

  const loadApplications =
    async () => {
      try {
        const me =
          await axios.get(
            "/api/auth/me"
          );

        const res =
          await axios.get(
            `/api/applications/candidate/${me.data.user._id}`
          );

        setApplications(
          res.data.applications || []
        );
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

  return (
    <div className="p-8">

      <h1 className="text-4xl font-bold mb-8">
        Applied Jobs
      </h1>

      {loading ? (
        <div className="py-10 flex items-center justify-center">
          <InlineLoader />
        </div>
      ) : applications.length ===
        0 ? (
        <div className="bg-white p-10 rounded-3xl">
          No Applications Found
        </div>
      ) : (
        <div className="space-y-5">

          {applications.map(
            (item) => (

              <div
                key={item._id}
                onClick={() =>
                  router.push(
                    `/candidate/jobs/${item.jobId}`
                  )
                }
                className="
                bg-white
                rounded-3xl
                border
                p-6
                cursor-pointer
                hover:shadow-lg
                transition
              "
              >
                <div className="flex justify-between">

                  <div className="flex gap-5">

                    <div
                      className="
                      w-20
                      h-20
                      rounded-2xl
                      bg-blue-100
                      flex
                      items-center
                      justify-center
                      text-3xl
                      font-bold
                      text-blue-700
                    "
                    >
                      {item.companyName?.[0]}
                    </div>

                    <div>

                      <h2 className="text-2xl font-bold">
                        {item.jobTitle}
                      </h2>

                      <p className="text-gray-600">
                        {item.companyName}
                      </p>

                      <p className="mt-2 text-sm text-gray-500">
                        Applied On{" "}
                        {new Date(
                          item.createdAt
                        ).toLocaleDateString()}
                      </p>

                      <p className="text-sm text-gray-500">
                        {item.location}
                      </p>

                    </div>

                  </div>

                  <div>

                    <span
                      className="
                      bg-green-100
                      text-green-700
                      px-4
                      py-2
                      rounded-full
                      font-semibold
                    "
                    >
                      {item.status}
                    </span>

                  </div>

                </div>

              </div>

            )
          )}

        </div>
      )}

    </div>
  );
}