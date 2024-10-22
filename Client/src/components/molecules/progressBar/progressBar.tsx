import React from 'react';
import { LinearProgress, Box } from '@mui/material';

type ProgressBarProps = {
  currentStep: number; // Current step in the survey
  totalSteps: number; // Total steps in the survey
};

export default function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  const progress = (currentStep / totalSteps) * 100; // Calculate progress percentage

  return (
    <Box sx={{ width: '100%', marginBottom: '20px' }}>
      {/* Linear progress bar with dynamic value */}
      <LinearProgress
        data-testId='progress-bar'
        variant='determinate'
        value={progress} // Set progress percentage
        sx={{
          height: '8px',
          '& .MuiLinearProgress-bar': {
            backgroundColor: '#00ADC6', // Custom color for progress
          },
          backgroundColor: '#E5E5E5',

        }}
      />
    </Box>
  );
}
