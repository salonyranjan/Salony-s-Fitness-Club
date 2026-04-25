import React from 'react';
import { Stack } from '@mui/material';
import { InfinitySpin } from 'react-loader-spinner';

const Loader = () => (
  <Stack 
    direction="row" 
    justifyContent="center" 
    alignItems="center" 
    width="100%"
    py={5} // Adds some padding so the loader isn't cramped
  >
    {/* Note: In recent versions, InfinitySpin uses 'width' 
      and the color is often controlled via the 'color' prop 
    */}
    <InfinitySpin
      width="200"
      color="#FF2625" 
    />
  </Stack>
);

export default Loader;