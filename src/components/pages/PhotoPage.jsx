import React from "react";
import CameraCapture from "@/components/organisms/CameraCapture";
import StepIndicator from "@/components/molecules/StepIndicator";

const PhotoPage = ({ onPhotoCapture }) => {
return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-8">
      <div className="max-w-md mx-auto space-y-8">
        <StepIndicator currentStep={2} />
        <CameraCapture onPhotoCapture={onPhotoCapture} />
      </div>
    </div>
  );
};

export default PhotoPage;