"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import {
  Briefcase,
  MapPin,
  Clock3,
} from "lucide-react";
import InlineLoader from "@/components/InlineLoader";

export default function SavedJobsPage() {
  const router = useRouter();

  const [jobs, setJobs] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    fetchSavedJobs();
  }, []);

  const fetchSavedJobs =
    async () => {
      try {
        const me =
          await axios.get(
            "/api/auth/me"
          );

        const candidateId =
          me.data.user._id;

        const res =
          await axios.get(
            `/api/jobs/save?candidateId=${candidateId}`
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

  const getRemainingDays = (
    deadline
  ) => {
    const diff =
      Math.ceil(
        (new Date(deadline) -
          new Date()) /
          (1000 *
            60 *
            60 *
            24)
      );

    return diff;
  };

  if (loading) {
    return (
      <div className="p-8 flex items-center justify-center min-h-[40vh]">
        <InlineLoader />
      </div>
    );
  }

  return (
    <div className="p-8">

      <h1 className="text-4xl font-bold mb-8">
        Saved Jobs
      </h1>

      {jobs.length === 0 ? (
        <div className="bg-white rounded-3xl p-10 text-center">

          <h2 className="text-2xl font-semibold">
            No Saved Jobs
          </h2>

          <p className="text-gray-500 mt-2">
            Save jobs to view them
            here.
          </p>

        </div>
      ) : (
        <div className="space-y-6">

          {jobs.map((job) => (
            <div
              key={job._id}
              onClick={() =>
                router.push(
                  `/candidate/jobs/${job._id}`
                )
              }
              className="
              bg-white
              border
              rounded-3xl
              p-6
              cursor-pointer
              hover:shadow-lg
              transition
            "
            >

              <h2 className="text-2xl font-bold">
                {job.jobTitle}
              </h2>

              <p className="text-gray-600 mt-1">
                {job.companyName ||
                  job.company ||
                  "Company"}
              </p>

              <div className="flex flex-wrap gap-5 mt-4">

                <div className="flex items-center gap-2">
                  <Briefcase size={16} />
                  {
                    job.experience
                  }
                </div>

                <div>
                  {
                    job.jobType
                  }
                </div>

                <div>
                  {
                    job.workMode
                  }
                </div>

                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  {
                    job.location
                  }
                </div>

                <div className="bg-green-50 text-green-700 px-3 py-1 rounded-full font-semibold">
                  {job.salary}
                </div>

              </div>

              <div className="mt-4 flex flex-wrap gap-2">

                {job.skills?.map(
                  (
                    skill,
                    index
                  ) => (
                    <span
                      key={index}
                      className="
                      bg-gray-100
                      px-3
                      py-1
                      rounded-full
                      text-sm
                    "
                    >
                      {skill}
                    </span>
                  )
                )}

              </div>

              <div className="mt-4 text-sm text-gray-500">

                Posted{" "}
                {new Date(
                  job.createdAt
                ).toLocaleDateString()}

              </div>

              <div className="text-green-600 text-sm mt-1">

                <Clock3
                  size={14}
                  className="inline mr-1"
                />

                {getRemainingDays(
                  job.deadline
                )}{" "}
                days left

              </div>

            </div>
          ))}

        </div>
      )}

    </div>
  );
}