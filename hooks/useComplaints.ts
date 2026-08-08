"use client";

import { useEffect, useState } from "react";
import {
  Complaint,
  getComplaints,
} from "@/services/complaintService";

export function useComplaints() {
  const [complaints, setComplaints] = useState<Complaint[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadComplaints() {
    try {
      setLoading(true);
      const data = await getComplaints();
      setComplaints(data);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadComplaints();
  }, []);

  return {
    complaints,
    loading,
    refresh: loadComplaints,
  };
}