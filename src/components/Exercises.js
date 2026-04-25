import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';
import Loader from './Loader';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=1000', exerciseOptions);
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=1000`, exerciseOptions);
      }

      setExercises(exercisesData);
      setCurrentPage(1);
    };

    fetchExercisesData();
  }, [bodyPart, setExercises]);

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  
  const currentExercises = Array.isArray(exercises) 
    ? exercises.slice(indexOfFirstExercise, indexOfLastExercise) 
    : [];

  const paginate = (event, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };

  if (!currentExercises.length && exercises.length === 0) return <Loader />;

  return (
    <Box id="exercises" sx={{ mt: { lg: '109px' } }} mt="50px" p="20px">
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ 
          fontSize: { lg: '44px', xs: '30px' },
          color: '#fff',
          textShadow: '0 0 10px rgba(255, 255, 255, 0.2)',
          mb: '46px'
        }}
      >
        Showing Results
      </Typography>

      <Stack
        direction="row"
        sx={{ gap: { lg: '107px', xs: '50px' } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map((exercise, idx) => (
          <ExerciseCard key={idx} exercise={exercise} />
        ))}
      </Stack>

      <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
        {exercises.length > exercisesPerPage && (
          <Pagination
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
            /* Professional Neon Styling for Pagination */
            sx={{
              '& .MuiPaginationItem-root': {
                color: '#fff', // White text for page numbers
                fontFamily: 'Josefin Sans',
                fontSize: '18px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                '&:hover': {
                  backgroundColor: 'rgba(0, 210, 255, 0.1)',
                  borderColor: '#00D2FF',
                },
                '&.Mui-selected': {
                  backgroundColor: '#FF2625 !important', // Neon Red for active page
                  color: '#fff',
                  boxShadow: '0 0 15px #FF2625',
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