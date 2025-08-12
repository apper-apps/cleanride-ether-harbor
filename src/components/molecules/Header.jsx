import React from "react";
import ApperIcon from "@/components/ApperIcon";

const Header = ({ trainId, carId }) => {
  return (
    <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-4 px-4 shadow-lg">
      <div className="max-w-md mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
            <ApperIcon name="Train" size={20} className="text-white" />
          </div>
          <div>
            <h1 className="font-display font-semibold text-lg">CleanRide QR</h1>
            <p className="text-primary-100 text-sm">Report System</p>
          </div>
        </div>
        {(trainId || carId) && (
          <div className="text-right">
            <div className="flex items-center space-x-1 text-sm text-primary-100">
              <ApperIcon name="MapPin" size={14} />
              <span>Train {trainId}</span>
            </div>
            <div className="text-xs text-primary-200">Car {carId}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;