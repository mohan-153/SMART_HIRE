"use client";

import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import {  useRouter } from "next/navigation";
import BackButton from "@/components/BackButton";
import InlineLoader from "@/components/InlineLoader";

export default function JobDetails() {
  const { jobId } = useParams();
  const router = useRouter();

  const [job, setJob] =
    useState(null);

  const [alreadyApplied,
  setAlreadyApplied] =
  useState(false);

  useEffect(() => {
    fetchJob();
  }, []);

  const fetchJob = async () => {
  try {
    const res =
      await axios.get(
        `/api/jobs/${jobId}`
      );

    setJob(res.data.job);

    const me =
      await axios.get(
        "/api/auth/me"
      );

    const applied =
      await axios.get(
        `/api/applications/check?candidateId=${me.data.user._id}&jobId=${jobId}`
      );

    setAlreadyApplied(
      applied.data.applied
    );
  } catch (error) {
    console.log(error);
  }
};

  if (!job)
    return (
      <div className="p-10 flex items-center justify-center min-h-[40vh]">
        <InlineLoader />
      </div>
    );

  return (
    <div className="max-w-5xl mx-auto p-8">

      <div className="bg-white rounded-3xl shadow p-8">
<BackButton />
        <h1 className="text-4xl font-bold">
          {job.jobTitle}
        </h1>

        <p className="text-xl text-gray-600 mt-2">
          {job.companyName}
        </p>

        <div className="mt-6 space-y-4">

          <p>
            <b>Location:</b>{" "}
            {job.location}
          </p>

          <p>
            <b>Experience:</b>{" "}
            {job.experience}
          </p>

          <p>
            <b>Salary:</b>{" "}
            {job.salary}
          </p>

          <p>
            <b>Type:</b>{" "}
            {job.jobType}
          </p>

          <p>
            <b>Work Mode:</b>{" "}
            {job.workMode}
          </p>

          <p>
            <b>Description:</b>
          </p>

          <p>
            {job.description}
          </p>

        </div>

        {alreadyApplied ? (
  <button
    disabled
    className="
      mt-8
      bg-green-100
      text-green-700
      px-8
      py-3
      rounded-xl
      font-semibold
      cursor-not-allowed
    "
  >
    Applied ✓
  </button>
) : (
  <button
    onClick={() =>
      router.push(
        `/candidate/jobs/${job._id}/apply`
      )
    }
    className="
      mt-8
      bg-green-600
      hover:bg-green-700
      text-white
      px-8
      py-3
      rounded-xl
      font-semibold
    "
  >
    Apply Now
  </button>
)}

      </div>

    </div>
  );
}