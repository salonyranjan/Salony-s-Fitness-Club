import React from 'react';
import { Typography, Box, Stack } from '@mui/material';
import Loader from './Loader';

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos?.length) return <Loader />;

  return (
    <Box sx={{ marginTop: { lg: '100px', xs: '20px' } }} p="20px">
      <Typography 
        sx={{ 
          fontSize: { lg: '44px', xs: '25px' },
          color: '#fff',
          textShadow: '0 0 10px rgba(255, 255, 255, 0.1)'
        }} 
        fontWeight={700} 
        mb="40px"
      >
        Watch <span style={{ color: '#FF2625', textTransform: 'capitalize', textShadow: '0 0 15px rgba(255, 38, 37, 0.4)' }}>{name}</span> exercise videos
      </Typography>

      <Stack 
        direction="row" // Forces row direction
        sx={{ 
          gap: { lg: '30px', xs: '20px' },
          overflowX: { xs: 'auto', lg: 'visible' }, // Allows horizontal scrolling on small screens
          pb: '10px'
        }} 
        justifyContent="space-between" 
        alignItems="flex-start"
      >
        {exerciseVideos?.slice(0, 3)?.map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
            style={{ 
              textDecoration: 'none',
              background: 'rgba(255, 255, 255, 0.03)',
              borderRadius: '20px',
              padding: '12px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              transition: '0.4s all ease-in-out',
              flex: 1, // Ensures all three boxes take equal space in the row
              minWidth: { xs: '280px', lg: '0' }, // Prevents cards from getting too squashed on mobile
              display: 'block'
            }}
          >
            <img 
              style={{ 
                borderRadius: '12px', 
                width: '100%', 
                height: 'auto', 
                aspectRatio: '16/9', // Maintains video thumbnail ratio
                objectFit: 'cover',
              }} 
              src={item.video.thumbnails[0].url} 
              alt={item.video.title} 
            />
            <Box mt="15px">
              <Typography 
                sx={{ 
                  fontSize: { lg: '18px', xs: '16px' },
                  display: '-webkit-box',
                  overflow: 'hidden',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: 2, 
                  color: '#fff' // Explicitly set white to override link default
                }} 
                fontWeight={600} 
                lineHeight="1.4"
              >
                {item.video.title}
              </Typography>
              <Typography 
                fontSize="13px" 
                color="#00D2FF" 
                mt="10px"
                fontWeight="500"
                sx={{ opacity: 0.7, textTransform: 'uppercase', letterSpacing: '1px' }}
              >
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;