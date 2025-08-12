import { useState } from "react";
import reportService from "@/services/api/reportService";

export const useReport = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const submitReport = async (reportData) => {
    try {
      setLoading(true);
      setError(null);
      
      const newReport = await reportService.create(reportData);
      return newReport;
    } catch (err) {
      setError(err.message || "Failed to submit report");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    submitReport,
    loading,
    error
  };
};