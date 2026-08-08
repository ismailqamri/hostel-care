import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Complaint from "@/models/Complaint";

// GET - Fetch all complaints
export async function GET() {
  try {
    await connectDB();

    const complaints = await Complaint.find().sort({ createdAt: -1 });

    return NextResponse.json(complaints);
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch complaints" },
      { status: 500 }
    );
  }
}

// POST - Create a complaint
export async function POST(request: Request) {
  try {
    await connectDB();

    const body = await request.json();

    const complaint = await Complaint.create(body);

    return NextResponse.json(complaint, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to create complaint" },
      { status: 500 }
    );
  }
}