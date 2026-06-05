"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import axios from "axios";
import toast from "react-hot-toast";

import {
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

export default function LoginPage() {
  const router = useRouter();

  const [showPassword, setShowPassword] =
    useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!form.email) {
      newErrors.email =
        "⚠ Enter Valid Email";
    } else if (!emailRegex.test(form.email)) {
      newErrors.email =
        "⚠ Enter Valid Email";
    }

    if (!form.password) {
      newErrors.password =
        "⚠ Enter Password";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      const res = await axios.post(
        "/api/auth/login",
        form
      );

      toast.success(res.data.message);

      const role = res.data.role;

      setTimeout(() => {
        if (role === "candidate") {
          router.push(
            "/candidate/dashboard"
          );
        } else if (
          role === "recruiter"
        ) {
          router.push(
            "/recruiter/dashboard"
          );
        } else if (
          role === "admin"
        ) {
          router.push(
            "/admin/dashboard"
          );
        } else {
          router.push("/");
        }
      }, 1000);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
        "Login Failed"
      );
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex justify-center items-center px-5">

      <div className="w-full max-w-md bg-zinc-900 p-8 rounded-3xl shadow-xl">

        <h1 className="text-4xl font-bold text-center mb-8">
          LOGIN
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <div>

            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 rounded-xl bg-zinc-800 border border-zinc-700 outline-none"
              value={form.email}
              onChange={(e) =>
                setForm({
                  ...form,
                  email:
                    e.target.value,
                })
              }
            />

            {errors.email && (
              <p className="text-red-400 text-sm mt-1">
                {errors.email}
              </p>
            )}

          </div>

          <div className="relative">

            <input
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              placeholder="Password"
              className="w-full p-3 rounded-xl bg-zinc-800 border border-zinc-700 outline-none"
              value={form.password}
              onChange={(e) =>
                setForm({
                  ...form,
                  password:
                    e.target.value,
                })
              }
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(
                  !showPassword
                )
              }
              className="absolute right-4 top-4"
            >
              {showPassword ? (
                <FaEyeSlash />
              ) : (
                <FaEye />
              )}
            </button>

            {errors.password && (
              <p className="text-red-400 text-sm mt-1">
                {errors.password}
              </p>
            )}

          </div>

          <div className="text-right">

            <button
              type="button"
              onClick={() =>
                router.push(
                  "/forgot-password"
                )
              }
              className="text-green-400 text-sm hover:text-green-300"
            >
              Forgot Password?
            </button>

          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 transition p-3 rounded-xl font-semibold"
          >
            Login
          </button>

          <div className="text-center text-sm">

            Don't have an account?

            <span
              onClick={() =>
                router.push(
                  "/register"
                )
              }
              className="text-green-400 cursor-pointer ml-2"
            >
              Sign Up
            </span>

          </div>

        </form>

      </div>

    </div>
  );
}