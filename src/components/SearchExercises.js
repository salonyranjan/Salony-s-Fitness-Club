import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState('');
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

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises?limit=1000', 
        exerciseOptions
      );

      if (exercisesData.length) {
        const searchedExercises = exercisesData.filter(
          (item) => 
            item.name.toLowerCase().includes(search) ||
            item.target.toLowerCase().includes(search) ||
            item.equipment.toLowerCase().includes(search) ||
            item.bodyPart.toLowerCase().includes(search)
        );

        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
        setSearch('');
        setExercises(searchedExercises);
      }
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      {/* Title with Neon Glow */}
      <Typography 
        fontWeight={700} 
        sx={{ 
          fontSize: { lg: '44px', xs: '30px' },
          color: '#fff',
          textShadow: '0 0 10px rgba(255, 255, 255, 0.3)'
        }} 
        mb="49px" 
        textAlign="center"
      >
        Awesome Exercises You <br /> Should Know
      </Typography>

      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          sx={{ 
            /* Dark Glassmorphism Input */
            input: { 
              fontWeight: '700', 
              border: 'none', 
              borderRadius: '4px',
              color: '#fff' 
            }, 
            width: { lg: '1170px', xs: '350px' }, 
            backgroundColor: 'rgba(255, 255, 255, 0.1)', 
            borderRadius: '40px',
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.2)' },
              '&:hover fieldset': { borderColor: '#00D2FF' }, // Blue Glow on Hover
              '&.Mui-focused fieldset': { borderColor: '#FF2625' }, // Red Glow on Focus
            }
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button 
          className="search-btn" 
          sx={{ 
            bgcolor: '#FF2625', 
            color: '#fff', 
            textTransform: 'none', 
            width: { lg: '173px', xs: '80px' }, 
            height: '56px', 
            position: 'absolute', 
            right: '0px', 
            fontSize: { lg: '20px', xs: '14px' },
            /* Neon Red Button Glow */
            boxShadow: '0 0 15px #FF2625',
            '&:hover': {
                bgcolor: '#ff4d4d',
                boxShadow: '0 0 25px #FF2625'
            }
          }} 
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>

      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollbar 
          data={bodyParts} 
          bodyParts 
          setBodyPart={setBodyPart} 
          bodyPart={bodyPart} 
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;