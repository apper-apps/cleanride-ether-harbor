import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

// Components
import Header from "@/components/molecules/Header";
import WelcomePage from "@/components/pages/WelcomePage";
import PhotoPage from "@/components/pages/PhotoPage";
import PreviewPage from "@/components/pages/PreviewPage";
import CategoryPage from "@/components/pages/CategoryPage";
import SuccessPage from "@/components/pages/SuccessPage";

// Hooks and Utils
import { useReport } from "@/hooks/useReport";
import { getUrlParams, generateReportId } from "@/utils/urlParams";

const App = () => {
  const [currentStep, setCurrentStep] = useState("welcome");
const [reportData, setReportData] = useState({
    trainId: "",
    carId: "",
    photoUrl: "",
    category: "",
    id: "",
    timestamp: null
  });
  const [capturedPhoto, setCapturedPhoto] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  
  const { submitReport, loading: isSubmitting } = useReport();

  // Extract URL parameters on mount
  useEffect(() => {
    const urlParams = getUrlParams();
    setReportData(prev => ({
      ...prev,
      trainId: urlParams.trainId,
      carId: urlParams.carId,
      id: generateReportId()
    }));
  }, []);

  const handleStart = () => {
    setCurrentStep("photo");
  };

  const handlePhotoCapture = (photoUrl) => {
    setCapturedPhoto(photoUrl);
    setCurrentStep("preview");
  };

  const handlePhotoRetake = () => {
    setCapturedPhoto("");
    setCurrentStep("photo");
  };

  const handlePhotoConfirm = () => {
    setReportData(prev => ({
      ...prev,
      photoUrl: capturedPhoto
    }));
    setCurrentStep("category");
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleSubmit = async () => {
    try {
      const finalReportData = {
        ...reportData,
        category: selectedCategory,
        photoUrl: capturedPhoto
      };

      const submittedReport = await submitReport(finalReportData);
      setReportData(submittedReport);
      setCurrentStep("success");
      
      toast.success("Report submitted successfully!");
    } catch (error) {
      toast.error("Failed to submit report. Please try again.");
    }
  };

  const handleNewReport = () => {
    // Reset all state
    setCurrentStep("welcome");
    setCapturedPhoto("");
    setSelectedCategory("");
    
    // Get fresh URL params
    const urlParams = getUrlParams();
setReportData({
      trainId: urlParams.trainId,
      carId: urlParams.carId,
      photoUrl: "",
      category: "",
      id: generateReportId(),
      timestamp: new Date().toISOString()
    });
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case "welcome":
        return (
          <WelcomePage
            trainId={reportData.trainId}
            carId={reportData.carId}
            onStart={handleStart}
          />
        );
      case "photo":
        return <PhotoPage onPhotoCapture={handlePhotoCapture} />;
      case "preview":
        return (
          <PreviewPage
            photo={capturedPhoto}
            onRetake={handlePhotoRetake}
            onConfirm={handlePhotoConfirm}
          />
        );
      case "category":
        return (
          <CategoryPage
            selectedCategory={selectedCategory}
            onCategorySelect={handleCategorySelect}
            onSubmit={handleSubmit}
            isSubmitting={isSubmitting}
          />
        );
      case "success":
        return (
          <SuccessPage
            reportData={reportData}
            onNewReport={handleNewReport}
          />
        );
      default:
        return <Navigate to="/" replace />;
    }
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Header trainId={reportData.trainId} carId={reportData.carId} />
        
        <Routes>
          <Route path="/" element={renderCurrentStep()} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </BrowserRouter>
  );
};

export default App;