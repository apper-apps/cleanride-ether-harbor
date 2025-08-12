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
    <div className="space-y-4">
      <div className="text-center space-y-2">
        <h2 className="text-xl font-semibold text-gray-900 font-display">Select Issue Priority</h2>
        <p className="text-gray-600">Choose the appropriate category for this report</p>
      </div>
      
      <div className="space-y-3">
        {categories.map((category) => (
          <Card
            key={category.id}
            className={`p-4 cursor-pointer transition-all duration-200 transform hover:scale-[1.02] ${
              selectedCategory === category.id
                ? category.selectedColor
                : "hover:bg-gray-50 hover:shadow-md"
            } ${
              selectedCategory === category.id
                ? category.borderColor.replace("300", "500")
                : category.borderColor
            }`}
            onClick={() => onCategorySelect(category.id)}
          >
            <div className="flex items-center space-x-4">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}>
                <ApperIcon name={category.icon} size={24} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">{category.label}</h3>
                <p className="text-sm text-gray-600">{category.description}</p>
              </div>
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                selectedCategory === category.id
                  ? "border-primary-500 bg-primary-500"
                  : "border-gray-300"
              }`}>
                {selectedCategory === category.id && (
                  <ApperIcon name="Check" size={16} className="text-white" />
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