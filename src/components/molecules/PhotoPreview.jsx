import React from "react";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";

const PhotoPreview = ({ photo, onRetake, onConfirm }) => {
return (
    <div className="space-y-8">
      <div className="relative rounded-3xl overflow-hidden bg-gray-100 aspect-[4/3] shadow-xl border border-gray-200">
        <img
          src={photo}
          alt="Cleanliness issue"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
      </div>
      
      <div className="space-y-4">
        <Button
          onClick={onConfirm}
          variant="primary"
          size="lg"
          className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg"
        >
          <ApperIcon name="Check" size={20} className="mr-2" />
          Use This Photo
        </Button>
        
        <Button
          onClick={onRetake}
          variant="outline"
          size="lg"
          className="w-full border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors"
        >
          <ApperIcon name="Camera" size={20} className="mr-2" />
          Take Another Photo
        </Button>
      </div>
    </div>
  );
};

export default PhotoPreview;