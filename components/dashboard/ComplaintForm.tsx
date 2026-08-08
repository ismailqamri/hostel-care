"use client";

import { useState } from "react";
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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ComplaintForm() {
  const [studentName, setStudentName] = useState("");
  const [hostelBlock, setHostelBlock] = useState("");
  const [roomNumber, setRoomNumber] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>Submit Complaint</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
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

        <Select onValueChange={setCategory}>
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

        <Button className="w-full">
          Submit Complaint
        </Button>
      </CardContent>
    </Card>
  );
}