import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => (
  <Box
    sx={{
      /* Adjusted margins for a wider, more balanced flow */
      mt: { lg: '150px', xs: '70px' },
      ml: { xl: '100px', lg: '50px', xs: '20px' }
    }}
    position="relative"
    p="20px"
    zIndex={1}
  >
    <Typography 
      color="#FF2625" 
      fontWeight="600" 
      fontSize="26px"
      sx={{ 
        letterSpacing: '2px', 
        textTransform: 'uppercase', 
        opacity: 0.9 
      }}
    >
      Salony&apos;s Fitness Club
    </Typography>

    <Typography
      fontWeight={700}
      sx={{
        fontSize: { lg: '64px', xs: '40px' },
        color: '#fff',
        lineHeight: '1.2',
        textShadow: '0 0 15px rgba(255, 255, 255, 0.1)'
      }}
      mb="23px"
      mt="30px"
    >
      &quot;Code Your Body, <br />
      Optimize Your Strength !&quot;
    </Typography>

    <Typography
      fontSize="22px"
      fontFamily="Alegreya"
      lineHeight="35px"
      mb={5}
      sx={{ color: '#fff', opacity: 0.8, maxWidth: '500px' }}
    >
      Check out the most effective exercises personalized to you
    </Typography>

    <Button
      variant="contained"
      href="#exercises"
      sx={{
        backgroundColor: '#FF2625',
        padding: '14px 30px',
        fontSize: '22px',
        textTransform: 'none',
        color: 'white',
        borderRadius: '4px',
        mb: '100px',
        transition: '0.3s',
        '&:hover': {
          backgroundColor: '#cc1f1e',
          boxShadow: '0 0 20px rgba(255, 38, 37, 0.5)'
        }
      }}
    >
      Explore Exercises
    </Button>

    <img
      src={HeroBannerImage}
      alt="hero-banner"
      className="hero-banner-img"
    />
  </Box>
);

export default HeroBanner;
