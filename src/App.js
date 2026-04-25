import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => (
  <Box 
    sx={{ 
      width: { xl: '1488px' },
      /* THE FIX: Ensures absolute positioned images (Hero Banner) 
         aren't cut off at the top */
      overflowY: 'visible',
      position: 'relative',
      minHeight: '100vh',
      backgroundColor: '#080808' // Matches your --bg-black
    }} 
    width="100%" 
    m="auto"
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