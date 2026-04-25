import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography, Box } from '@mui/material';

const ExerciseCard = ({ exercise }) => {
  const secureGifUrl = `https://exercisedb.p.rapidapi.com/image?exerciseId=${exercise.id}&resolution=360&rapidapi-key=${process.env.REACT_APP_RAPID_API_KEY}`;

  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      {/* THE IMAGE BOX: Locked aspect ratio and contained scaling */}
      <Box sx={{ 
        background: '#fff', 
        borderRadius: '20px', 
        p: '15px', 
        m: '15px',
        height: '220px', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        overflow: 'hidden',
        boxShadow: 'inset 0 0 10px rgba(0,0,0,0.05)'
      }}>
        <img 
          src={secureGifUrl} 
          alt={exercise.name} 
          loading="lazy" 
          style={{ 
            maxWidth: '100%', 
            maxHeight: '100%', 
            objectFit: 'contain' // Prevents "popping out"
          }} 
          onError={(e) => { if (e.target.src !== exercise.gifUrl) e.target.src = exercise.gifUrl; }}
        />
      </Box>

      {/* TEXT CONTENT: Consistent Padding & Alignment */}
      <Box sx={{ px: '20px', pb: '25px' }}>
        <Stack direction="row" gap="10px" sx={{ mb: '15px' }}>
          <Button sx={{ 
            color: '#fff', background: 'var(--neon-red)', fontSize: '11px', borderRadius: '20px', 
            textTransform: 'capitalize', fontWeight: '700', px: '12px',
            boxShadow: '0 0 8px rgba(255, 38, 37, 0.4)'
          }}>
            {exercise.bodyPart}
          </Button>
          <Button sx={{ 
            color: '#fff', background: 'var(--neon-blue)', fontSize: '11px', borderRadius: '20px', 
            textTransform: 'capitalize', fontWeight: '700', px: '12px',
            boxShadow: '0 0 8px rgba(0, 210, 255, 0.4)'
          }}>
            {exercise.target}
          </Button>
        </Stack>

        <Typography 
          sx={{ 
            fontSize: '20px', color: '#fff', fontWeight: '800', textTransform: 'capitalize',
            fontFamily: 'Josefin Sans', lineHeight: '1.2',
            display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical',
            overflow: 'hidden', minHeight: '48px'
          }}
        >
          {exercise.name}
        </Typography>
      </Box>
    </Link>
  );
};

export default ExerciseCard;