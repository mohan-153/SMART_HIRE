"use client";

import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function CandidateViewPage() {
  const { id } = useParams();

  const [candidate, setCandidate] =
    useState(null);

  useEffect(() => {
    loadCandidate();
  }, []);

  const loadCandidate =
    async () => {
      try {
        const res =
          await axios.get(
            `/api/admin/candidates/${id}`
          );

        setCandidate(
          res.data.candidate
        );
      } catch (error) {
        console.log(error);
      }
    };

  if (!candidate)
    return (
      <div className="p-10">
        Loading...
      </div>
    );

  return (
    <div className="max-w-5xl mx-auto">

      <div className="bg-white rounded-3xl shadow p-8">

        <h1 className="text-4xl font-bold mb-8">
          Candidate Details
        </h1>

        <div className="grid md:grid-cols-2 gap-6">

          <div>
            <label className="font-semibold">
              First Name
            </label>

            <p>{candidate.firstName}</p>
          </div>

          <div>
            <label className="font-semibold">
              Last Name
            </label>

            <p>{candidate.lastName}</p>
          </div>

          <div>
            <label className="font-semibold">
              Email
            </label>

            <p>{candidate.email}</p>
          </div>

          <div>
            <label className="font-semibold">
              Status
            </label>

            <p>
              {candidate.isBlocked
                ? "Blocked"
                : "Active"}
            </p>
          </div>

          <div>
            <label className="font-semibold">
              Verified
            </label>

            <p>
              {candidate.isVerified
                ? "Yes"
                : "No"}
            </p>
          </div>

          <div>
            <label className="font-semibold">
              Joined
            </label>

            <p>
              {new Date(
                candidate.createdAt
              ).toLocaleDateString()}
            </p>
          </div>

        </div>

        <div className="mt-8">

          <label className="font-semibold">
            Resume
          </label>

          <div className="mt-2">

            {candidate.resumeUrl ? (
              <a
                href={
                  candidate.resumeUrl
                }
                target="_blank"
                className="text-blue-600"
              >
                View Resume
              </a>
            ) : (
              <p>
                Resume Not Uploaded
              </p>
            )}

          </div>

        </div>

      </div>

    </div>
  );
}