import React from "react";
import ApperIcon from "@/components/ApperIcon";

const Loading = ({ message = "Loading..." }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] space-y-4">
      <div className="relative">
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-400 to-accent-400 animate-spin">
          <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
            <ApperIcon name="Camera" size={16} className="text-primary-600" />
          </div>
        </div>
      </div>
      <p className="text-gray-600 font-medium">{message}</p>
    </div>
  );
};

export default Loading;