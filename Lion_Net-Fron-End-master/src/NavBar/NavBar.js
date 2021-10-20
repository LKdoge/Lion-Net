import * as React from 'react';

// import { bgcolor } from '@mui/system';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';

import Routes from './Routes.js';
import Search from './Search.js';
import Footer from '../Footer/Footer.js';

export default function NavBar({ component : Component }) {
  return (
    <>
      <Box sx={{
          height: '80px',
          backgroundColor: '#005E42',
      }}>
        <Stack direction="row" spacing={2} divider={<Divider orientation="vertical" flexItem /> }
          sx={{
            justifyContent : 'center',
          }}
        >
          <Routes />
          <Search />
        </Stack>
      </Box>
      <Component />
      <Footer />
    </>
  );
}