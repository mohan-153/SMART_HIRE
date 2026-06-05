"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function CandidateProfileViewPage() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      const userRes = await axios.get("/api/auth/me");

      setUser(userRes.data.user);

      const candidateId =
        userRes.data.user._id;

      const profileRes =
        await axios.get(
          `/api/candidate/profile?candidateId=${candidateId}`
        );

      setProfile(
        profileRes.data.profile
      );
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="p-10">
        Loading Profile...
      </div>
    );
  }

  return (
    <div className="p-8 bg-gray-50 min-h-screen">

      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg p-8">

        {/* Header */}

        <div className="flex items-center justify-between mb-8">

          <div className="flex items-center gap-5">

            <div className="w-24 h-24 rounded-full bg-green-500 text-white flex items-center justify-center text-4xl font-bold">
              {user?.firstName?.charAt(0)}
            </div>

            <div>
              <h1 className="text-4xl font-bold uppercase">
                {user?.firstName} {user?.lastName}
              </h1>

              <p className="text-gray-500">
                {user?.email}
              </p>

              <p className="text-gray-500">
                {profile?.phone}
              </p>
            </div>

          </div>

          <Link
            href="/candidate/account/profile"
            className="bg-green-600 text-white px-5 py-3 rounded-xl hover:bg-green-700"
          >
            Edit Profile
          </Link>

        </div>

        {/* Personal Details */}

        <div className="grid md:grid-cols-2 gap-6">

          <div className="border rounded-2xl p-5">
            <h2 className="font-bold text-xl mb-4">
              Personal Information
            </h2>

            <div className="space-y-3">

              <p>
                <strong>Name:</strong>{" "}
                {user?.firstName} {user?.lastName}
              </p>

              <p>
                <strong>Email:</strong>{" "}
                {user?.email}
              </p>

              <p>
                <strong>Phone:</strong>{" "}
                {profile?.phone || "-"}
              </p>

              <p>
                <strong>Location:</strong>{" "}
                {profile?.location || "-"}
              </p>

            </div>
          </div>

          <div className="border rounded-2xl p-5">
            <h2 className="font-bold text-xl mb-4">
              Professional Links
            </h2>

            <div className="space-y-3">

              <p>
                <strong>LinkedIn:</strong>
              </p>

              <a
                href={profile?.linkedin}
                target="_blank"
                className="text-blue-600 break-all"
              >
                {profile?.linkedin}
              </a>

              <p>
                <strong>GitHub:</strong>
              </p>

              <a
                href={profile?.github}
                target="_blank"
                className="text-blue-600 break-all"
              >
                {profile?.github}
              </a>

              {profile?.portfolio && (
                <>
                  <p>
                    <strong>Portfolio:</strong>
                  </p>

                  <a
                    href={profile?.portfolio}
                    target="_blank"
                    className="text-blue-600 break-all"
                  >
                    {profile?.portfolio}
                  </a>
                </>
              )}

            </div>
          </div>

        </div>

        {/* Skills */}

        <div className="border rounded-2xl p-5 mt-6">

          <h2 className="font-bold text-xl mb-4">
            Skills
          </h2>

          <div className="flex flex-wrap gap-2">

            {profile?.skills?.length > 0 ? (
              profile.skills.map(
                (skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-green-100 text-green-700 rounded-full"
                  >
                    {skill}
                  </span>
                )
              )
            ) : (
              <p>No skills added</p>
            )}

          </div>

        </div>

        {/* Education */}

        <div className="border rounded-2xl p-5 mt-6">

          <h2 className="font-bold text-xl mb-4">
            Education
          </h2>

          <p>
            {profile?.education ||
              "Not Added"}
          </p>

        </div>

        {/* Experience */}

        <div className="border rounded-2xl p-5 mt-6">

          <h2 className="font-bold text-xl mb-4">
            Experience
          </h2>

          <p>
            {profile?.experience ||
              "Not Added"}
          </p>

        </div>

        {/* Bio */}

        <div className="border rounded-2xl p-5 mt-6">

          <h2 className="font-bold text-xl mb-4">
            Professional Summary
          </h2>

          <p>
            {profile?.bio ||
              "Not Added"}
          </p>

        </div>

        {/* Resume */}

        <div className="border rounded-2xl p-5 mt-6">

          <h2 className="font-bold text-xl mb-4">
            Resume
          </h2>

          {profile?.resumeUrl ? (
            <a
              href={profile.resumeUrl}
              target="_blank"
              className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg"
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
  );
}