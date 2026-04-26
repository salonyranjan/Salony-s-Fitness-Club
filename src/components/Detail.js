import React from 'react';
import { Typography, Stack, Button, Box } from '@mui/material';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment, id } = exerciseDetail;

  // Uses the 360 resolution for faster loading and better fitting
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
        gap: { lg: '100px', xs: '40px' },
        background: '#080808'
      }}
    >
      {/* 1. IMAGE CONTAINER - THE FIX: Fixed Height & Containment */}
      <Box
        sx={{
          background: '#fff',
          borderRadius: '40px',
          p: '20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.8), 0 0 20px rgba(255, 38, 37, 0.1)',
          width: { lg: '550px', xs: '100%' },
          height: { lg: '550px', xs: '350px' },
          flexShrink: 0,
          overflow: 'hidden'
        }}
      >
        <img
          src={secureGifUrl}
          alt={name}
          loading="lazy"
          style={{
            borderRadius: '25px',
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'contain'
          }}
          onError={(e) => {
            if (e.target.src !== gifUrl) e.target.src = gifUrl;
          }}
        />
      </Box>

      {/* 2. TEXT CONTENT */}
      <Stack
        sx={{
          alignItems: 'flex-start',
          maxWidth: '600px',
          textAlign: 'left'
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: { lg: '64px', xs: '32px' },
            color: '#fff',
            fontWeight: 800,
            textTransform: 'capitalize',
            mb: '25px',
            lineHeight: 1.1,
            fontFamily: 'Josefin Sans',
            textShadow: '0 0 10px rgba(255,255,255,0.1)'
          }}
        >
          {name}
        </Typography>

        <Typography
          sx={{
            fontSize: { lg: '22px', xs: '18px' },
            color: 'rgba(255, 255, 255, 0.6)',
            mb: '40px',
            fontFamily: 'Josefin Sans'
          }}
        >
          Workouts fuel the soul. <span style={{ color: '#FF2625', fontWeight: 'bold', textTransform: 'capitalize' }}>{name}</span> is
          arguably one of the best movements to isolate your <span style={{ color: '#00D2FF', fontWeight: 'bold', textTransform: 'capitalize' }}>{target}</span>.
          Perfecting this form is key to your growth.
        </Typography>

        {/* Detail List */}
        <Stack direction="column" gap="30px">
          {extraDetail?.map((item, index) => (
            <Stack key={index} direction="row" gap="25px" alignItems="center">
              <Button
                sx={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '50%',
                  width: '80px',
                  height: '80px',
                  border: `1px solid ${item.glow}44`,
                  boxShadow: `0 0 15px ${item.glow}22`,
                  cursor: 'default'
                }}
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  style={{ width: '40px', height: '40px' }}
                />
              </Button>
              <Typography
                textTransform="capitalize"
                sx={{
                  fontSize: { lg: '24px', xs: '20px' },
                  color: '#fff',
                  fontWeight: '600',
                  fontFamily: 'Josefin Sans'
                }}
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