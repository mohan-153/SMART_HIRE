"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";

export default function CandidateProfilePage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [resumeFile, setResumeFile] = useState(null);

  const [resumeUrl, setResumeUrl] = useState("");

  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    phone: "",
    location: "",
    skills: "",
    education: "",
    experience: "",
    linkedin: "",
    github: "",
    portfolio: "",
    bio: "",
  });

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const userRes =
        await axios.get(
          "/api/auth/me"
        );

      if (
        userRes.data.role !==
        "candidate"
      ) {
        return;
      }

      const candidateId =
        userRes.data.user._id;



      const profileRes =
        await axios.get(
          `/api/candidate/profile?candidateId=${candidateId}`
        );

      if (
        profileRes.data.profile
      ) {
        const profile =
          profileRes.data.profile;

        setResumeUrl(
          profile.resumeUrl || ""
        );

        setFormData({
          phone:
            profile.phone || "",
          location:
            profile.location ||
            "",
          skills:
            profile.skills?.join(
              ", "
            ) || "",
          education:
            profile.education ||
            "",
          experience:
            profile.experience ||
            "",
          linkedin:
            profile.linkedin ||
            "",
          github:
            profile.github || "",
          portfolio:
            profile.portfolio ||
            "",
          bio: profile.bio || "",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };



  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    setErrors((prev) => ({
      ...prev,
      [e.target.name]: "",
    }));
  };

  const isValidUrl = (url) => {
    if (!url) return true;

    try {
      const formatted = url.startsWith("http")
        ? url
        : `https://${url}`;

      new URL(formatted);

      return true;
    } catch {
      return false;
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone =
        "Enter valid 10 digit mobile number";
    }

    if (!formData.location.trim()) {
      newErrors.location = "Location is required";
    }

    if (!formData.skills.trim()) {
      newErrors.skills = "Skills are required";
    }

    if (!formData.education.trim()) {
      newErrors.education = "Education is required";
    }

    if (!formData.experience.trim()) {
      newErrors.experience = "Experience is required";
    }

    if (!formData.linkedin.trim()) {
      newErrors.linkedin =
        "LinkedIn URL is required";
    } else if (!isValidUrl(formData.linkedin)) {
      newErrors.linkedin =
        "Enter valid LinkedIn URL";
    }

    if (!formData.github.trim()) {
      newErrors.github =
        "GitHub URL is required";
    } else if (!isValidUrl(formData.github)) {
      newErrors.github =
        "Enter valid GitHub URL";
    }

    if (
      formData.portfolio &&
      !isValidUrl(formData.portfolio)
    ) {
      newErrors.portfolio =
        "Enter valid Portfolio URL";
    }

    if (!formData.bio.trim()) {
      newErrors.bio =
        "Professional summary is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const formatUrl = (url) => {
    if (!url) return "";

    return url.startsWith("http")
      ? url
      : `https://${url}`;
  };

  const saveProfile = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      setLoading(true);

      const me = await axios.get("/api/auth/me");

      console.log("ME =", me.data);

      const candidateId =
        me.data?.user?._id;

      let uploadedResumeUrl =
        resumeUrl;

      if (resumeFile) {

        const cloudForm =
          new FormData();

        cloudForm.append(
          "file",
          resumeFile
        );

        cloudForm.append(
          "upload_preset",
          "resume_upload"
        );

        const cloudRes =
          await axios.post(
            `https://api.cloudinary.com/v1_1/dzhqhnepo/raw/upload`,
            cloudForm
          );

        uploadedResumeUrl =
          cloudRes.data.secure_url;

        
      }

      if (!candidateId) {
        toast.error(
          "Candidate ID not found"
        );
        return;
      }
console.log({
  candidateId,
  resumeUrl:
    uploadedResumeUrl,
  resumeFileName:
    resumeFile?.name,
});
      await axios.post(
  "/api/candidate/profile",
  {
    candidateId,

    phone: formData.phone,
    location: formData.location,

    skills: formData.skills
      .split(",")
      .map((item) =>
        item.trim()
      )
      .filter(Boolean),

    education:
      formData.education,

    experience:
      formData.experience,

    linkedin:
      formatUrl(
        formData.linkedin
      ),

    github:
      formatUrl(
        formData.github
      ),

    portfolio:
      formData.portfolio
        ? formatUrl(
            formData.portfolio
          )
        : "",

    bio:
      formData.bio,

    // ADD THESE
    resumeUrl:
      uploadedResumeUrl,

    resumeFileName:
      resumeFile?.name || "",
  }
);

      toast.success(
        "Profile Updated Successfully"
      );

      router.push(
        "/candidate/dashboard"
      );
    } catch (error) {
      console.log(error);

      toast.error(
        error?.response?.data
          ?.message ||
        "Failed to save profile"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>

      <main className="min-h-screen bg-gray-50 dark:bg-black py-10">

        <div className="max-w-5xl mx-auto px-6">
          <BackButton />
          <h1 className="text-4xl font-bold mb-2">
            My Profile
          </h1>

          <p className="text-gray-500 mb-8">
            Complete your profile to attract recruiters.
          </p>

          <form
            onSubmit={saveProfile}
            className="bg-white dark:bg-zinc-900 p-8 rounded-3xl shadow-lg space-y-5"
          >

            {/* Phone + Location */}

            <div className="grid md:grid-cols-2 gap-5">

              <div>
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 rounded-xl border"
                />

                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.phone}
                  </p>
                )}
              </div>

              <div>
                <input
                  type="text"
                  name="location"
                  placeholder="Location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full p-3 rounded-xl border"
                />

                {errors.location && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.location}
                  </p>
                )}
              </div>

            </div>

            {/* Skills */}

            <div>
              <textarea
                name="skills"
                placeholder="Skills (React, Next.js, MongoDB)"
                value={formData.skills}
                onChange={handleChange}
                rows={3}
                className="w-full p-3 rounded-xl border"
              />

              {errors.skills && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.skills}
                </p>
              )}
            </div>

            {/* Education */}

            <div>
              <textarea
                name="education"
                placeholder="Education"
                value={formData.education}
                onChange={handleChange}
                rows={3}
                className="w-full p-3 rounded-xl border"
              />

              {errors.education && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.education}
                </p>
              )}
            </div>

            {/* Experience */}

            <div>
              <textarea
                name="experience"
                placeholder="Experience"
                value={formData.experience}
                onChange={handleChange}
                rows={3}
                className="w-full p-3 rounded-xl border"
              />

              {errors.experience && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.experience}
                </p>
              )}
            </div>

            {/* LinkedIn */}

            <div>
              <input
                type="text"
                name="linkedin"
                placeholder="LinkedIn URL"
                value={formData.linkedin}
                onChange={handleChange}
                className="w-full p-3 rounded-xl border"
              />

              {errors.linkedin && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.linkedin}
                </p>
              )}
            </div>

            {/* GitHub */}

            <div>
              <input
                type="text"
                name="github"
                placeholder="GitHub URL"
                value={formData.github}
                onChange={handleChange}
                className="w-full p-3 rounded-xl border"
              />

              {errors.github && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.github}
                </p>
              )}
            </div>

            {/* Portfolio */}

            <input
              type="text"
              name="portfolio"
              placeholder="Portfolio URL"
              value={formData.portfolio}
              onChange={handleChange}
              className="w-full p-3 rounded-xl border"
            />

            {/* Bio */}

            <div>
              <textarea
                rows={5}
                name="bio"
                placeholder="Professional Summary"
                value={formData.bio}
                onChange={handleChange}
                className="w-full p-3 rounded-xl border"
              />

              {errors.bio && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.bio}
                </p>
              )}
            </div>

            <div>

              <label className="block font-medium mb-2">
                Resume Upload
              </label>

              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={(e) =>
                  setResumeFile(
                    e.target.files[0]
                  )
                }
                className="w-full p-3 border rounded-xl"
              />

              {resumeUrl && (
                <a
                  href={resumeUrl}
                  target="_blank"
                  className="text-blue-600 text-sm mt-2 inline-block"
                >
                  View Uploaded Resume
                </a>
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

      </main>

    </>
  );
}