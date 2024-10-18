import React from 'react';
import { LinearProgress, Box, } from '@mui/material';

type ProgressBarProps = {
  currentStep: number;
  totalSteps: number;
};

export default function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <Box sx={{ width: '100%', marginBottom: '20px' }}>
      <LinearProgress
        data-testId='progress-bar'
        variant='determinate'
        value={progress}
        sx={{
          height: '8px',
          '& .MuiLinearProgress-bar': {
            backgroundColor: '#00ADC6',
          },
          backgroundColor: '#E5E5E5',
        }}
      />
    </Box>
  );
}
