import React from "react";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";

const Error = ({ message = "Something went wrong", onRetry }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] space-y-4 text-center px-6">
      <div className="w-16 h-16 bg-gradient-to-br from-error to-red-600 rounded-full flex items-center justify-center shadow-lg">
        <ApperIcon name="AlertCircle" size={24} className="text-white" />
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-gray-900">Oops!</h3>
        <p className="text-gray-600 max-w-sm">{message}</p>
      </div>
      {onRetry && (
        <Button onClick={onRetry} variant="outline" size="sm">
          <ApperIcon name="RefreshCw" size={16} className="mr-2" />
          Try Again
        </Button>
      )}
    </div>
  );
};

export default Error;