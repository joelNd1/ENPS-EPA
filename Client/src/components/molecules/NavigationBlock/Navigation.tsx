import React from 'react';
import { Button, Box } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

type NavigationProps = {
  isBackButtonDisabled?: boolean; // Determines if the Back button is disabled
  isNextButtonDisabled: boolean; // Determines if the Next button is disabled
  isBackButtonHidden?: boolean; // Determines if the Back button is hidden
  backButtonClickHandler?: () => void; // Handler for the Back button click
  nextButtonClickHandler?: () => void; // Handler for the Next button click
  wrapperMarginDisabled?: boolean; // Disables the margin on the wrapper
  nextButtonText?: string; // Text for the Next button
  backButtonText?: string; // Text for the Back button
};

export default function Navigation({
  isBackButtonDisabled = true,
  isNextButtonDisabled = true,
  isBackButtonHidden = false,
  backButtonClickHandler,
  nextButtonClickHandler,
  wrapperMarginDisabled = false,
  nextButtonText = 'Next',
  backButtonText = 'Back',
}: NavigationProps) {
  return (
    <Box
      data-testid='Page-Navigation'
      sx={{
        display: 'flex',
        justifyContent: isBackButtonHidden ? 'center' : 'space-between',
        margin: wrapperMarginDisabled ? '0' : '20px 0',
        maxWidth: '600px',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingBottom:'20px'
      }}
    >
      {/* Conditionally render the Back button if not hidden */}
      {!isBackButtonHidden && (
        <Button
          variant='outlined'
          disabled={isBackButtonDisabled}
          onClick={backButtonClickHandler}
          startIcon={<ArrowBackIosIcon />} // Back arrow icon
        >
          {backButtonText} {/* Back button label */}
        </Button>
      )}

      {/* Render the Next button */}
      <Button
        variant='contained'
        disabled={isNextButtonDisabled}
        onClick={nextButtonClickHandler}
        endIcon={<ArrowForwardIosIcon />} // Forward arrow icon
      >
        {nextButtonText} {/* Next button label */}
      </Button>
    </Box>
  );
}
