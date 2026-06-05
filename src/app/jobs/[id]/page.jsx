"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import InlineLoader from "@/components/InlineLoader";

export default function JobDetails({
    params,
}) {
    const [job, setJob] =
        useState(null);

    const fetchJob = async () => {
        try {
            const res = await axios.get(
                `/api/jobs/${params.id}`
            );

            setJob(res.data.job);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchJob();
    }, []);

    if (!job) {
        return (
            <div className="min-h-screen flex justify-center items-center">
                <InlineLoader />
            </div>
        );
    }

    const applyJob = async () => {
        try {
            const candidateId =
                "TEMP_CANDIDATE_ID";

            await axios.post(
                "/api/applications",
                {
                    candidateId,
                    recruiterId:
                        job.recruiterId,
                    jobId: job._id,
                }
            );

            toast.success(
                "Application submitted successfully"
            );
        } catch (error) {
            toast.error(
                error.response?.data
                    ?.message
            );
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-black p-6">

            <div className="max-w-5xl mx-auto bg-white dark:bg-zinc-900 rounded-3xl shadow-md p-8">

                <h1 className="text-4xl font-bold">
                    {job.jobTitle}
                </h1>

                <p className="text-green-600 text-xl mt-2">
                    {job.companyName}
                </p>

                <div className="grid md:grid-cols-2 gap-4 mt-8">

                    <div>
                        <strong>Location:</strong>
                        <p>{job.location}</p>
                    </div>

                    <div>
                        <strong>Salary:</strong>
                        <p>{job.salary}</p>
                    </div>

                    <div>
                        <strong>Job Type:</strong>
                        <p>{job.jobType}</p>
                    </div>

                    <div>
                        <strong>Experience:</strong>
                        <p>{job.experienceLevel}</p>
                    </div>

                    <div>
                        <strong>Vacancies:</strong>
                        <p>{job.vacancies}</p>
                    </div>

                    <div>
                        <strong>Status:</strong>
                        <p>{job.status}</p>
                    </div>

                </div>

                {/* Skills */}

                <div className="mt-10">

                    <h2 className="text-2xl font-bold mb-4">
                        Skills Required
                    </h2>

                    <div className="flex flex-wrap gap-3">

                        {job.skills?.map(
                            (skill, index) => (
                                <span
                                    key={index}
                                    className="bg-green-100 text-green-700 px-4 py-2 rounded-full"
                                >
                                    {skill}
                                </span>
                            )
                        )}

                    </div>

                </div>

                {/* Description */}

                <div className="mt-10">

                    <h2 className="text-2xl font-bold mb-4">
                        Job Description
                    </h2>

                    <p>{job.description}</p>

                </div>

                {/* Responsibilities */}

                <div className="mt-10">

                    <h2 className="text-2xl font-bold mb-4">
                        Responsibilities
                    </h2>

                    <p>
                        {job.responsibilities}
                    </p>

                </div>

                {/* Requirements */}

                <div className="mt-10">

                    <h2 className="text-2xl font-bold mb-4">
                        Requirements
                    </h2>

                    <p>{job.requirements}</p>

                </div>

                {/* Apply */}

                <div className="mt-12">

                    <button
                        onClick={applyJob}
                        className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl"
                    >
                        Apply Now
                    </button>

                </div>

            </div>

        </div>
    );
}