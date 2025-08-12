import React from "react";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";

const Empty = ({ 
  title = "No reports yet", 
  message = "Start by scanning a QR code to report cleanliness issues.",
  actionLabel = "Get Started",
  onAction
}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[300px] space-y-6 text-center px-6">
      <div className="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center">
        <ApperIcon name="QrCode" size={32} className="text-gray-400" />
      </div>
      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-gray-900 font-display">{title}</h3>
        <p className="text-gray-600 max-w-sm leading-relaxed">{message}</p>
      </div>
      {onAction && (
        <Button onClick={onAction} variant="accent">
          <ApperIcon name="Scan" size={20} className="mr-2" />
          {actionLabel}
        </Button>
      )}
    </div>
  );
};

export default Empty;