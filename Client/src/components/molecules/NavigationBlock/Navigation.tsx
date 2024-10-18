import React from 'react';
import { Button, Box } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

type NavigationProps = {
  isBackButtonDisabled?: boolean;
  isNextButtonDisabled: boolean;
  isBackButtonHidden?: boolean;
  backButtonClickHandler?: () => void;
  nextButtonClickHandler?: () => void;
  wrapperMarginDisabled?: boolean;
  nextButtonText?: string;
  backButtonText?: string;
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
        width: '100%',
        maxWidth: '600px',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingBottom:'20px'
      }}
    >
      {/* Conditionally render the Back button */}
      {!isBackButtonHidden && (
        <Button
          variant='outlined'
          disabled={isBackButtonDisabled}
          onClick={backButtonClickHandler}
          startIcon={<ArrowBackIosIcon />}
          sx={{
            color: isBackButtonDisabled ? '#ccc' : '#3A5E94',
            borderColor: isBackButtonDisabled ? '#ccc' : '#3A5E94',
            '&:hover': {
              borderColor: '#3A5E94',
            },
            textTransform: 'none',
            padding: '10px 20px',
            fontFamily: 'Source sans Pro, sans-serif', 
          }}
        >
          {backButtonText}
        </Button>
      )}

      {/* Render the Next button */}
      <Button
        variant='contained'
        disabled={isNextButtonDisabled}
        onClick={nextButtonClickHandler}
        endIcon={<ArrowForwardIosIcon />}
        sx={{
          backgroundColor: isNextButtonDisabled ? '#ccc' : '#B03C1D',
          color: '#fff',
          textTransform: 'none',
          padding: '10px 20px',
          '&:hover': {
            backgroundColor: '#B03C1D',
          },
          fontFamily: 'Source sans Pro, sans-serif', 
        }}
      >
        {nextButtonText}
      </Button>
    </Box>
  );
}
