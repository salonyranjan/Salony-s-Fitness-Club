import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography, Box } from '@mui/material';

const ExerciseCard = ({ exercise }) => {
  const secureGifUrl = `https://exercisedb.p.rapidapi.com/image?exerciseId=${exercise.id}&resolution=360&rapidapi-key=${process.env.REACT_APP_RAPID_API_KEY}`;

  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      {/* 1. White Background wrapper for the GIF to keep it clean */}
      <Box sx={{ 
        background: '#fff', 
        borderRadius: '15px 15px 0 0', 
        p: '10px', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center' 
      }}>
        <img 
          src={secureGifUrl} 
          alt={exercise.name} 
          loading="lazy" 
          style={{ 
            width: '100%', 
            height: '280px', // Adjusted height for a more professional aspect ratio
            objectFit: 'contain'
          }} 
          onError={(e) => {
            if (e.target.src !== exercise.gifUrl) {
              e.target.src = exercise.gifUrl;
            }
          }}
        />
      </Box>

      {/* 2. Neon Tag Section */}
      <Stack direction="row" sx={{ mt: '20px', px: '15px' }} gap="15px">
        <Button sx={{ 
          color: '#fff', 
          background: '#FF2625', 
          fontSize: '12px', 
          borderRadius: '20px', 
          textTransform: 'capitalize',
          fontWeight: '600',
          boxShadow: '0 0 10px rgba(255, 38, 37, 0.4)',
          '&:hover': { background: '#ff4d4d' }
        }}>
          {exercise.bodyPart}
        </Button>
        <Button sx={{ 
          color: '#fff', 
          background: '#00D2FF', 
          fontSize: '12px', 
          borderRadius: '20px', 
          textTransform: 'capitalize',
          fontWeight: '600',
          boxShadow: '0 0 10px rgba(0, 210, 255, 0.4)',
          '&:hover': { background: '#33dbff' }
        }}>
          {exercise.target}
        </Button>
      </Stack>

      {/* 3. Typography with Neon Text-Shadow */}
      <Typography 
        sx={{ 
          fontSize: { lg: '22px', xs: '18px' },
          color: '#fff', 
          fontWeight: 'bold', 
          mt: '15px', 
          pb: '15px', 
          px: '20px', 
          textTransform: 'capitalize',
          fontFamily: 'Josefin Sans',
          textShadow: '0 0 5px rgba(255, 255, 255, 0.2)'
        }}
      >
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;