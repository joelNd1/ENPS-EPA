import React from "react";

type QuestionNavigationProps = {
  isBackButtonDisabled?: boolean; // Controls if the Back button is disabled
  isNextButtonDisabled: boolean;  // Controls if the Next button is disabled
  isBackButtonHidden?: boolean;   // Controls if the Back button is hidden
  backButtonClickHandler?: () => void; // Function to handle Back button click
  nextButtonClickHandler?: () => void; // Function to handle Next button click
  wrapperMarginDisabled?: boolean;     
  nextButtonText?: string;      
  backButtonText?: string;             
};

export default function QuestionNavigation({
  isBackButtonDisabled = true,
  isNextButtonDisabled = true,
  isBackButtonHidden = true,
  backButtonClickHandler,
  nextButtonClickHandler,
  wrapperMarginDisabled = false,
  nextButtonText = "Next",          // Default text for Next button
  backButtonText = "Back",          // Default text for Back button
}: QuestionNavigationProps) {
  return (
    <div
      data-testid="Page-Navigation"
      style={{
        display: "flex",
        justifyContent: isBackButtonHidden ? "flex-end" : "space-between", // Adjust alignment based on whether the Back button is hidden
        margin: wrapperMarginDisabled ? "0" : "20px 0", // Add margin unless disabled
      }}
    >
      {/* Conditionally render the Back button */}
      {!isBackButtonHidden && (
        <button
          data-testid="Back-Button"
          disabled={isBackButtonDisabled} // Disable the button if isBackButtonDisabled is true
          onClick={backButtonClickHandler} // Call the back button handler on click
          style={{
            backgroundColor: isBackButtonDisabled ? "#ccc" : "ff4400", 
            cursor: isBackButtonDisabled ? "not-allowed" : "pointer",   // Change cursor based on disabled state
            padding: "10px 20px",
            borderRadius: "4px",
            border: "none",
            color: "#ffffff",
            marginRight: "10px",
          }}
        >
          {backButtonText}
        </button>
      )}

      {/* Render the Next button */}
      <button
        data-testid="Next-Button"
        disabled={isNextButtonDisabled} 
        onClick={nextButtonClickHandler} 
        style={{
          backgroundColor: isNextButtonDisabled ? "#ccc" : "#ff4400", // Disabled styling for next button
          cursor: isNextButtonDisabled ? "not-allowed" : "pointer",   // Change cursor based on disabled state
          padding: "10px 20px",
          borderRadius: "4px",
          border: "none",
          color: "#fff",
        }}
      >
        {nextButtonText}
      </button>
    </div>
  );
}
