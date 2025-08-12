import React from "react";
import Card from "@/components/atoms/Card";
import ApperIcon from "@/components/ApperIcon";

const CategorySelector = ({ selectedCategory, onCategorySelect }) => {
  const categories = [
    {
      id: "Standard",
      label: "Standard Issue",
      description: "General cleanliness concerns",
      icon: "AlertCircle",
      color: "from-blue-500 to-blue-600",
      borderColor: "border-blue-300",
      selectedColor: "border-blue-500 bg-blue-50"
    },
    {
      id: "Priority",
      label: "Priority Issue",
      description: "Urgent cleanliness problems",
      icon: "AlertTriangle",
      color: "from-amber-500 to-orange-500",
      borderColor: "border-amber-300",
      selectedColor: "border-amber-500 bg-amber-50"
    }
  ];

return (
    <div className="space-y-6">
      <div className="text-center space-y-3">
        <h2 className="text-2xl font-semibold text-gray-900 font-display">Select Issue Priority</h2>
        <p className="text-gray-600 text-lg">Choose the appropriate category for this report</p>
      </div>
      
      <div className="space-y-4">
        {categories.map((category) => (
          <Card
            key={category.id}
            className={`p-6 cursor-pointer transition-all duration-300 transform hover:scale-[1.02] border-2 ${
              selectedCategory === category.id
                ? "border-blue-500 bg-blue-50 shadow-lg"
                : "border-gray-200 hover:border-blue-300 hover:bg-gray-50 hover:shadow-md"
            }`}
            onClick={() => onCategorySelect(category.id)}
          >
            <div className="flex items-center space-x-5">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}>
                <ApperIcon name={category.icon} size={28} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 text-lg">{category.label}</h3>
                <p className="text-gray-600 mt-1">{category.description}</p>
              </div>
              <div className={`w-7 h-7 rounded-full border-3 flex items-center justify-center transition-colors ${
                selectedCategory === category.id
                  ? "border-blue-500 bg-blue-500"
                  : "border-gray-300"
              }`}>
                {selectedCategory === category.id && (
                  <ApperIcon name="Check" size={18} className="text-white" />
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CategorySelector;