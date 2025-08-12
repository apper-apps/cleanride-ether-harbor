import React, { useEffect, useState } from "react";
import Button from "@/components/atoms/Button";
import Card from "@/components/atoms/Card";
import ApperIcon from "@/components/ApperIcon";

const SuccessPage = ({ reportData, onNewReport }) => {
  const [showCheckmark, setShowCheckmark] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowCheckmark(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-success/5 to-green-50 px-4 py-8">
      <div className="max-w-md mx-auto space-y-8">
        <div className="text-center space-y-6">
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-br from-success to-green-600 rounded-full mx-auto flex items-center justify-center shadow-2xl">
              {showCheckmark && (
                <svg
                  className="w-12 h-12 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                    strokeDasharray="100"
                    strokeDashoffset="100"
                    style={{
                      animation: showCheckmark ? "draw-check 0.5s ease-out forwards" : "none"
                    }}
                  />
                </svg>
              )}
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-accent-500 to-secondary-500 rounded-full flex items-center justify-center shadow-lg">
              <ApperIcon name="Zap" size={16} className="text-gray-900" />
            </div>
          </div>

          <div className="space-y-3">
            <h1 className="text-2xl font-bold text-gray-900 font-display">Report Submitted!</h1>
            <p className="text-gray-600 leading-relaxed">
              Thank you for helping keep our trains clean. Your report has been received and will be addressed promptly.
            </p>
          </div>
        </div>

        <Card variant="elevated" className="p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-gray-200">
              <span className="text-sm font-medium text-gray-500">Report Details</span>
              <span className="text-xs text-gray-400">#{reportData.id}</span>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Location</span>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-900">Train {reportData.trainId}</div>
                  <div className="text-xs text-gray-500">Car {reportData.carId}</div>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Priority</span>
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                  reportData.category === "Priority" 
                    ? "bg-amber-100 text-amber-700" 
                    : "bg-blue-100 text-blue-700"
                }`}>
                  {reportData.category}
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Submitted</span>
                <span className="text-sm font-medium text-gray-900">
                  {new Date(reportData.timestamp).toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </Card>

        <div className="space-y-3">
          <Button
            onClick={onNewReport}
            variant="accent"
            size="lg"
            className="w-full shadow-xl"
          >
            <ApperIcon name="Plus" size={20} className="mr-3" />
            Submit Another Report
          </Button>
          
          <div className="text-center">
            <p className="text-xs text-gray-500">
              Your report reference: #{reportData.id}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;