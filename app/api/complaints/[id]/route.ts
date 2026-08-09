import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Complaint from "@/models/Complaint";

export const runtime = "nodejs";

function logApiError(context: string, error: unknown) {
  console.error(context, {
    error,
    message: error instanceof Error ? error.message : undefined,
    stack: error instanceof Error ? error.stack : undefined,
  });
}

// PATCH /api/complaints/:id
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    const { id } = await params;
    const body = await request.json();

    const complaint = await Complaint.findByIdAndUpdate(id, body, {
      new: true,
    });

    if (!complaint) {
      return NextResponse.json(
        { message: "Complaint not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(complaint);
  } catch (error) {
    logApiError("PATCH /api/complaints/:id failed", error);

    return NextResponse.json(
      { message: "Failed to update complaint" },
      { status: 500 }
    );
  }
}

// DELETE /api/complaints/:id
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    const { id } = await params;

    await Complaint.findByIdAndDelete(id);

    return NextResponse.json({
      message: "Complaint deleted successfully",
    });
  } catch (error) {
    logApiError("DELETE /api/complaints/:id failed", error);

    return NextResponse.json(
      { message: "Failed to delete complaint" },
      { status: 500 }
    );
  }
}
