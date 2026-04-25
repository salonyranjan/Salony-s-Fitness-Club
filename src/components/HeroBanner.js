import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => (
  <Box 
    sx={{ 
      mt: { lg: '212px', xs: '70px' }, 
      ml: { sm: '50px' },
      /* Increased height to ensure image has room to "breathe" */
      minHeight: { lg: '1000px', xs: 'auto' },
      mb: { lg: '100px', xs: '40px' }
    }} 
    position="relative" 
    p="20px"
  >
    <Typography 
      color="#00D2FF" 
      fontWeight="600" 
      fontSize="26px" 
      sx={{ textShadow: '0 0 10px rgba(0, 210, 255, 0.3)' }}
    >
      Fitness Club
    </Typography>
    
    <Typography 
      fontWeight={700} 
      sx={{ 
        fontSize: { lg: '44px', xs: '40px' },
        color: '#fff',
        textShadow: '0 0 15px rgba(255, 38, 37, 0.4)',
        lineHeight: '1.2'
      }} 
      mb="23px" 
      mt="30px"
    >
      "Code Your Body, <br />
      Optimize Your Strength"
    </Typography>
    
    <Typography 
      fontSize="22px" 
      fontFamily="Josefin Sans" 
      lineHeight="35px" 
      mb={4} 
      sx={{ color: 'rgba(255, 255, 255, 0.7)' }}
    >
      Check out the most effective exercises <br /> personalized for you.
    </Typography>
    
    <Stack>
      <a href="#exercises" style={{
        textDecoration: 'none',
        width: '220px',
        textAlign: 'center',
        background: '#FF2625',
        padding: '14px',
        fontSize: '22px',
        textTransform: 'none',
        color: 'white',
        borderRadius: '4px',
        transition: '0.3s all ease-in-out',
        boxShadow: '0 0 20px rgba(255, 38, 37, 0.5)',
        fontWeight: '600'
      }}
      className="explore-btn"
      >
        Explore Exercises
      </a>
    </Stack>

    <Typography
      fontWeight={600}
      color="#FF2625"
      sx={{
        opacity: '0.1',
        display: { lg: 'block', xs: 'none' },
        fontSize: '200px',
        mt: '20px',
        userSelect: 'none',
        WebkitTextStroke: '1px #FF2625',
        color: 'transparent',
        position: 'absolute',
        bottom: '200px', 
        zIndex: 0
      }}
    >
      EXERCISE
    </Typography>

    {/* THE FIX: Absolute Positioning & Responsive Visibility */}
    <Box sx={{ 
      position: 'absolute', 
      right: '40px', 
      top: '-240px', /* Pulled up further to escape the "Search" overlap */
      display: { lg: 'block', xs: 'none' },
      zIndex: 10 /* High Z-Index to stay on top of everything */
    }}>
      <img 
        src={HeroBannerImage} 
        alt="hero-banner" 
        className="hero-banner-img" 
        style={{ 
          width: '650px', /* Made slightly larger for impact */
          height: 'auto',
          filter: 'drop-shadow(0 0 40px rgba(255, 38, 37, 0.3))' 
        }} 
      />
    </Box>
  </Box>
);

export default HeroBanner;