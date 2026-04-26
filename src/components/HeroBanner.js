import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => (
  <Box
    sx={{
      mt: { lg: '212px', xs: '70px' },
      ml: { sm: '50px' }
    }}
    position="relative"
    p="20px"
    zIndex={1}
  >
    <Typography color="rgba(255, 255, 255, 0.6)" fontWeight="600" fontSize="26px">
      Salony&apos;s Fitness Club
    </Typography>

    <Typography
      fontWeight={700}
      sx={{
        fontSize: { lg: '64px', xs: '40px' },
        color: '#fff',
        lineHeight: '1.2'
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
      sx={{ color: '#fff', opacity: 0.8 }}
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
        mb: '100px'
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