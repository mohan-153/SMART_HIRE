"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import axios from "axios";
import InlineLoader from "@/components/InlineLoader";
import toast from "react-hot-toast";

export default function ApplicationDetails() {
  const params = useParams();
  const id = params.id;
  const router = useRouter();

  const [application, setApplication] = useState(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`/api/applications/${id}`);
        setApplication(res.data.application);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [id]);

  if (loading) return <div className="p-6 flex items-center justify-center min-h-[40vh]"><InlineLoader /></div>;

  if (!application) return <div className="p-6">Application not found</div>;

  const a = application;

  const updateStatus = async (status) => {
    try {
      setUpdating(true);
      await axios.put("/api/applications/status", {
        applicationId: a._id,
        status,
      });

      toast.success("Status Updated");

      // navigate to appropriate list
      if (status === "Shortlisted" || status === "Selected") {
        router.push("/recruiter/applicants/shortlisted");
        return;
      }

      if (status === "Rejected") {
        router.push("/recruiter/applicants/rejected");
        return;
      }

      router.push("/recruiter/applicants/all");
    } catch (err) {
      console.log(err);
      toast.error("Failed to update status");
    } finally {
      setUpdating(false);
    }
  };

  return (
    <div className="p-6">
      <button onClick={() => router.back()} className="mb-4 px-4 py-2 border rounded">Back</button>

      <h1 className="text-2xl font-bold mb-4">Application Details</h1>

      <div className="bg-white rounded p-6 shadow space-y-4">
        <div className="flex items-center justify-end">
          <label className="mr-3 font-semibold">Status</label>
          <select
            value={a.status}
            onChange={(e) => updateStatus(e.target.value)}
            disabled={updating}
            className="border rounded-xl p-2"
          >
            <option>Applied</option>
            <option>Shortlisted</option>
            <option>Rejected</option>
          </select>
        </div>
        <div>
          <h3 className="font-semibold">Candidate</h3>
          <p>{a.candidateId?.firstName} {a.candidateId?.lastName}</p>
          <p className="text-sm text-gray-500">{a.candidateId?.email}</p>
          <p className="text-sm text-gray-500">{a.candidateId?.mobile}</p>
        </div>

        <div>
          <h3 className="font-semibold">Job</h3>
          <p>{a.jobId?.jobTitle}</p>
          <p className="text-sm text-gray-500">{a.jobId?.companyName}</p>
        </div>

        <div>
          <h3 className="font-semibold">Application Info</h3>
          <p><strong>Status:</strong> {a.status}</p>
          <p><strong>Applied At:</strong> {new Date(a.createdAt).toLocaleString()}</p>
        </div>

        <div>
          <h3 className="font-semibold">Profile Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div><strong>Location:</strong> {a.location}</div>
            <div><strong>College:</strong> {a.college}</div>
            <div><strong>Domain:</strong> {a.domain}</div>
            <div><strong>Course:</strong> {a.course}</div>
            <div><strong>Specialization:</strong> {a.specialization}</div>
            <div><strong>Programme:</strong> {a.programme}</div>
          </div>
        </div>

        <div>
          <h3 className="font-semibold">Resume</h3>
          {a.resume ? (
            <a href={a.resume} target="_blank" rel="noreferrer" className="text-blue-600">Open Resume</a>
          ) : (
            <p className="text-gray-500">No resume provided</p>
          )}
        </div>

      </div>
    </div>
  );
}
