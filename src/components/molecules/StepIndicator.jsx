import React from "react";

const StepIndicator = ({ currentStep, totalSteps = 4 }) => {
  const steps = Array.from({ length: totalSteps }, (_, i) => i + 1);
  
  return (
    <div className="flex justify-center space-x-3 py-4">
      {steps.map((step) => (
        <div
          key={step}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            step <= currentStep
              ? "bg-gradient-to-r from-accent-500 to-secondary-500 scale-110 shadow-lg"
              : "bg-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

export default StepIndicator;