"use client";

import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function PostJobPage() {
  const [loading, setLoading] =
    useState(false);

  const [formData, setFormData] =
    useState({
      jobTitle: "",
      jobType: "",
      experience: "",
      salary: "",
      location: "",
      workMode: "",
      skills: "",
      education: "",
      description: "",
      responsibilities: "",
      benefits: "",
      deadline: "",
      status: "draft",
    });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const submitJob = async (
    status
  ) => {
    try {
      setLoading(true);

      const userRes =
        await axios.get(
          "/api/auth/me"
        );

      const recruiterId =
        userRes.data.user._id;

      await axios.post(
        "/api/jobs",
        {
          recruiterId,
          ...formData,
          status,
          skills:
            formData.skills
              .split(",")
              .map((skill) =>
                skill.trim()
              ),
        }
      );

      toast.success(
        status === "draft"
          ? "Draft Saved"
          : "Job Published"
      );

      setFormData({
        jobTitle: "",
        jobType: "",
        experience: "",
        salary: "",
        location: "",
        workMode: "",
        skills: "",
        education: "",
        description: "",
        responsibilities: "",
        benefits: "",
        deadline: "",
        status: "draft",
      });
    } catch (error) {
      console.log(error);

      toast.error(
        "Failed to save job"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>

      <h1 className="text-4xl font-bold mb-2">
        Post New Job
      </h1>

      <p className="text-gray-500 mb-8">
        Create and publish job opportunities.
      </p>

      <div className="bg-white rounded-3xl shadow-lg p-8 space-y-5">

        <div className="grid md:grid-cols-2 gap-5">

          <input
            type="text"
            name="jobTitle"
            placeholder="Job Title"
            value={formData.jobTitle}
            onChange={handleChange}
            className="p-3 border rounded-xl"
          />

          <select
            name="jobType"
            value={formData.jobType}
            onChange={handleChange}
            className="p-3 border rounded-xl"
          >
            <option value="">
              Job Type
            </option>

            <option>
              Full Time
            </option>

            <option>
              Part Time
            </option>

            <option>
              Internship
            </option>

            <option>
              Contract
            </option>

          </select>

        </div>

        <div className="grid md:grid-cols-2 gap-5">

          <input
            type="text"
            name="experience"
            placeholder="Experience Required"
            value={
              formData.experience
            }
            onChange={handleChange}
            className="p-3 border rounded-xl"
          />

          <input
            type="text"
            name="salary"
            placeholder="Salary Range"
            value={formData.salary}
            onChange={handleChange}
            className="p-3 border rounded-xl"
          />

        </div>

        <div className="grid md:grid-cols-2 gap-5">

          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            className="p-3 border rounded-xl"
          />

          <select
            name="workMode"
            value={formData.workMode}
            onChange={handleChange}
            className="p-3 border rounded-xl"
          >
            <option value="">
              Work Mode
            </option>

            <option>
              Remote
            </option>

            <option>
              Hybrid
            </option>

            <option>
              Onsite
            </option>

          </select>

        </div>

        <input
          type="text"
          name="skills"
          placeholder="Skills Required (React, Node.js, MongoDB)"
          value={formData.skills}
          onChange={handleChange}
          className="w-full p-3 border rounded-xl"
        />

        <input
          type="text"
          name="education"
          placeholder="Education Required"
          value={formData.education}
          onChange={handleChange}
          className="w-full p-3 border rounded-xl"
        />

        <textarea
          rows={5}
          name="description"
          placeholder="Job Description"
          value={
            formData.description
          }
          onChange={handleChange}
          className="w-full p-3 border rounded-xl"
        />

        <textarea
          rows={5}
          name="responsibilities"
          placeholder="Responsibilities"
          value={
            formData.responsibilities
          }
          onChange={handleChange}
          className="w-full p-3 border rounded-xl"
        />

        <textarea
          rows={4}
          name="benefits"
          placeholder="Benefits"
          value={formData.benefits}
          onChange={handleChange}
          className="w-full p-3 border rounded-xl"
        />

        <div>

          <label className="block mb-2 font-medium">
            Application Deadline
          </label>

          <input
            type="date"
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
            className="p-3 border rounded-xl"
          />

        </div>

        <div className="flex gap-4 pt-3">

          <button
            type="button"
            disabled={loading}
            onClick={() =>
              submitJob(
                "draft"
              )
            }
            className="px-6 py-3 rounded-xl bg-gray-600 text-white"
          >
            Save Draft
          </button>

          <button
            type="button"
            disabled={loading}
            onClick={() =>
              submitJob(
                "published"
              )
            }
            className="px-6 py-3 rounded-xl bg-green-600 text-white"
          >
            Publish Job
          </button>

        </div>

      </div>

    </div>
  );
}