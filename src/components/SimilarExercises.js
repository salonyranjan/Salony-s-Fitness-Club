import React from 'react';
import { Typography, Box, Stack } from '@mui/material';

import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: '100px', xs: '40px' }, p: '20px' }}>
      
      {/* 1. Target Muscle Section */}
      <Typography
        sx={{ 
          fontSize: { lg: '44px', xs: '25px' }, 
          ml: '20px',
          color: '#fff',
          textShadow: '0 0 10px rgba(255, 255, 255, 0.2)',
          fontFamily: 'Josefin Sans'
        }}
        fontWeight={700}
        mb="33px"
      >
        Similar <span style={{ color: '#FF2625', textShadow: '0 0 15px rgba(255, 38, 37, 0.6)' }}>Target Muscle</span> exercises
      </Typography>
      
      <Stack 
        className="similar-row" // Targeted by App.css for the 2-column layout
        direction="row" 
        sx={{ 
          p: 2, 
          position: 'relative', 
          background: 'rgba(255, 255, 255, 0.03)', 
          borderRadius: '30px',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          mb: '80px',
          minHeight: '450px', // Prevents layout jump while loading
          alignItems: 'center'
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
          color: '#fff',
          textShadow: '0 0 10px rgba(255, 255, 255, 0.2)',
          fontFamily: 'Josefin Sans'
        }}
        fontWeight={700}
        mb="33px"
      >
        Similar <span style={{ color: '#00D2FF', textShadow: '0 0 15px rgba(0, 210, 255, 0.6)' }}>Equipment</span> exercises
      </Typography>
      
      <Stack 
        className="similar-row"
        direction="row" 
        sx={{ 
          p: 2, 
          position: 'relative', 
          background: 'rgba(255, 255, 255, 0.03)', 
          borderRadius: '30px',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          minHeight: '450px',
          alignItems: 'center'
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
};

export default SimilarExercises;