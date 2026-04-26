import React from 'react';
import { Stack, Box, Typography } from '@mui/material';
import { InfinitySpin } from 'react-loader-spinner';

const Loader = () => (
  <Stack
    direction="column"
    justifyContent="center"
    alignItems="center"
    width="100%"
    sx={{
      minHeight: '400px',
      background: 'transparent'
    }}
  >
    {/* Box wrapper to add a professional neon glow to the spinner */}
    <Box
      sx={{
        filter: 'drop-shadow(0 0 15px rgba(255, 38, 37, 0.6))',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <InfinitySpin
        width="200"
        color="#FF2625"
      />

      {/* Professional Tech-Text */}
      <Typography
        sx={{
          fontSize: '14px',
          color: '#00D2FF',
          fontWeight: '600',
          letterSpacing: '4px',
          textTransform: 'uppercase',
          mt: '-20px',
          textShadow: '0 0 10px #00D2FF',
          animation: 'pulse 1.5s infinite alternate'
        }}
      >
        Initializing...
      </Typography>
    </Box>
  </Stack>
);

export default Loader;