import React from "react";
import CategorySelector from "@/components/molecules/CategorySelector";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";
import StepIndicator from "@/components/molecules/StepIndicator";

const CategoryPage = ({ selectedCategory, onCategorySelect, onSubmit, isSubmitting }) => {
return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-8">
      <div className="max-w-md mx-auto space-y-8">
        <StepIndicator currentStep={4} />
        
        <CategorySelector 
          selectedCategory={selectedCategory}
          onCategorySelect={onCategorySelect}
        />
        
        <Button
          onClick={onSubmit}
          variant="primary"
          size="lg"
          className="w-full shadow-xl bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
          disabled={!selectedCategory || isSubmitting}
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3" />
              Submitting Report...
            </>
          ) : (
            <>
              <ApperIcon name="Send" size={20} className="mr-3" />
              Submit Report
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default CategoryPage;