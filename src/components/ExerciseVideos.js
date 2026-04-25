import React from 'react';
import { Typography, Box, Stack } from '@mui/material';
import Loader from './Loader';

const ExerciseVideos = ({ exerciseVideos, name }) => {
  // If data is still loading, show the loader
  if (!exerciseVideos?.length) return <Loader />;

  return (
    <Box sx={{ marginTop: { lg: '203px', xs: '20px' } }} p="20px">
      <Typography sx={{ fontSize: { lg: '44px', xs: '25px' } }} fontWeight={700} color="#000" mb="33px">
        Watch <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>{name}</span> exercise videos
      </Typography>
      <Stack 
        sx={{ 
          flexDirection: { lg: 'row' }, 
          gap: { lg: '110px', xs: '0px' } 
        }} 
        justifyContent="flex-start" 
        flexWrap="wrap" 
        alignItems="center"
      >
        {/* We take the first 3-6 videos for a clean layout */}
        {exerciseVideos?.slice(0, 3)?.map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <img 
              style={{ borderTopLeftRadius: '20px', width: '100%', objectFit: 'cover' }} 
              src={item.video.thumbnails[0].url} 
              alt={item.video.title} 
            />
            <Box mt="15px">
              <Typography 
                sx={{ fontSize: { lg: '24px', xs: '18px' } }} 
                fontWeight={600} 
                color="#000"
                lineHeight="1.2"
              >
                {item.video.title.length > 50 
                  ? `${item.video.title.substring(0, 50)}...` 
                  : item.video.title}
              </Typography>
              <Typography fontSize="14px" color="#4F4C4C" mt="5px">
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