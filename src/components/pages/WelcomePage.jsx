import React from "react";
import Button from "@/components/atoms/Button";
import Card from "@/components/atoms/Card";
import ApperIcon from "@/components/ApperIcon";
import StepIndicator from "@/components/molecules/StepIndicator";

const WelcomePage = ({ trainId, carId, onStart }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-8">
      <div className="max-w-md mx-auto space-y-6">
        <StepIndicator currentStep={1} />
        
        <div className="text-center space-y-6">
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-primary-600 rounded-3xl mx-auto flex items-center justify-center shadow-2xl">
              <ApperIcon name="Camera" size={40} className="text-white" />
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-accent-500 to-secondary-500 rounded-full flex items-center justify-center shadow-lg">
              <ApperIcon name="Zap" size={16} className="text-gray-900" />
            </div>
          </div>

          <div className="space-y-3">
            <h1 className="text-2xl font-bold text-gray-900 font-display">Report Cleanliness Issue</h1>
            <p className="text-gray-600 leading-relaxed">
              Help maintain clean trains by reporting issues quickly and easily
            </p>
          </div>
        </div>

        {(trainId || carId) && (
          <Card variant="elevated" className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center">
                <ApperIcon name="MapPin" size={24} className="text-primary-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">Location Detected</h3>
                <div className="flex items-center space-x-4 mt-1">
                  <div className="flex items-center space-x-1 text-sm text-gray-600">
                    <ApperIcon name="Train" size={16} />
                    <span>Train {trainId || "N/A"}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-gray-600">
                    <ApperIcon name="Car" size={16} />
                    <span>Car {carId || "N/A"}</span>
                  </div>
                </div>
              </div>
              <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center">
                <ApperIcon name="Check" size={16} className="text-white" />
              </div>
            </div>
          </Card>
        )}

        <div className="space-y-4">
          <Card variant="flat" className="p-4">
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 font-semibold text-sm">1</span>
                </div>
                <span className="text-sm text-gray-700 font-medium">Take a photo of the issue</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-100 to-amber-200 rounded-lg flex items-center justify-center">
                  <span className="text-amber-600 font-semibold text-sm">2</span>
                </div>
                <span className="text-sm text-gray-700 font-medium">Select priority level</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center">
                  <span className="text-green-600 font-semibold text-sm">3</span>
                </div>
                <span className="text-sm text-gray-700 font-medium">Submit your report</span>
              </div>
            </div>
          </Card>

          <Button
            onClick={onStart}
            variant="accent"
            size="lg"
            className="w-full shadow-xl"
          >
            <ApperIcon name="Camera" size={24} className="mr-3" />
            Start Report
          </Button>
        </div>

        <div className="text-center">
          <p className="text-xs text-gray-500">
            Reports are anonymous and help improve service quality
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;