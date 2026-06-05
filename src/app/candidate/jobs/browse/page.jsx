"use client";
import InlineLoader from '../../../../components/InlineLoader';

import axios from "axios";
import { useEffect, useState } from "react";
import Select from "react-select";
import { ChevronLeft, ChevronRight, } from "lucide-react";
import { City } from "country-state-city";
import { useRouter } from "next/navigation";
import {
    Briefcase,
    MapPin,
    Clock3,
    Heart,
    ChevronDown,
    X,
} from "lucide-react";

export default function BrowseJobsPage() {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const [
        showTypeFilter,
        setShowTypeFilter,
    ] = useState(false);

    const [
        showLocationFilter,
        setShowLocationFilter,
    ] = useState(false);

    const [
        selectedType,
        setSelectedType,
    ] = useState("");

    const [
        selectedLocation,
        setSelectedLocation,
    ] = useState("");

    const [categoryIndex, setCategoryIndex] =
        useState(0);

    const categories = [
        "Content Writing",
        "Digital Marketing",
        "Data Science",
        "Accounting",
        "Graphic Design",
        "Frontend Developer",
        "Backend Developer",
        "Full Stack Developer",
        "Mobile App Developer",
        "Machine Learning",
    ];

    const visibleCategories =
        categories.slice(
            categoryIndex,
            categoryIndex + 6
        );

    useEffect(() => {
        loadJobs();
    }, []);

    const loadJobs = async () => {
        try {
            const me =
                await axios.get(
                    "/api/auth/me"
                );

            const candidateId =
                me.data.user._id;

            const res =
                await axios.get(
                    `/api/jobs/browse?candidateId=${candidateId}`
                );

            setJobs(res.data.jobs);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };



    const cityOptions =
        City.getCitiesOfCountry(
            "IN"
        ).map((city) => ({
            value: city.name,
            label: city.name,
        }));

    const filteredJobs =
        jobs.filter((job) => {
            const locationMatch =
                !selectedLocation ||
                job.location
                    ?.toLowerCase()
                    .includes(
                        selectedLocation.toLowerCase()
                    );

            const typeMatch =
                !selectedType ||
                job.jobType ===
                selectedType;

            return (
                locationMatch &&
                typeMatch
            );
        });

    const saveJob = async (jobId) => {
        try {
            const me =
                await axios.get("/api/auth/me");

            await axios.post(
                "/api/jobs/save",
                {
                    candidateId:
                        me.data.user._id,
                    jobId,
                }
            );

            alert("Job Saved");
        } catch (error) {
            console.log(error);
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

    return (
        <div className="p-8">

            <h1 className="text-4xl font-bold mb-8">
                Jobs in India
            </h1>

            {/* Categories */}

            {/* <div className="flex items-center gap-4 mb-10">

                <button
                    onClick={() =>
                        setCategoryIndex((prev) =>
                            prev === 0 ? 0 : prev - 1
                        )
                    }
                    className="w-12 h-12 rounded-full border bg-white shadow hover:bg-blue-50"
                >
                    <ChevronLeft className="mx-auto" />
                </button>

                <div className="grid grid-cols-3 md:grid-cols-6 gap-4 flex-1">

                    {visibleCategories.map(
                        (category) => (
                            <div
                                key={category}
                                className="bg-gradient-to-br from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 rounded-3xl p-6 cursor-pointer transition shadow-sm"
                            >
                                <h3 className="font-semibold text-center text-slate-700">
                                    {category}
                                </h3>
                            </div>
                        )
                    )}

                </div>

                <button
                    onClick={() =>
                        setCategoryIndex((prev) =>
                            prev + 6 >= categories.length
                                ? prev
                                : prev + 1
                        )
                    }
                    className="w-12 h-12 rounded-full border bg-white shadow hover:bg-blue-50"
                >
                    <ChevronRight className="mx-auto" />
                </button>

            </div> */}

            {/* Filters */}

            <div className="flex flex-wrap gap-3 mb-8 relative">

                {/* Type */}

                <button
                    onClick={() =>
                        setShowTypeFilter(
                            !showTypeFilter
                        )
                    }
                    className="border rounded-full px-5 py-2 flex items-center gap-2"
                >
                    Type
                    <ChevronDown size={18} />
                </button>

                {/* Location */}

                <button
                    onClick={() =>
                        setShowLocationFilter(
                            !showLocationFilter
                        )
                    }
                    className="border rounded-full px-5 py-2 flex items-center gap-2"
                >
                    {selectedLocation ||
                        "Location"}

                    <ChevronDown size={18} />
                </button>

                {/* Type Popup */}

                {showTypeFilter && (
                    <div className="absolute top-14 left-0 bg-white shadow-xl rounded-3xl w-80 p-6 z-50">

                        <div className="flex justify-between mb-4">

                            <h3 className="text-xl font-semibold">
                                Type
                            </h3>

                            <button
                                onClick={() =>
                                    setShowTypeFilter(
                                        false
                                    )
                                }
                            >
                                <X />
                            </button>

                        </div>

                        {[
                            "Full Time",
                            "Part Time",
                            "Internship",
                            "Contract",
                        ].map((type) => (
                            <label
                                key={type}
                                className="flex items-center gap-3 mb-4 cursor-pointer"
                            >
                                <input
                                    type="radio"
                                    checked={
                                        selectedType ===
                                        type
                                    }
                                    onChange={() =>
                                        setSelectedType(
                                            type
                                        )
                                    }
                                />

                                {type}
                            </label>
                        ))}

                    </div>
                )}

                {/* Location Popup */}

                {showLocationFilter && (
                    <div className="absolute top-14 left-44 bg-white shadow-xl rounded-3xl w-100 p-5 z-50">

                        <div className="flex justify-between mb-4">

                            <h3 className="text-xl font-semibold">
                                Location
                            </h3>

                            <button
                                onClick={() =>
                                    setShowLocationFilter(
                                        false
                                    )
                                }
                            >
                                <X />
                            </button>

                        </div>

                        <Select
                            options={
                                cityOptions
                            }
                            placeholder="Search any city in India..."
                            isSearchable
                            onChange={(
                                selected
                            ) =>
                                setSelectedLocation(
                                    selected?.value
                                )
                            }
                        />

                    </div>
                )}

            </div>

            

            {/* Jobs */}


            {loading ? (
                <div className="py-20 flex items-center justify-center">
                    <InlineLoader />
                </div>
            ) : filteredJobs.length === 0 ? (
                <div className="text-center py-20">
                    No Jobs Found
                </div>
            ) : (
                <div className="space-y-6">

                    {filteredJobs.map((job) => (
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
          border-slate-200
          rounded-3xl
          p-6
          shadow-sm
          hover:shadow-xl
          hover:border-blue-200
          transition-all
          cursor-pointer
        "
                        >

                            {/* Top */}

                            <div className="flex justify-between items-start">

                                <div>
                                    <h2 className="text-3xl font-bold text-slate-800">
                                        {job.jobTitle}
                                    </h2>

                                    <p className="text-slate-500 text-lg mt-1">
                                        {job.companyName ||
                                            job.company ||
                                            "Company Name"}
                                    </p>
                                </div>

                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        saveJob(job._id);
                                    }}
                                    className="hover:text-red-500"
                                >
                                    <Heart />
                                </button>

                            </div>

                            {/* Job Info */}

                            <div className="flex flex-wrap gap-5 mt-5 text-slate-700">

                                <div className="flex items-center gap-2">
                                    <Briefcase size={16} />
                                    {job.experience}
                                </div>

                                <div>
                                    {job.jobType}
                                </div>

                                <div>
                                    {job.workMode}
                                </div>

                                <div className="flex items-center gap-2">
                                    <MapPin size={16} />
                                    {job.location}
                                </div>

                                <div className="bg-green-50 text-green-700 px-4 py-1 rounded-full font-semibold">
                                    {job.salary}
                                </div>

                            </div>

                            {/* Skills */}

                            <div className="flex flex-wrap gap-2 mt-5">

                                {job.skills?.map(
                                    (skill, index) => (
                                        <span
                                            key={index}
                                            className="
                  bg-slate-100
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

                            {/* Bottom */}

                            <div className="flex justify-between items-center mt-6">

                                <div>

                                    <p className="text-slate-500 text-sm">
                                        Posted{" "}
                                        {new Date(
                                            job.createdAt
                                        ).toLocaleDateString()}
                                    </p>

                                    <p className="text-green-600 text-sm mt-1">

                                        <Clock3
                                            size={14}
                                            className="inline mr-1"
                                        />

                                        {getRemainingDays(
                                            job.deadline
                                        )}{" "}
                                        days left

                                    </p>

                                </div>

                            </div>

                        </div>
                    ))}

                </div>
            )}

        </div>
    );
}