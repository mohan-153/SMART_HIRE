"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function ApplyJobPage() {
  const router = useRouter();
  const { jobId } = useParams();

  const [loading, setLoading] =
    useState(false);
  const [resumeUploading, setResumeUploading] = useState(false);
  const [resumeFileName, setResumeFileName] = useState("");

  const getFileNameFromUrl = (url) => {
    try {
      if (!url) return "";
      const parts = url.split("/");
      const last = parts[parts.length - 1] || parts[parts.length - 2] || "resume";
      return decodeURIComponent(last.split("?")[0]);
    } catch {
      return "Resume";
    }
  };

  const [formData, setFormData] =
    useState({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      gender: "",

      location: "",
      college: "",
      resume: "",

      type: "",
      passoutYear: "",

      domain: "",
      course: "",
      specialization: "",
      programme: "",
      duration: "",
    });

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    try {
      const res =
        await axios.get(
          "/api/auth/me"
        );

      const user =
        res.data.user;

      setFormData((prev) => ({
        ...prev,
        firstName:
          user.firstName || "",
        lastName:
          user.lastName || "",
        email:
          user.email || "",
      }));
      // also load candidate profile to prefill resume URL if available
      try {
        const profileRes = await axios.get(`/api/candidate/profile?candidateId=${user._id}`);
        const profile = profileRes.data.profile;
        if (profile && profile.resumeUrl) {
          setFormData((prev) => ({ ...prev, resume: profile.resumeUrl }));
        }
      } catch (err) {
        // ignore missing profile
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const submitApplication =
    async () => {
      try {
        setLoading(true);

        const me =
          await axios.get(
            "/api/auth/me"
          );

        await axios.post(
          "/api/jobs/apply",
          {
            ...formData,
            candidateId:
              me.data.user._id,
            jobId,
          }
        );

        alert(
          "Application Submitted Successfully"
        );

        router.push(
          "/candidate/jobs/applied"
        );
      } catch (error) {
        console.log(error);
        alert(
          "Failed to submit application"
        );
      } finally {
        setLoading(false);
      }
    };

  return (
    <div className="max-w-5xl mx-auto p-8">

      <div className="bg-white border rounded-3xl p-8">

        <h1 className="text-3xl font-bold mb-8">
          Apply Job
        </h1>

        {/* Basic Details */}

        <h2 className="text-2xl font-semibold mb-5">
          Basic Details
        </h2>

        <div className="grid md:grid-cols-2 gap-5">

          <input
            name="firstName"
            value={
              formData.firstName
            }
            onChange={
              handleChange
            }
            placeholder="First Name"
            className="border rounded-xl p-3"
          />

          <input
            name="lastName"
            value={
              formData.lastName
            }
            onChange={
              handleChange
            }
            placeholder="Last Name"
            className="border rounded-xl p-3"
          />

          <input
            name="email"
            value={
              formData.email
            }
            onChange={
              handleChange
            }
            placeholder="Email"
            className="border rounded-xl p-3"
          />

          <input
            name="phone"
            value={
              formData.phone
            }
            onChange={
              handleChange
            }
            placeholder="Mobile Number"
            className="border rounded-xl p-3"
          />

        </div>

        {/* Gender */}

        <div className="mt-6">

          <h3 className="font-medium mb-3">
            Gender
          </h3>

              <label className="block mb-2 font-medium">Resume</label>

              <div className="border rounded-xl p-3 w-full flex items-center justify-between">
                <div className="text-gray-700">
                  {resumeFileName
                    ? resumeFileName
                    : formData.resume
                    ? getFileNameFromUrl(formData.resume)
                    : "No resume provided"}
                </div>

                {formData.resume && (
                  <a
                    href={formData.resume}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 underline text-sm"
                  >
                    View Uploaded Resume
                  </a>
                )}
              </div>

              <div className="mt-3">
                <label className="block mb-2 font-medium">Upload a different resume (optional)</label>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={async (e) => {
                    const file = e.target.files?.[0];
                    if (!file) return;

                    try {
                      setResumeUploading(true);
                      setResumeFileName(file.name);

                      const cloudForm = new FormData();
                      cloudForm.append("file", file);
                      cloudForm.append("upload_preset", "resume_upload");

                      const cloudRes = await axios.post(
                        `https://api.cloudinary.com/v1_1/dzhqhnepo/raw/upload`,
                        cloudForm
                      );

                      const uploadedUrl = cloudRes.data.secure_url;

                      setFormData((prev) => ({ ...prev, resume: uploadedUrl }));
                    } catch (err) {
                      console.error(err);
                      alert("Failed to upload resume. Please try again.");
                    } finally {
                      setResumeUploading(false);
                    }
                  }}
                />

                <div className="mt-2">
                  {resumeUploading ? (
                    <span>Uploading resume...</span>
                  ) : (
                    resumeFileName && (
                      <div className="text-sm text-gray-600">Selected: {resumeFileName}</div>
                    )
                  )}
                </div>
              </div>
        
        </div>

        {/* User Details */}

        <h2 className="text-2xl font-semibold mt-10 mb-5">
          User Details
        </h2>

        {/* Type */}

        <div className="mb-6">

          <h3 className="font-medium mb-3">
            Type
          </h3>

          <div className="flex gap-3 flex-wrap">

            {[
              "College Student",
              "Professional",
              "Fresher",
            ].map(
              (type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() =>
                    setFormData({
                      ...formData,
                      type,
                    })
                  }
                  className={`px-5 py-2 border rounded-full ${
                    formData.type ===
                    type
                      ? "bg-blue-600 text-white"
                      : ""
                  }`}
                >
                  {type}
                </button>
              )
            )}

          </div>

        </div>

        {/* Passout */}

        <div className="mb-6">

          <h3 className="font-medium mb-3">
            Passout Year
          </h3>

          <div className="flex gap-3 flex-wrap">

            {[
              "2022",
              "2023",
              "2024",
              "2025",
              "2026",
            ].map(
              (year) => (
                <button
                  key={year}
                  type="button"
                  onClick={() =>
                    setFormData({
                      ...formData,
                      passoutYear:
                        year,
                    })
                  }
                  className={`px-5 py-2 border rounded-full ${
                    formData.passoutYear ===
                    year
                      ? "bg-blue-600 text-white"
                      : ""
                  }`}
                >
                  {year}
                </button>
              )
            )}

          </div>

        </div>

        <div className="grid md:grid-cols-2 gap-5">

          <input
            name="domain"
            value={
              formData.domain
            }
            onChange={
              handleChange
            }
            placeholder="Domain"
            className="border rounded-xl p-3"
          />

          <input
            name="course"
            value={
              formData.course
            }
            onChange={
              handleChange
            }
            placeholder="Course"
            className="border rounded-xl p-3"
          />

          <input
            name="specialization"
            value={
              formData.specialization
            }
            onChange={
              handleChange
            }
            placeholder="Course Specialization"
            className="border rounded-xl p-3"
          />

        </div>

        {/* Programme */}

        <div className="mt-6">

          <h3 className="font-medium mb-3">
            Programme
          </h3>

          <div className="flex gap-3 flex-wrap">

            {[
              "Full Time",
              "Part Time",
              "Distance Learning",
            ].map(
              (
                programme
              ) => (
                <button
                  key={
                    programme
                  }
                  type="button"
                  onClick={() =>
                    setFormData({
                      ...formData,
                      programme,
                    })
                  }
                  className={`px-5 py-2 border rounded-full ${
                    formData.programme ===
                    programme
                      ? "bg-blue-600 text-white"
                      : ""
                  }`}
                >
                  {programme}
                </button>
              )
            )}

          </div>

        </div>

        {/* Duration */}

        <div className="mt-6">

          <h3 className="font-medium mb-3">
            Course Duration
          </h3>

          <div className="flex gap-3">

            {[
              "3 Years",
              "4 Years",
            ].map(
              (
                duration
              ) => (
                <button
                  key={
                    duration
                  }
                  type="button"
                  onClick={() =>
                    setFormData({
                      ...formData,
                      duration,
                    })
                  }
                  className={`px-5 py-2 border rounded-full ${
                    formData.duration ===
                    duration
                      ? "bg-blue-600 text-white"
                      : ""
                  }`}
                >
                  {duration}
                </button>
              )
            )}

          </div>

        </div>

        <div className="mt-10 flex justify-end">

          <button
            onClick={
              submitApplication
            }
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-3 rounded-xl"
          >
            {loading
              ? "Submitting..."
              : "Submit Application"}
          </button>

        </div>

      </div>

    </div>
  );
}