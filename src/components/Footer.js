import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack 
      gap="20px" 
      sx={{ alignItems: 'center' }} 
      flexWrap="wrap" 
      px="40px" 
      pt="24px"
    >
      {/* Branding Section */}
      <Stack direction="row" alignItems="center" gap="10px">
        <img src={Logo} alt="logo" style={{ width: '40px', height: '40px' }} />
        <Typography 
          variant="h6" 
          sx={{ fontSize: { lg: '24px', xs: '18px' } }} 
          fontWeight="bold" 
          color="#3A1212"
          fontFamily="Josefin Sans"
        >
          Salony's Fitness Club
        </Typography>
      </Stack>
    </Stack>
    
    <Typography 
      sx={{ fontSize: { lg: '18px', xs: '14px' } }} 
      mt="25px" 
      textAlign="center" 
      pb="40px"
      fontFamily="Josefin Sans"
      color="#3A1212"
    >
    <strong>Salony Ranjan</strong> © 2026 All Rights Reserved
    </Typography>
  </Box>
);

export default Footer;