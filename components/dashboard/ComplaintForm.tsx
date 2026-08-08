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
    <Card>
      <CardContent className="space-y-4 p-6">
        <Input
          placeholder="Student Name"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
        />

        <Input
          placeholder="Hostel Block"
          value={hostelBlock}
          onChange={(e) => setHostelBlock(e.target.value)}
        />

        <Input
          placeholder="Room Number"
          value={roomNumber}
          onChange={(e) => setRoomNumber(e.target.value)}
        />

        <Select
          value={category}
          onValueChange={setCategory}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select Category" />
          </SelectTrigger>

          <SelectContent>
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
        />

        <Button
          className="w-full"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit Complaint"}
        </Button>
      </CardContent>
    </Card>
  );
}