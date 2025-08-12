import React, { useRef, useState } from "react";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";
import Loading from "@/components/ui/Loading";

const CameraCapture = ({ onPhotoCapture }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [flashEffect, setFlashEffect] = useState(false);
  const fileInputRef = useRef(null);

  const handleCapture = () => {
    // Simulate camera capture with flash effect
    setFlashEffect(true);
    setIsLoading(true);
    
    setTimeout(() => {
      setFlashEffect(false);
      setIsLoading(false);
      // Generate a mock photo URL for demo purposes
      const mockPhotoUrl = `data:image/svg+xml;base64,${btoa(`
        <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#f3f4f6;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#e5e7eb;stop-opacity:1" />
            </linearGradient>
          </defs>
          <rect width="400" height="300" fill="url(#bg)"/>
          <circle cx="200" cy="150" r="40" fill="#9ca3af" opacity="0.5"/>
          <text x="200" y="200" text-anchor="middle" fill="#6b7280" font-family="Arial" font-size="14">Sample Photo</text>
        </svg>
      `)}`;
      onPhotoCapture(mockPhotoUrl);
    }, 200);
  };

  const handleFileSelect = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      setIsLoading(true);
      const reader = new FileReader();
      reader.onload = (e) => {
        setIsLoading(false);
        onPhotoCapture(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  if (isLoading) {
    return <Loading message="Processing photo..." />;
  }

return (
    <div className="space-y-8">
      <div className="text-center space-y-3">
        <h2 className="text-2xl font-semibold text-gray-900 font-display">Take a Photo</h2>
        <p className="text-gray-600 text-lg">Capture the cleanliness issue clearly</p>
      </div>

      <div className={`relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl aspect-[4/3] overflow-hidden shadow-2xl ${flashEffect ? "camera-flash" : ""}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 flex items-center justify-center">
          <div className="text-center space-y-6">
            <div className="w-24 h-24 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20">
              <ApperIcon name="Camera" size={36} className="text-white/70" />
            </div>
            <p className="text-white/70 text-base font-medium">Camera Preview</p>
          </div>
        </div>
        
        {/* Enhanced camera viewfinder overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-6 left-6 w-8 h-8 border-l-3 border-t-3 border-white/60 rounded-tl-xl" />
          <div className="absolute top-6 right-6 w-8 h-8 border-r-3 border-t-3 border-white/60 rounded-tr-xl" />
          <div className="absolute bottom-6 left-6 w-8 h-8 border-l-3 border-b-3 border-white/60 rounded-bl-xl" />
          <div className="absolute bottom-6 right-6 w-8 h-8 border-r-3 border-b-3 border-white/60 rounded-br-xl" />
        </div>
      </div>

      <div className="space-y-4">
        <Button
          onClick={handleCapture}
          variant="primary"
          size="lg"
          className="w-full relative overflow-hidden bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 opacity-20 animate-pulse-subtle" />
          <ApperIcon name="Camera" size={24} className="mr-3" />
          Capture Photo
        </Button>

        <div className="relative">
          <Button
            onClick={() => fileInputRef.current?.click()}
            variant="outline"
            size="lg"
            className="w-full border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors"
          >
            <ApperIcon name="Image" size={20} className="mr-2" />
            Choose from Gallery
          </Button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            className="hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default CameraCapture;