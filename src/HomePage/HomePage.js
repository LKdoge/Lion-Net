import * as React from 'react';
import Box from '@mui/material/Box';

import ZoosBlog from './ZoosBlog.js';
import Carousel from './Carousel.js';
import Schedule from './Schedule.js';

// import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
// import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';

function HomePage() {
  return (
    <Box sx={{ width: '80%', margin: 'auto'}}>
      <Carousel />
      <ZoosBlog />
      <Schedule />
    </Box>
  );
}

export default HomePage;
