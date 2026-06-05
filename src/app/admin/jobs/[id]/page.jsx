"use client";

import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function JobViewPage() {
  const { id } = useParams();

  const [job, setJob] =
    useState(null);

  useEffect(() => {
    loadJob();
  }, []);

  const loadJob =
    async () => {
      try {
        const res =
          await axios.get(
            `/api/admin/jobs/${id}`
          );

        setJob(res.data.job);
      } catch (error) {
        console.log(error);
      }
    };

  if (!job)
    return (
      <div className="p-10">
        Loading...
      </div>
    );

  return (
    <div className="max-w-6xl mx-auto">

      <div className="bg-white rounded-3xl shadow p-8">

        <h1 className="text-4xl font-bold">
          {job.jobTitle}
        </h1>

        <div className="grid md:grid-cols-2 gap-6 mt-8">

          <div>
            <label className="font-semibold">
              Job Type
            </label>

            <p>{job.jobType}</p>
          </div>

          <div>
            <label className="font-semibold">
              Experience
            </label>

            <p>
              {job.experience}
            </p>
          </div>

          <div>
            <label className="font-semibold">
              Salary
            </label>

            <p>{job.salary}</p>
          </div>

          <div>
            <label className="font-semibold">
              Location
            </label>

            <p>
              {job.location}
            </p>
          </div>

          <div>
            <label className="font-semibold">
              Work Mode
            </label>

            <p>
              {job.workMode}
            </p>
          </div>

          <div>
            <label className="font-semibold">
              Status
            </label>

            <p>
              {job.status}
            </p>
          </div>

          <div>
            <label className="font-semibold">
              Deadline
            </label>

            <p>
              {new Date(
                job.deadline
              ).toLocaleDateString()}
            </p>
          </div>

        </div>

        <div className="mt-8">

          <label className="font-semibold">
            Skills
          </label>

          <div className="flex flex-wrap gap-2 mt-2">

            {job.skills?.map(
              (
                skill,
                index
              ) => (
                <span
                  key={index}
                  className="bg-green-100 text-green-700 px-3 py-1 rounded-full"
                >
                  {skill}
                </span>
              )
            )}

          </div>

        </div>

        <div className="mt-8">

          <label className="font-semibold">
            Description
          </label>

          <p className="mt-2">
            {job.description}
          </p>

        </div>

        <div className="mt-8">

          <label className="font-semibold">
            Responsibilities
          </label>

          <p className="mt-2">
            {
              job.responsibilities
            }
          </p>

        </div>

        <div className="mt-8">

          <label className="font-semibold">
            Benefits
          </label>

          <p className="mt-2">
            {job.benefits}
          </p>

        </div>

      </div>

    </div>
  );
}