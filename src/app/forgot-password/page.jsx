"use client";

import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function ForgotPassword() {
  const router = useRouter();

  const [email, setEmail] =
    useState("");

  const [verified, setVerified] =
    useState(false);

  const [password, setPassword] =
    useState("");

  const [
    confirmPassword,
    setConfirmPassword,
  ] = useState("");

  const verifyEmail = async () => {
    try {
      const res = await axios.post(
        "/api/auth/forgot-password",
        { email }
      );

      toast.success(res.data.message);

      setVerified(true);
    } catch (error) {
      toast.error(
        error.response?.data?.message
      );
    }
  };

  const updatePassword = async () => {
    try {
      const res = await axios.post(
        "/api/auth/reset-password",
        {
          email,
          password,
          confirmPassword,
        }
      );

      toast.success(res.data.message);

      setTimeout(() => {
        router.push("/login");
      }, 1500);
    } catch (error) {
      toast.error(
        error.response?.data?.message
      );
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex justify-center items-center px-5">

      <div className="w-full max-w-md bg-zinc-900 rounded-3xl p-8">

        <h1 className="text-3xl font-bold text-center mb-6">
          Forgot Password
        </h1>

        {!verified ? (
          <>
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) =>
                setEmail(
                  e.target.value
                )
              }
              className="w-full p-3 rounded-xl bg-zinc-800 mb-4"
            />

            <button
              onClick={verifyEmail}
              className="w-full bg-green-600 p-3 rounded-xl"
            >
              Verify Email
            </button>
          </>
        ) : (
          <>
            <input
              type="password"
              placeholder="New Password"
              value={password}
              onChange={(e) =>
                setPassword(
                  e.target.value
                )
              }
              className="w-full p-3 rounded-xl bg-zinc-800 mb-4"
            />

            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(
                  e.target.value
                )
              }
              className="w-full p-3 rounded-xl bg-zinc-800 mb-4"
            />

            <button
              onClick={updatePassword}
              className="w-full bg-green-600 p-3 rounded-xl"
            >
              Update Password
            </button>
          </>
        )}
      </div>
    </div>
  );
}