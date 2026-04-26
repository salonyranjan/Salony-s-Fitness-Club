import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';
import Loader from './Loader';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6); // 3x2 Grid for premium look

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=1000', exerciseOptions);
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=1000`, exerciseOptions);
      }

      setExercises(Array.isArray(exercisesData) ? exercisesData : []);
      setCurrentPage(1);
    };

    fetchExercisesData();
  }, [bodyPart, setExercises]);

  // Pagination Logic
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = Array.isArray(exercises) 
    ? exercises.slice(indexOfFirstExercise, indexOfLastExercise) 
    : [];

  const paginate = (event, value) => {
    setCurrentPage(value);

    // FIX: Dynamic scroll to the top of the results section
    const resultsSection = document.getElementById('exercises');
    if (resultsSection) {
      resultsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!exercises?.length) return <Loader />;

  return (
    <Box id="exercises" sx={{ mt: { lg: '109px' } }} mt="50px" p="20px">
      {/* Colorful Animated Typography */}
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ 
          fontSize: { lg: '44px', xs: '30px' },
          mb: '46px',
          fontFamily: 'Josefin Sans',
          // THE FIX: Gradient Colorful Text
          background: 'linear-gradient(90deg, #FFFFFF 0%, #FF2625 50%, #00D2FF 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textShadow: '0 10px 20px rgba(0,0,0,0.3)',
          textAlign: { xs: 'center', lg: 'left' }
        }}
      >
        Showing Results
      </Typography>

      <Stack
        direction="row"
        sx={{ 
          gap: { lg: '80px', xs: '40px' }, 
          justifyContent: 'center'
        }}
        flexWrap="wrap"
      >
        {currentExercises.map((exercise, idx) => (
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
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                transition: '0.3s all ease',
                '&:hover': {
                  backgroundColor: 'rgba(0, 210, 255, 0.2)',
                  borderColor: '#00D2FF',
                  boxShadow: '0 0 15px #00D2FF'
                },
                '&.Mui-selected': {
                  backgroundColor: '#FF2625 !important', 
                  color: '#fff',
                  fontWeight: 'bold',
                  boxShadow: '0 0 25px rgba(255, 38, 37, 0.6)',
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