import * as React from 'react';
import { Fragment } from 'react';

import ZoosBlog from './ZoosBlog.js';
import Carousel from './Carousel.js';

// import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
// import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';

function HomePage() {
  return (
    <Fragment>
      <Carousel />
      <ZoosBlog />
    </Fragment>
  );
}

export default HomePage;
