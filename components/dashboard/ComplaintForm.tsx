"use client";

import { useState } from "react";
import { createComplaint } from "@/services/complaintService";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
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
    <Card className="rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <CardContent className="space-y-5 p-6 sm:p-8">
        <Input
          placeholder="Student Name"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          className="h-11 rounded-xl border-slate-200 bg-slate-50/70 px-4 shadow-sm transition-all duration-200 placeholder:text-slate-400 focus-visible:border-blue-400 focus-visible:bg-white focus-visible:ring-blue-100"
        />

        <Input
          placeholder="Hostel Block"
          value={hostelBlock}
          onChange={(e) => setHostelBlock(e.target.value)}
          className="h-11 rounded-xl border-slate-200 bg-slate-50/70 px-4 shadow-sm transition-all duration-200 placeholder:text-slate-400 focus-visible:border-blue-400 focus-visible:bg-white focus-visible:ring-blue-100"
        />

        <Input
          placeholder="Room Number"
          value={roomNumber}
          onChange={(e) => setRoomNumber(e.target.value)}
          className="h-11 rounded-xl border-slate-200 bg-slate-50/70 px-4 shadow-sm transition-all duration-200 placeholder:text-slate-400 focus-visible:border-blue-400 focus-visible:bg-white focus-visible:ring-blue-100"
        />

        <Select
          value={category}
          onValueChange={(value) => setCategory(value ?? "")}
        >
          <SelectTrigger className="h-11 w-full rounded-xl border-slate-200 bg-slate-50/70 px-4 shadow-sm transition-all duration-200 focus-visible:border-blue-400 focus-visible:bg-white focus-visible:ring-blue-100">
            <SelectValue placeholder="Select Category" />
          </SelectTrigger>

          <SelectContent className="rounded-xl border border-slate-200 bg-white shadow-lg">
            <SelectItem value="Electrical">Electrical</SelectItem>
            <SelectItem value="Plumbing">Plumbing</SelectItem>
            <SelectItem value="Cleaning">Cleaning</SelectItem>
            <SelectItem value="Internet">Internet</SelectItem>
            <SelectItem value="Furniture">Furniture</SelectItem>
            <SelectItem value="Mess">Mess</SelectItem>
            <SelectItem value="Other">Other</SelectItem>
          </SelectContent>
        </Select>

        <Textarea
          placeholder="Describe your complaint..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="min-h-28 rounded-xl border-slate-200 bg-slate-50/70 px-4 py-3 shadow-sm transition-all duration-200 placeholder:text-slate-400 focus-visible:border-blue-400 focus-visible:bg-white focus-visible:ring-blue-100"
        />

        <Button
          className="h-11 w-full rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 font-semibold text-white shadow-md shadow-blue-500/20 transition-all duration-200 hover:-translate-y-0.5 hover:from-blue-700 hover:to-sky-600 hover:shadow-lg hover:shadow-blue-500/25 active:scale-[0.99]"
          onClick={handleSubmit}
          disabled={loading}
        >
          <SendHorizonal className="size-4" />
          {loading ? "Submitting..." : "Submit Complaint"}
        </Button>
      </CardContent>
    </Card>
  );
}
