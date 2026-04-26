import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => (
  <Box
    sx={{
      mt: { lg: '150px', xs: '70px' },
      ml: { xl: '100px', lg: '50px', xs: '20px' },
      position: 'relative'
    }}
    p="20px"
    zIndex={1}
  >
    {/* Top Accent Title */}
    <Typography 
      color="#FF2625" 
      fontWeight="600" 
      fontSize="26px"
      sx={{ 
        letterSpacing: '2px', 
        textTransform: 'uppercase', 
        opacity: 0.9,
        fontFamily: 'Josefin Sans'
      }}
    >
      Salony&apos;s Fitness Club
    </Typography>

    {/* Main Slogan with Correct Quotes */}
    <Typography
      fontWeight={700}
      sx={{
        fontSize: { lg: '64px', xs: '40px' },
        color: '#fff',
        lineHeight: '1.2',
        textShadow: '0 0 15px rgba(255, 255, 255, 0.1)',
        /* Limits text width so it stays on the left and doesn't hit the model */
        maxWidth: { lg: '600px', xs: '100%' }
      }}
      mb="23px"
      mt="30px"
    >
      &ldquo;Code Your Body, <br />
      Optimize Your Strength !&rdquo;
    </Typography>

    {/* Sub-description */}
    <Typography
      fontSize="22px"
      fontFamily="Alegreya"
      lineHeight="35px"
      mb={5}
      sx={{ 
        color: '#fff', 
        opacity: 0.8, 
        maxWidth: '500px' 
      }}
    >
      Check out the most effective exercises personalized to you
    </Typography>

    {/* Action Button */}
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

    {/* Banner Image with Responsive Styling */}
    <img
      src={HeroBannerImage}
      alt="hero-banner"
      className="hero-banner-img"
      style={{
        position: 'absolute',
        right: '0px',
        top: '0px',
        /* Pulls image up into the header area for a unified look */
        marginTop: '-160px',
        zIndex: -1,
        width: '750px',
        height: 'auto',
        pointerEvents: 'none'
      }}
    />
  </Box>
);

export default HeroBanner;
