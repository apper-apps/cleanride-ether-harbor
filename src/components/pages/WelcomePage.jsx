import React from "react";
import Button from "@/components/atoms/Button";
import Card from "@/components/atoms/Card";
import ApperIcon from "@/components/ApperIcon";
import StepIndicator from "@/components/molecules/StepIndicator";

const WelcomePage = ({ trainId, carId, onStart }) => {
return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-8">
      <div className="max-w-md mx-auto space-y-8">
        <StepIndicator currentStep={1} />
        
        <div className="text-center space-y-8">
          <div className="relative">
            <div className="w-28 h-28 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl mx-auto flex items-center justify-center shadow-2xl">
              <ApperIcon name="Camera" size={44} className="text-white" />
            </div>
            <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-br from-teal-400 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
              <ApperIcon name="Zap" size={18} className="text-white" />
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-gray-900 font-display">Report Cleanliness Issue</h1>
            <p className="text-gray-600 leading-relaxed text-lg">
              Help maintain clean trains by reporting issues quickly and easily
            </p>
          </div>
        </div>

        {(trainId || carId) && (
          <Card variant="elevated" className="p-6 border border-blue-200 bg-blue-50">
            <div className="flex items-center space-x-5">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                <ApperIcon name="MapPin" size={28} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 text-lg">Location Detected</h3>
                <div className="flex items-center space-x-4 mt-2">
                  <div className="flex items-center space-x-1 text-gray-600">
                    <ApperIcon name="Train" size={18} />
                    <span>Train {trainId || "N/A"}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-600">
                    <ApperIcon name="Car" size={18} />
                    <span>Car {carId || "N/A"}</span>
                  </div>
                </div>
              </div>
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <ApperIcon name="Check" size={18} className="text-white" />
              </div>
            </div>
          </Card>
        )}

        <div className="space-y-6">
          <Card variant="flat" className="p-6 border border-gray-200">
            <div className="space-y-5">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <span className="text-gray-700 font-medium text-base">Take a photo of the issue</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl flex items-center justify-center">
                  <span className="text-amber-600 font-bold">2</span>
                </div>
                <span className="text-gray-700 font-medium text-base">Select priority level</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center">
                  <span className="text-green-600 font-bold">3</span>
                </div>
                <span className="text-gray-700 font-medium text-base">Submit your report</span>
              </div>
            </div>
          </Card>

          <Button
            onClick={onStart}
            variant="primary"
            size="lg"
            className="w-full shadow-xl bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
          >
            <ApperIcon name="Camera" size={24} className="mr-3" />
            Start Report
          </Button>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-500">
            Reports are anonymous and help improve service quality
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;