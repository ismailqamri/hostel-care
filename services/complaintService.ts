export async function updateComplaintStatus(
  id: string,
  status: "Open" | "In Progress" | "Resolved"
) {
  const response = await fetch(`/api/complaints/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ status }),
  });

  if (!response.ok) {
    throw new Error("Failed to update complaint");
  }

  return response.json();
}
export async function deleteComplaint(id: string) {
  const response = await fetch(`/api/complaints/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete complaint");
  }

  return response.json();
}
export interface Complaint {
  _id: string;
  studentName: string;
  hostelBlock: string;
  roomNumber: string;
  category: string;
  description: string;
  status: "Open" | "In Progress" | "Resolved";
  createdAt: string;
  updatedAt: string;
}

const API_URL = "/api/complaints";

export async function getComplaints(): Promise<Complaint[]> {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch complaints");
  }

  return response.json();
}

export async function createComplaint(data: Omit<Complaint, "_id" | "createdAt" | "updatedAt">) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to create complaint");
  }

  return response.json();
}