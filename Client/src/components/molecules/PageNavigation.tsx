import React from "react";

type PageNavigationProps = {
  isBackButtonDisabled?: boolean; // Controls if the Back button is disabled
  isNextButtonDisabled: boolean;  // Controls if the Next button is disabled
  isBackButtonHidden?: boolean;   // Controls if the Back button is hidden
  backButtonClickHandler?: () => void; // Function to handle Back button click
  nextButtonClickHandler?: () => void; // Function to handle Next button click
  wrapperMarginDisabled?: boolean;     // Option to disable wrapper margin
};

export default function PageNavigation({
  isBackButtonDisabled = false, // Default: Back button is enabled
  isNextButtonDisabled = true,  // Default: Next button is disabled
  isBackButtonHidden = false,   // Default: Back button is visible
  backButtonClickHandler,       // Back button click handler
  nextButtonClickHandler,       // Next button click handler
  wrapperMarginDisabled = false // Default: wrapper margin is enabled
}: PageNavigationProps) {
  return (
    <div
      data-testid="Page-Navigation"
      style={{
        display: "flex",
        justifyContent: "space-between",
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
            backgroundColor: isBackButtonDisabled ? "#ccc" : "#007bff", // Disabled styling for back button
            cursor: isBackButtonDisabled ? "not-allowed" : "pointer",   // Change cursor based on disabled state
            padding: "10px 20px",
            borderRadius: "4px",
            border: "none",
            color: "#fff",
          }}
        >
          Back
        </button>
      )}

      {/* Render the Next button */}
      <button
        data-testid="Next-Button"
        disabled={isNextButtonDisabled} // Disable the Next button based on isNextButtonDisabled prop
        onClick={nextButtonClickHandler} // Call the next button handler on click
        style={{
          backgroundColor: isNextButtonDisabled ? "#ccc" : "#007bff", // Disabled styling for next button
          cursor: isNextButtonDisabled ? "not-allowed" : "pointer",   // Change cursor based on disabled state
          padding: "10px 20px",
          borderRadius: "4px",
          border: "none",
          color: "#fff",
        }}
      >
        Next
      </button>
    </div>
  );
}
