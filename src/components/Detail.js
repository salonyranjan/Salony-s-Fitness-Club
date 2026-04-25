import React from 'react';
import { Typography, Stack, Button, Box } from '@mui/material';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment, id } = exerciseDetail;

  const secureGifUrl = `https://exercisedb.p.rapidapi.com/image?exerciseId=${id}&resolution=360&rapidapi-key=${process.env.REACT_APP_RAPID_API_KEY}`;

  const extraDetail = [
    { icon: BodyPartImage, name: bodyPart, glow: '#FF2625' },
    { icon: TargetImage, name: target, glow: '#00D2FF' },
    { icon: EquipmentImage, name: equipment, glow: '#FF2625' },
  ];

  return (
    <Stack 
      direction={{ lg: 'row', xs: 'column' }} 
      sx={{ 
        p: { lg: '80px', xs: '20px' }, 
        alignItems: 'center', 
        justifyContent: 'center', 
        gap: { lg: '100px', xs: '40px' }, // Forces physical separation
        background: '#080808' 
      }}
    >
      {/* 1. IMAGE CONTAINER - Pinned to the Left */}
      <Box sx={{ 
        background: 'rgba(255, 255, 255, 0.03)', 
        borderRadius: '40px', 
        p: '20px', 
        border: '1px solid rgba(255, 255, 255, 0.08)',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.8)',
        width: { lg: '450px', xs: '100%' }, // Fixed width to prevent overlap
        flexShrink: 0 // Stops the image from being squashed
      }}>
        <img
          src={secureGifUrl}
          alt={name}
          loading="lazy"
          style={{ borderRadius: '25px', width: '100%', height: 'auto' }}
          onError={(e) => { if (e.target.src !== gifUrl) e.target.src = gifUrl; }}
        />
      </Box>

      {/* 2. TEXT CONTENT - Pinned to the Right */}
      <Stack sx={{ 
        alignItems: 'flex-start', 
        maxWidth: '600px', 
        textAlign: 'left' 
      }}>
        <Typography 
          variant="h2" 
          sx={{ 
            fontSize: { lg: '64px', xs: '32px' }, 
            color: '#fff', 
            fontWeight: 700, 
            textTransform: 'capitalize',
            mb: '25px',
            lineHeight: 1.2
          }}
        >
          {name}
        </Typography>
        
        <Typography sx={{ fontSize: { lg: '22px', xs: '18px' }, color: 'rgba(255, 255, 255, 0.6)', mb: '40px' }}>
          Exercises keep you strong. <span style={{ color: '#FF2625', fontWeight: 'bold' }}>{name}</span> is one
          of the best movements to target your <span style={{ color: '#00D2FF', fontWeight: 'bold' }}>{target}</span>. 
        </Typography>
        
        {/* Detail List */}
        <Stack direction="column" gap="30px">
          {extraDetail?.map((item, index) => (
            <Stack key={index} direction="row" gap="25px" alignItems="center">
              <Button 
                sx={{ 
                  background: 'rgba(255, 255, 255, 0.05)', 
                  borderRadius: '50%', 
                  width: '70px', 
                  height: '70px',
                  border: `1px solid ${item.glow}33`,
                  cursor: 'default'
                }}
              >
                <img 
                  src={item.icon} 
                  alt={item.name} 
                  style={{ width: '35px', height: '35px', filter: 'invert(1)' }} 
                />
              </Button>
              <Typography 
                textTransform="capitalize" 
                sx={{ fontSize: { lg: '24px', xs: '20px' }, color: '#fff', fontWeight: '500' }}
              >
                {item.name}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Detail;