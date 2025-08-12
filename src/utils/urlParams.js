export const getUrlParams = () => {
  const urlParams = new URLSearchParams(window.location.search);
  return {
    trainId: urlParams.get("trainId") || urlParams.get("train") || "Unknown",
    carId: urlParams.get("carId") || urlParams.get("car") || "Unknown"
  };
};

export const generateReportId = () => {
  return `CR-${Date.now()}-${Math.random().toString(36).substr(2, 5).toUpperCase()}`;
};