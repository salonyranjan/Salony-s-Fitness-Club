import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={{
      /* Change 1: Dark Glassmorphism Background */
      background: bodyPart === item ? '#1a1a1a' : 'rgba(255, 255, 255, 0.05)', 
      backdropFilter: 'blur(10px)',
      borderBottomLeftRadius: '20px',
      width: '270px',
      height: '282px',
      cursor: 'pointer',
      gap: '47px',
      /* Change 2: Neon Borders and Glows */
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderTop: bodyPart === item ? '4px solid #FF2625' : '1px solid rgba(255, 255, 255, 0.1)',
      boxShadow: bodyPart === item ? '0 0 20px rgba(255, 38, 37, 0.5)' : 'none',
      transition: 'all 0.3s ease-in-out',
      '&:hover': {
        background: '#1a1a1a',
        borderTop: '4px solid #00D2FF',
        boxShadow: '0 0 20px rgba(0, 210, 255, 0.5)',
        transform: 'scale(1.03)'
      }
    }}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}
  >
    {/* Change 3: Invert Icon color to make it visible on dark bg and add glow */}
    <img 
      src={Icon} 
      alt="dumbbell" 
      style={{ 
        width: '40px', 
        height: '40px', 
        filter: 'invert(1) drop-shadow(0 0 5px #FF2625)' 
      }} 
    />
    
    {/* Change 4: Typography color to White with Neon Shadow */}
    <Typography
      fontSize="24px"
      fontWeight="bold"
      fontFamily="Alegreya"
      color="#fff" 
      textTransform="capitalize"
      sx={{
        textShadow: bodyPart === item ? '0 0 10px #FF2625' : 'none'
      }}
    >
      {item}
    </Typography>
  </Stack>
);

export default BodyPart;