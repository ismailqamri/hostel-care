"use client";

import { useState } from "react";
import { createComplaint } from "@/services/complaintService";
import { SendHorizonal } from "lucide-react";

export default function ComplaintForm() {
  const [studentName, setStudentName] = useState("");
  const [hostelBlock, setHostelBlock] = useState("");
  const [roomNumber, setRoomNumber] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    if (
      !studentName ||
      !hostelBlock ||
      !roomNumber ||
      !category ||
      !description
    ) {
      alert("Please fill all fields.");
      return;
    }

    try {
      setLoading(true);

      await createComplaint({
        studentName,
        hostelBlock,
        roomNumber,
        category,
        description,
        status: "Open",
      });

      setStudentName("");
      setHostelBlock("");
      setRoomNumber("");
      setCategory("");
      setDescription("");

      alert("Complaint submitted successfully!");
      window.location.reload();
    } catch (error) {
      console.error(error);
      alert("Failed to submit complaint.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="relative rounded-2xl border border-[#e1d8c3] bg-[#fffdf8] p-6 shadow-[0_1px_0_rgba(30,35,51,0.04),0_8px_24px_-12px_rgba(30,35,51,0.18)]">
      {/* Dashed paper edge */}
      <div className="absolute left-6 right-6 top-0 border-t-2 border-dashed border-[#e1d8c3]" />

      {/* Student name + block */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-[10.5px] font-semibold uppercase tracking-[0.09em] text-[#6b6e7c]">
            Student Name
          </label>

          <input
            placeholder="e.g. Sam"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            className="w-full rounded-[9px] border-[1.5px] border-[#e1d8c3] bg-[#faf7ef] px-3 py-2.5 text-sm text-[#1e2333] outline-none transition focus:border-[#e8a23d] focus:ring-4 focus:ring-[#e8a23d]/20"
          />
        </div>

        <div>
          <label className="mb-1.5 block text-[10.5px] font-semibold uppercase tracking-[0.09em] text-[#6b6e7c]">
            Hostel Block
          </label>

          <input
            placeholder="e.g. Block A"
            value={hostelBlock}
            onChange={(e) => setHostelBlock(e.target.value)}
            className="w-full rounded-[9px] border-[1.5px] border-[#e1d8c3] bg-[#faf7ef] px-3 py-2.5 text-sm text-[#1e2333] outline-none transition focus:border-[#e8a23d] focus:ring-4 focus:ring-[#e8a23d]/20"
          />
        </div>
      </div>

      {/* Room + category */}
      <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-[10.5px] font-semibold uppercase tracking-[0.09em] text-[#6b6e7c]">
            Room Number
          </label>

          <input
            placeholder="e.g. 101"
            value={roomNumber}
            onChange={(e) => setRoomNumber(e.target.value)}
            className="w-full rounded-[9px] border-[1.5px] border-[#e1d8c3] bg-[#faf7ef] px-3 py-2.5 text-sm text-[#1e2333] outline-none transition focus:border-[#e8a23d] focus:ring-4 focus:ring-[#e8a23d]/20"
          />
        </div>

        <div>
          <label className="mb-1.5 block text-[10.5px] font-semibold uppercase tracking-[0.09em] text-[#6b6e7c]">
            Category
          </label>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full appearance-none rounded-[9px] border-[1.5px] border-[#e1d8c3] bg-[#faf7ef] px-3 py-2.5 text-sm text-[#1e2333] outline-none transition focus:border-[#e8a23d] focus:ring-4 focus:ring-[#e8a23d]/20"
          >
            <option value="">Select category</option>
            <option value="Electrical">Electrical</option>
            <option value="Plumbing">Plumbing</option>
            <option value="Cleaning">Cleaning</option>
            <option value="Internet">Internet</option>
            <option value="Furniture">Furniture</option>
            <option value="Mess">Mess</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      {/* Description */}
      <div className="mt-3">
        <label className="mb-1.5 block text-[10.5px] font-semibold uppercase tracking-[0.09em] text-[#6b6e7c]">
          Description
        </label>

        <textarea
          placeholder="Describe the issue..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="min-h-[90px] w-full resize-y rounded-[9px] border-[1.5px] border-[#e1d8c3] bg-[#faf7ef] px-3 py-2.5 text-sm leading-6 text-[#1e2333] outline-none transition placeholder:text-[#a8a2b8] focus:border-[#e8a23d] focus:ring-4 focus:ring-[#e8a23d]/20"
        />
      </div>

      {/* Submit */}
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="mt-[18px] flex h-[46px] w-full items-center justify-center gap-2 rounded-[10px] border-none bg-gradient-to-br from-[#1e2333] to-[#343b54] px-[18px] font-semibold text-[#faf7ef] shadow-lg transition hover:-translate-y-px hover:shadow-xl active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60"
      >
        <SendHorizonal className="h-[15px] w-[15px]" />

        {loading ? "Submitting..." : "Submit Complaint"}
      </button>
    </div>
  );
}
