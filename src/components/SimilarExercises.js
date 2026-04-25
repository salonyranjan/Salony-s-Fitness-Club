import React from 'react';
import { Typography, Box, Stack } from '@mui/material';

import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => (
  <Box sx={{ mt: { lg: '100px', xs: '40px' }, p: '20px' }}>
    
    {/* Target Muscle Section */}
    <Typography
      sx={{ 
        fontSize: { lg: '44px', xs: '25px' }, 
        ml: '20px',
        color: '#fff', // Changed from #000
        textShadow: '0 0 10px rgba(255, 255, 255, 0.2)'
      }}
      fontWeight={700}
      mb="33px"
    >
      Similar <span style={{ color: '#FF2625', textShadow: '0 0 10px #FF2625' }}>Target Muscle</span> exercises
    </Typography>
    
    <Stack direction="row" sx={{ p: 2, position: 'relative', background: 'rgba(255,255,255,0.02)', borderRadius: '20px' }}>
      {targetMuscleExercises && targetMuscleExercises.length !== 0 ? (
        <HorizontalScrollbar data={targetMuscleExercises} />
      ) : (
        <Loader />
      )}
    </Stack>

    {/* Equipment Section */}
    <Typography
      sx={{
        fontSize: { lg: '44px', xs: '25px' },
        ml: '20px',
        mt: { lg: '100px', xs: '60px' },
        color: '#fff', // Changed from #000
        textShadow: '0 0 10px rgba(255, 255, 255, 0.2)'
      }}
      fontWeight={700}
      mb="33px"
    >
      Similar <span style={{ color: '#00D2FF', textShadow: '0 0 10px #00D2FF' }}>Equipment</span> exercises
    </Typography>
    
    <Stack direction="row" sx={{ p: 2, position: 'relative', background: 'rgba(255,255,255,0.02)', borderRadius: '20px' }}>
      {equipmentExercises && equipmentExercises.length !== 0 ? (
        <HorizontalScrollbar data={equipmentExercises} />
      ) : (
        <Loader />
      )}
    </Stack>
  </Box>
);

export default SimilarExercises;