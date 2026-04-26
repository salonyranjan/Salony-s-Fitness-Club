import React from 'react';
import { Typography, Box, Stack } from '@mui/material';

import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => (
  <Box sx={{ mt: { lg: '100px', xs: '40px' }, p: '20px' }}>
      
    {/* 1. Target Muscle Section */}
    <Typography
      sx={{ 
        fontSize: { lg: '44px', xs: '25px' }, 
        ml: '20px',
        fontFamily: 'Josefin Sans',
        // Colorful Gradient for the main title
        background: 'linear-gradient(90deg, #FFFFFF 0%, #FF2625 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        mb: '33px'
      }}
      fontWeight={700}
    >
      Similar <span style={{ WebkitTextFillColor: '#FF2625', textShadow: '0 0 20px rgba(255, 38, 37, 0.5)' }}>Target Muscle</span> Exercises
    </Typography>
      
    <Stack 
      className="similar-row" 
      direction="row" 
      sx={{ 
        p: 2, 
        position: 'relative', 
        background: 'rgba(255, 255, 255, 0.02)', 
        backdropFilter: 'blur(10px)',
        borderRadius: '30px',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        mb: '80px',
        minHeight: '450px',
        alignItems: 'center',
        boxShadow: 'inset 0 0 20px rgba(255, 38, 37, 0.05)'
      }}
    >
      {targetMuscleExercises?.length !== 0 ? (
        <HorizontalScrollbar data={targetMuscleExercises} />
      ) : (
        <Loader />
      )}
    </Stack>

    {/* 2. Equipment Section */}
    <Typography
      sx={{
        fontSize: { lg: '44px', xs: '25px' },
        ml: '20px',
        mt: { lg: '100px', xs: '60px' },
        fontFamily: 'Josefin Sans',
        // Colorful Gradient for the second title
        background: 'linear-gradient(90deg, #FFFFFF 0%, #00D2FF 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        mb: '33px'
      }}
      fontWeight={700}
    >
      Similar <span style={{ WebkitTextFillColor: '#00D2FF', textShadow: '0 0 20px rgba(0, 210, 255, 0.5)' }}>Equipment</span> Exercises
    </Typography>
      
    <Stack 
      className="similar-row"
      direction="row" 
      sx={{ 
        p: 2, 
        position: 'relative', 
        background: 'rgba(255, 255, 255, 0.02)', 
        backdropFilter: 'blur(10px)',
        borderRadius: '30px',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        minHeight: '450px',
        alignItems: 'center',
        boxShadow: 'inset 0 0 20px rgba(0, 210, 255, 0.05)'
      }}
    >
      {equipmentExercises?.length !== 0 ? (
        <HorizontalScrollbar data={equipmentExercises} />
      ) : (
        <Loader />
      )}
    </Stack>
  </Box>
);

export default SimilarExercises;