import React from "react";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";

const PhotoPreview = ({ photo, onRetake, onConfirm }) => {
  return (
    <div className="space-y-6">
      <div className="relative rounded-2xl overflow-hidden bg-gray-100 aspect-[4/3] shadow-lg">
        <img
          src={photo}
          alt="Cleanliness issue"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
      </div>
      
      <div className="space-y-3">
        <Button
          onClick={onConfirm}
          variant="accent"
          className="w-full"
        >
          <ApperIcon name="Check" size={20} className="mr-2" />
          Use This Photo
        </Button>
        
        <Button
          onClick={onRetake}
          variant="outline"
          className="w-full"
        >
          <ApperIcon name="Camera" size={20} className="mr-2" />
          Take Another Photo
        </Button>
      </div>
    </div>
  );
};

export default PhotoPreview;