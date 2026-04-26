import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo.png';

const Footer = () => (
  /* Change 1: Dark Glassmorphism background with Neon Top Border */
  <Box 
    mt="80px" 
    sx={{ 
      background: 'rgba(255, 255, 255, 0.03)', 
      backdropFilter: 'blur(10px)',
      borderTop: '1px solid rgba(255, 38, 37, 0.2)' 
    }}
  >
    <Stack 
      gap="20px" 
      sx={{ alignItems: 'center' }} 
      flexWrap="wrap" 
      px="40px" 
      pt="40px"
    >
      {/* Branding Section */}
      <Stack direction="row" alignItems="center" gap="15px">
        <img 
          src={Logo} 
          alt="logo" 
          style={{ 
            width: '40px', 
            height: '40px', 
            filter: 'drop-shadow(0 0 5px #71c9e3ff)' 
          }} 
        />
        <Typography 
          variant="h6" 
          sx={{ 
            fontSize: { lg: '28px', xs: '20px' },
            color: '#fff',
            textShadow: '0 0 10px rgba(255, 255, 255, 0.2)'
          }} 
          fontWeight="bold" 
          fontFamily="Josefin Sans"
        >
          Salony's Fitness Club
        </Typography>
      </Stack>
    </Stack>
    
    <Typography 
      sx={{ 
        fontSize: { lg: '16px', xs: '12px' },
        color: 'rgba(255, 255, 255, 0.5)', // Subtle grey-white
        letterSpacing: '2px'
      }} 
      mt="30px" 
      textAlign="center" 
      pb="40px"
      fontFamily="Josefin Sans"
      textTransform="uppercase"
    >
      Developed by <span style={{ color: '#00D2FF', fontWeight: 'bold' }}>Salony Ranjan</span> © 2026 
      <br /> 
      <span style={{ fontSize: '10px', opacity: 0.6 }}>Precision in Motion • Power in Progress</span>
    </Typography>
  </Box>
);

export default Footer;