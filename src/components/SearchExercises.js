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

        window.scrollTo({ top: 1800, behavior: 'smooth' });
        setSearch('');
        setExercises(searchedExercises);
      }
    }
  };

  return (
    <Stack 
      id="exercises" // Anchor for the Hero Button
      alignItems="center" 
      mt="37px" 
      justifyContent="center" 
      p="20px"
    >
      <Typography 
        fontWeight={700} 
        sx={{ 
          fontSize: { lg: '44px', xs: '30px' },
          color: '#fff',
          textShadow: '0 0 15px rgba(255, 38, 37, 0.4)',
          fontFamily: 'Josefin Sans',
          lineHeight: '1.5' // Prevents text from being cut off vertically
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
            input: { 
              fontWeight: '700', 
              border: 'none', 
              borderRadius: '4px',
              color: '#fff',
              fontFamily: 'Josefin Sans'
            }, 
            width: { lg: '1170px', xs: '350px' }, 
            backgroundColor: 'rgba(255, 255, 255, 0.05)', 
            borderRadius: '40px',
            backdropFilter: 'blur(10px)',
            '& .MuiOutlinedInput-root': {
              borderRadius: '40px',
              '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.1)' },
              '&:hover fieldset': { borderColor: '#00D2FF' }, 
              '&.Mui-focused fieldset': { borderColor: '#FF2625' }, 
            }
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises (e.g. Lats, Cable, Chest)"
          type="text"
        />
        <Button 
          className="search-btn" 
          sx={{ 
            bgcolor: '#FF2625', 
            color: '#fff', 
            textTransform: 'uppercase', 
            width: { lg: '173px', xs: '80px' }, 
            height: '56px', 
            position: 'absolute', 
            right: '0px', 
            borderRadius: '0 40px 40px 0', 
            fontSize: { lg: '20px', xs: '14px' },
            boxShadow: '0 0 15px rgba(255, 38, 37, 0.5)',
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