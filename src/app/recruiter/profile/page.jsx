"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import BackButton from "@/components/BackButton";
import axios from "axios";
import toast from "react-hot-toast";
import InlineLoader from "@/components/InlineLoader";

export default function RecruiterProfilePage() {
    const router = useRouter();

    const [loading, setLoading] = useState(false);

    const [errors, setErrors] = useState({});

    const [formData, setFormData] = useState({
        mobile: "",
        designation: "",
        companyName: "",
        companyWebsite: "",
        companyLocation: "",
        companyDescription: "",
        sector: "",
    });

    useEffect(() => {
        loadProfile();
    }, []);

    const loadProfile = async () => {
  try {
    const userRes =
      await axios.get(
        "/api/auth/me"
      );

    const recruiterId =
      userRes.data.user._id;

    console.log(
      "Recruiter ID:",
      recruiterId
    );

    const profileRes =
      await axios.get(
        `/api/recruiter/profile?recruiterId=${recruiterId}`
      );

    console.log(
      "Profile Data:",
      profileRes.data
    );

    if (
      profileRes.data.success
    ) {
      const profile =
        profileRes.data.profile;

      setFormData({
        mobile:
          profile.mobile || "",

        designation:
          profile.designation ||
          "",

        companyName:
          profile.companyName ||
          "",

        companyWebsite:
          profile.companyWebsite ||
          "",

        companyLocation:
          profile.companyLocation ||
          "",

        companyDescription:
          profile.companyDescription ||
          "",

        sector:
          profile.sector || "",
      });
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

        setErrors((prev) => ({
            ...prev,
            [e.target.name]: "",
        }));
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.mobile.trim()) {
            newErrors.mobile =
                "Mobile Number is required";
        } else if (
            !/^[0-9]{10}$/.test(
                formData.mobile
            )
        ) {
            newErrors.mobile =
                "Enter valid 10 digit mobile number";
        }

        if (
            !formData.designation.trim()
        ) {
            newErrors.designation =
                "Designation is required";
        }

        if (
            !formData.companyName.trim()
        ) {
            newErrors.companyName =
                "Company Name is required";
        }

        if (
            !formData.companyLocation.trim()
        ) {
            newErrors.companyLocation =
                "Company Location is required";
        }

        if (
            !formData.sector.trim()
        ) {
            newErrors.sector =
                "Industry Sector is required";
        }

        if (
            !formData.companyDescription.trim()
        ) {
            newErrors.companyDescription =
                "Company Description is required";
        }

        setErrors(newErrors);

        return (
            Object.keys(newErrors)
                .length === 0
        );
    };

    const saveProfile = async (
        e
    ) => {
        e.preventDefault();

        if (!validateForm()) {
            toast.error(
                "Please fix validation errors"
            );
            return;
        }

        try {
            setLoading(true);

            const userRes =
                await axios.get(
                    "/api/auth/me"
                );

            const recruiterId =
                userRes.data.user._id ||
                userRes.data.user.id;

            await axios.post(
                "/api/recruiter/profile",
                {
                    recruiterId,
                    ...formData,
                }
            );

            toast.success(
                "Profile Updated Successfully"
            );

            setTimeout(() => {
                router.push(
                    "/recruiter/dashboard"
                );
            }, 1000);
        } catch (error) {
            console.log(error);

            toast.error(
                error.response?.data
                    ?.message ||
                "Failed to save profile"
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-black p-6">
            <div className="max-w-5xl mx-auto">
                <BackButton />
                <h1 className="text-4xl font-bold mb-2">
                    Recruiter Profile
                </h1>

                <p className="text-gray-500 mb-8">
                    Manage your company profile.
                </p>

                <form
                    onSubmit={saveProfile}
                    className="bg-white dark:bg-zinc-900 p-8 rounded-3xl shadow-lg space-y-5"
                >

                    {loading && (
                        <div className="mb-4 flex items-center justify-center">
                            <InlineLoader />
                        </div>
                    )}

                    <div className="grid md:grid-cols-2 gap-5">

                        <div>
                            <input
                                type="text"
                                name="mobile"
                                placeholder="Mobile Number"
                                value={
                                    formData.mobile
                                }
                                onChange={
                                    handleChange
                                }
                                className="w-full p-3 rounded-xl border"
                            />

                            {errors.mobile && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.mobile}
                                </p>
                            )}
                        </div>

                        <div>
                            <input
                                type="text"
                                name="designation"
                                placeholder="Designation"
                                value={
                                    formData.designation
                                }
                                onChange={
                                    handleChange
                                }
                                className="w-full p-3 rounded-xl border"
                            />

                            {errors.designation && (
                                <p className="text-red-500 text-sm mt-1">
                                    {
                                        errors.designation
                                    }
                                </p>
                            )}
                        </div>

                    </div>

                    <div>
                        <input
                            type="text"
                            name="companyName"
                            placeholder="Company Name"
                            value={
                                formData.companyName
                            }
                            onChange={
                                handleChange
                            }
                            className="w-full p-3 rounded-xl border"
                        />

                        {errors.companyName && (
                            <p className="text-red-500 text-sm mt-1">
                                {
                                    errors.companyName
                                }
                            </p>
                        )}
                    </div>

                    <input
                        type="text"
                        name="companyWebsite"
                        placeholder="Company Website"
                        value={
                            formData.companyWebsite
                        }
                        onChange={
                            handleChange
                        }
                        className="w-full p-3 rounded-xl border"
                    />

                    <div>
                        <input
                            type="text"
                            name="companyLocation"
                            placeholder="Company Location"
                            value={
                                formData.companyLocation
                            }
                            onChange={
                                handleChange
                            }
                            className="w-full p-3 rounded-xl border"
                        />

                        {errors.companyLocation && (
                            <p className="text-red-500 text-sm mt-1">
                                {
                                    errors.companyLocation
                                }
                            </p>
                        )}
                    </div>

                    <div>
                        <input
                            type="text"
                            name="sector"
                            placeholder="Industry Sector"
                            value={
                                formData.sector
                            }
                            onChange={
                                handleChange
                            }
                            className="w-full p-3 rounded-xl border"
                        />

                        {errors.sector && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.sector}
                            </p>
                        )}
                    </div>

                    <div>
                        <textarea
                            rows={5}
                            name="companyDescription"
                            placeholder="Company Description"
                            value={
                                formData.companyDescription
                            }
                            onChange={
                                handleChange
                            }
                            className="w-full p-3 rounded-xl border"
                        />

                        {errors.companyDescription && (
                            <p className="text-red-500 text-sm mt-1">
                                {
                                    errors.companyDescription
                                }
                            </p>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl"
                    >
                        {loading
                            ? "Saving..."
                            : "Save Profile"}
                    </button>

                </form>

            </div>
        </div>
    );
}