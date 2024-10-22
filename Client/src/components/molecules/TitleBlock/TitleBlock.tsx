import React, { ReactNode } from 'react';
import { Box, Typography } from '@mui/material';

export type TitleBlockProps = {
    image: ReactNode; // Image for the title block
    title: string; // Title text
    description: string; // Description text
    testId: string; // Test ID for testing
};

export function TitleBlock({
  image,
  title,
  description = '',
  testId,
}: TitleBlockProps) {
  return (
    <Box
      data-testid={testId}
      sx={{
        textAlign: 'center',
        paddingLeft: '100px',
        paddingRight: '100px',

        backgroundColor: '#F0F0F0',
        borderRadius: '10px',
        margin: 'auto',
      }}
    >
      {/* Image Section */}
      <Box data-testId='title-page-image' sx={{ marginBottom: '20px'}}>{image}</Box>

      {/* Title Section */}
      <Typography
        variant='h4'
        component='h1'
        sx={{
          fontFamily: 'PublicoHeadline, sans-serif',
          fontWeight: 'bold',
          marginBottom: '16px',
        }}
      >
        {title}
      </Typography>

      {/* Description Section */}
      <Typography
        variant='h4'
        data-testId='TitleBlock-description'
        sx={{
          fontSize:'20px',
          fontFamily: 'Source Sans Pro, sans-serif',
          color: '#343C3D',
        }}
      >
        {description}
      </Typography>
    </Box>
  );
}
