"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import BackButton from "@/components/BackButton";
import InlineLoader from "@/components/InlineLoader";
export default function JobDetailsPage() {
  const { id } = useParams();

  const [job, setJob] = useState(null);

  useEffect(() => {
    loadJob();
  }, []);

  const loadJob = async () => {
    try {
      const res = await axios.get(
        `/api/jobs/${id}`
      );

      setJob(res.data.job);
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
<BackButton />
      <h1 className="text-4xl font-bold mb-6">
        {job.jobTitle}
      </h1>

      <div className="space-y-4 bg-white shadow rounded-2xl p-8">

        <p>
          <strong>Type:</strong>{" "}
          {job.jobType}
        </p>

        <p>
          <strong>Experience:</strong>{" "}
          {job.experience}
        </p>

        <p>
          <strong>Salary:</strong>{" "}
          {job.salary}
        </p>

        <p>
          <strong>Location:</strong>{" "}
          {job.location}
        </p>

        <p>
          <strong>Work Mode:</strong>{" "}
          {job.workMode}
        </p>

        <p>
          <strong>Skills:</strong>{" "}
          {job.skills?.join(", ")}
        </p>

        <p>
          <strong>Education:</strong>{" "}
          {job.education}
        </p>

        <div>
          <h3 className="font-bold mb-2">
            Job Description
          </h3>

          <p>{job.description}</p>
        </div>

        <div>
          <h3 className="font-bold mb-2">
            Responsibilities
          </h3>

          <p>
            {job.responsibilities}
          </p>
        </div>

        <div>
          <h3 className="font-bold mb-2">
            Benefits
          </h3>

          <p>{job.benefits}</p>
        </div>

        <p>
          <strong>
            Application Deadline:
          </strong>{" "}
          {new Date(
            job.deadline
          ).toLocaleDateString()}
        </p>

      </div>

    </div>
  );
}