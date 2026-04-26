import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => (
  /* THE FIX: Removed width="400px" and added overflow control */
  <Box
    sx={{
      width: { xl: '1488px' },
      margin: 'auto',
      position: 'relative',
      /* Allows your absolute-positioned banner image to show up */
      overflow: 'visible'
    }}
    width="100%"
  >
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exercise/:id" element={<ExerciseDetail />} />
    </Routes>
    <Footer />
  </Box>
);

export default App;