import React, { useEffect, useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises/bodyPartList', 
        exerciseOptions
      );

      if (bodyPartsData.length) {
        setBodyParts(['all', ...bodyPartsData]);
      }
    };

    fetchExercisesData();
  }, []);

  return (
    <Stack 
      id="exercises" 
      alignItems="flex-start" 
      sx={{ 
        mt: '100px', 
        ml: { lg: '100px', sm: '50px', xs: '20px' }, 
        p: '20px' 
      }}
    >
      {/* --- 1. Futuristic Section Header --- */}
      <Box mb="60px" sx={{ position: 'relative' }}>
        <Typography 
          fontWeight={800} 
          sx={{ 
            fontSize: { lg: '54px', xs: '36px' }, 
            color: '#fff', 
            textTransform: 'uppercase',
            letterSpacing: '2px',
            lineHeight: '1.1'
          }}
        >
          Target <span style={{ color: '#FF2625', textShadow: '0 0 20px rgba(255, 38, 37, 0.5)' }}>Muscle</span> <br /> 
          Systems
        </Typography>
        
        {/* Decorative Neon Accent Line */}
        <Box 
          sx={{ 
            width: '100px', 
            height: '4px', 
            bgcolor: '#FF2625', 
            mt: '20px',
            borderRadius: '2px',
            boxShadow: '0 0 10px #FF2625'
          }} 
        />
      </Box>

      {/* --- 2. Interactive Selection Hub --- */}
      <Box 
        sx={{ 
          position: 'relative', 
          width: '100%', 
          backgroundColor: 'rgba(255, 255, 255, 0.02)',
          borderRadius: '40px 0 0 40px',
          p: '40px 0',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          borderRight: 'none'
        }}
      >
        <HorizontalScrollbar 
          data={bodyParts} 
          bodyParts 
          setBodyPart={setBodyPart} 
          bodyPart={bodyPart} 
        />
      </Box>

      {/* --- 3. Bottom Guide Text --- */}
      <Typography 
        sx={{ 
          fontSize: '14px', 
          color: 'rgba(255, 255, 255, 0.4)', 
          mt: '30px',
          fontFamily: 'Alegreya',
          letterSpacing: '1px'
        }}
      >
        Select a biological sector to optimize performance data and discover exercises that target your specific needs.
      </Typography>
    </Stack>
  );
};

export default SearchExercises;