"use client";

import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function RecruiterViewPage() {
  const { id } = useParams();

  const [recruiter, setRecruiter] =
    useState(null);

  useEffect(() => {
    loadRecruiter();
  }, []);

  const loadRecruiter =
    async () => {
      try {
        const res =
          await axios.get(
            `/api/admin/recruiters/${id}`
          );

        setRecruiter(
          res.data.recruiter
        );
      } catch (error) {
        console.log(error);
      }
    };

  if (!recruiter)
    return (
      <div className="p-10">
        Loading...
      </div>
    );

  return (
    <div className="max-w-6xl mx-auto">

      <div className="bg-white rounded-3xl shadow p-8">

        <h1 className="text-4xl font-bold mb-8">
          Recruiter Details
        </h1>

        <div className="grid md:grid-cols-2 gap-6">

          <div>
            <label className="font-semibold">
              Name
            </label>

            <p>
              {
                recruiter.firstName
              }{" "}
              {
                recruiter.lastName
              }
            </p>
          </div>

          <div>
            <label className="font-semibold">
              Email
            </label>

            <p>
              {recruiter.email}
            </p>
          </div>

          <div>
            <label className="font-semibold">
              Mobile
            </label>

            <p>
              {recruiter.mobile}
            </p>
          </div>

          <div>
            <label className="font-semibold">
              Designation
            </label>

            <p>
              {
                recruiter.designation
              }
            </p>
          </div>

          <div>
            <label className="font-semibold">
              Company
            </label>

            <p>
              {
                recruiter.companyName
              }
            </p>
          </div>

          <div>
            <label className="font-semibold">
              Website
            </label>

            <p>
              {
                recruiter.companyWebsite
              }
            </p>
          </div>

          <div>
            <label className="font-semibold">
              Location
            </label>

            <p>
              {
                recruiter.companyLocation
              }
            </p>
          </div>

          <div>
            <label className="font-semibold">
              Sector
            </label>

            <p>
              {recruiter.sector}
            </p>
          </div>

        </div>

        <div className="mt-8">

          <label className="font-semibold">
            Company Description
          </label>

          <p className="mt-2">
            {
              recruiter.companyDescription
            }
          </p>

        </div>

      </div>

    </div>
  );
}