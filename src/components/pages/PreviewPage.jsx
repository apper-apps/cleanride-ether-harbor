import React from "react";
import PhotoPreview from "@/components/molecules/PhotoPreview";
import StepIndicator from "@/components/molecules/StepIndicator";

const PreviewPage = ({ photo, onRetake, onConfirm }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-8">
      <div className="max-w-md mx-auto space-y-6">
        <StepIndicator currentStep={3} />
        
        <div className="text-center space-y-2">
          <h2 className="text-xl font-semibold text-gray-900 font-display">Review Your Photo</h2>
          <p className="text-gray-600">Make sure the issue is clearly visible</p>
        </div>
        
        <PhotoPreview 
          photo={photo} 
          onRetake={onRetake} 
          onConfirm={onConfirm} 
        />
      </div>
    </div>
  );
};

export default PreviewPage;