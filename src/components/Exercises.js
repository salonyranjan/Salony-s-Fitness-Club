import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';
import Loader from './Loader';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  // Using 6 per page keeps the grid looking balanced and premium
  const [exercisesPerPage] = useState(6);

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=1000', exerciseOptions);
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=1000`, exerciseOptions);
      }

      // Safety check: ensure we are setting an array
      setExercises(Array.isArray(exercisesData) ? exercisesData : []);
      setCurrentPage(1);
    };

    fetchExercisesData();
  }, [bodyPart, setExercises]);

  // Pagination Logic
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  
  // Guard against non-array values to prevent map errors
  const currentExercises = Array.isArray(exercises) 
    ? exercises.slice(indexOfFirstExercise, indexOfLastExercise) 
    : [];

  const paginate = (event, value) => {
    setCurrentPage(value);
    // Scrolls back up to the "Showing Results" title
    window.scrollTo({ top: 1100, behavior: 'smooth' });
  };

  // Show loader while fetching
  if (!exercises?.length) return <Loader />;

  return (
    <Box id="exercises" sx={{ mt: { lg: '109px' } }} mt="50px" p="20px">
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ 
          fontSize: { lg: '44px', xs: '30px' },
          color: '#fff',
          textShadow: '0 0 10px rgba(255, 255, 255, 0.2)',
          mb: '46px',
          fontFamily: 'Josefin Sans'
        }}
      >
        Showing Results
      </Typography>

      <Stack
        direction="row"
        sx={{ 
          gap: { lg: '80px', xs: '40px' }, // Optimized gap for your 380px cards
          justifyContent: 'center'
        }}
        flexWrap="wrap"
      >
        {currentExercises.map((exercise, idx) => (
          // Use exercise.id as key for better React performance
          <ExerciseCard key={exercise.id || idx} exercise={exercise} />
        ))}
      </Stack>

      <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
        {exercises.length > exercisesPerPage && (
          <Pagination
            shape="rounded"
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
            /* Cyber-Neon Pagination Styling */
            sx={{
              '& .MuiPaginationItem-root': {
                color: '#fff',
                fontFamily: 'Josefin Sans',
                fontSize: '18px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transition: '0.3s all ease',
                '&:hover': {
                  backgroundColor: 'rgba(0, 210, 255, 0.2)',
                  borderColor: '#00D2FF',
                  boxShadow: '0 0 10px #00D2FF'
                },
                '&.Mui-selected': {
                  backgroundColor: '#FF2625 !important', 
                  color: '#fff',
                  fontWeight: 'bold',
                  boxShadow: '0 0 20px #FF2625',
                  borderColor: 'transparent'
                },
              },
            }}
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;