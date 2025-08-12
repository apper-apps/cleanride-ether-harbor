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
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-xl font-semibold text-gray-900 font-display">Take a Photo</h2>
        <p className="text-gray-600">Capture the cleanliness issue clearly</p>
      </div>

      <div className={`relative bg-gray-900 rounded-2xl aspect-[4/3] overflow-hidden shadow-xl ${flashEffect ? "camera-flash" : ""}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
              <ApperIcon name="Camera" size={32} className="text-white/70" />
            </div>
            <p className="text-white/70 text-sm">Camera Preview</p>
          </div>
        </div>
        
        {/* Camera viewfinder overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-white/50 rounded-tl-lg" />
          <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-white/50 rounded-tr-lg" />
          <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-white/50 rounded-bl-lg" />
          <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-white/50 rounded-br-lg" />
        </div>
      </div>

      <div className="space-y-3">
        <Button
          onClick={handleCapture}
          variant="accent"
          size="lg"
          className="w-full relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-accent-400 to-secondary-400 opacity-20 animate-pulse-subtle" />
          <ApperIcon name="Camera" size={24} className="mr-3" />
          Capture Photo
        </Button>

        <div className="relative">
          <Button
            onClick={() => fileInputRef.current?.click()}
            variant="outline"
            className="w-full"
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