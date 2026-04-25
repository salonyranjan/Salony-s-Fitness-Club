import React from 'react';
import { Link } from 'react-router-dom';
import { Stack, Typography } from '@mui/material';

import Logo from '../assets/images/Logo.png';

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    sx={{ 
      background: 'rgba(18, 18, 18, 0.95)',
      backdropFilter: 'blur(10px)',
      borderBottom: '2px solid #FF2625',
      boxShadow: '0px 4px 20px rgba(255, 38, 37, 0.5)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      padding: { sm: '15px 40px', xs: '10px 15px' },
      width: '100%',
      boxSizing: 'border-box',
      /* Force everything into one line */
      flexWrap: 'nowrap' 
    }}
  >
    {/* Branding Section */}
    <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
      <img 
        src={Logo} 
        alt="logo" 
        style={{ 
          width: '50px', 
          height: '50px', 
          marginRight: '15px',
          filter: 'drop-shadow(0 0 5px #00D2FF)' 
        }} 
      />
      <Typography 
        fontWeight="bold" 
        sx={{ 
          fontSize: { lg: '28px', xs: '16px' }, 
          color: '#fff',
          textShadow: '0 0 10px #00D2FF, 0 0 20px #00D2FF',
          fontFamily: 'Josefin Sans',
          whiteSpace: 'nowrap'
        }}
      >
        Salony's Fitness Club
      </Typography>
    </Link>

    {/* Navigation Links Section */}
    <Stack
      direction="row"
      gap={{ sm: '40px', xs: '20px' }} 
      alignItems="center"
      sx={{ 
        fontFamily: 'Alegreya',
        /* Pushes this stack to the far right side */
        marginLeft: 'auto', 
        /* Prevents the links from shrinking or overlapping */
        flexShrink: 0 
      }}
    >
      <Link 
        to="/" 
        style={{ 
          textDecoration: 'none', 
          color: '#fff', 
          fontSize: '22px',
          borderBottom: '2px solid #FF2625',
          textShadow: '0 0 5px #FF2625, 0 0 10px #FF2625',
          paddingBottom: '3px',
          whiteSpace: 'nowrap'
        }}
      >
        Home
      </Link>
      
      <a 
        href="/#exercises" 
        className="nav-link-exercises"
        style={{ 
          textDecoration: 'none', 
          color: '#fff',
          fontSize: '22px',
          transition: '0.3s',
          whiteSpace: 'nowrap'
        }}
      >
        Exercises
      </a>
    </Stack>
  </Stack>
);

export default Navbar;