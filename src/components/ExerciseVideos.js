import React from 'react';
import { Typography, Box, Stack } from '@mui/material';
import Loader from './Loader';

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos?.length) return <Loader />;

  return (
    <Box sx={{ marginTop: { lg: '203px', xs: '20px' } }} p="20px">
      {/* Title with Neon Glow */}
      <Typography 
        sx={{ 
          fontSize: { lg: '44px', xs: '25px' },
          color: '#fff',
          textShadow: '0 0 10px rgba(255, 255, 255, 0.2)'
        }} 
        fontWeight={700} 
        mb="33px"
      >
        Watch <span style={{ color: '#FF2625', textTransform: 'capitalize', textShadow: '0 0 10px #FF2625' }}>{name}</span> exercise videos
      </Typography>

      <Stack 
        sx={{ 
          flexDirection: { lg: 'row' }, 
          gap: { lg: '110px', xs: '30px' } 
        }} 
        justifyContent="flex-start" 
        flexWrap="wrap" 
        alignItems="center"
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
              padding: '10px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              transition: '0.3s all ease-in-out',
              maxWidth: '387px'
            }}
          >
            <img 
              style={{ 
                borderRadius: '15px', 
                width: '100%', 
                objectFit: 'cover',
                boxShadow: '0 4px 15px rgba(0,0,0,0.5)'
              }} 
              src={item.video.thumbnails[0].url} 
              alt={item.video.title} 
            />
            <Box mt="15px" ml="5px">
              <Typography 
                sx={{ fontSize: { lg: '22px', xs: '18px' } }} 
                fontWeight={600} 
                color="#fff" // Clean white for titles
                lineHeight="1.2"
              >
                {item.video.title.length > 50 
                  ? `${item.video.title.substring(0, 50)}...` 
                  : item.video.title}
              </Typography>
              <Typography 
                fontSize="14px" 
                color="#00D2FF" // Neon Blue for channel name
                mt="8px"
                fontWeight="500"
                sx={{ opacity: 0.8 }}
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