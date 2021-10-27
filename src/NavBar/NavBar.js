import * as React from 'react';

// import { bgcolor } from '@mui/system';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';

import Routes from './Routes.js';
import Search from './Search.js';
import Footer from '../Footer/Footer.js';

const navHeader = {
  height: '60px',
  backgroundColor: '#CCCCC3',
  paddingTop: '15px',
  marginBottom: '-20px'
};

export default function NavBar({ component: Component }) {
  return (
    <>
      <Box sx={navHeader}>
        <Stack direction="row" spacing={2} divider={<Divider orientation="vertical" flexItem />}
          sx={{
            justifyContent: 'center',
          }}
        >
          <Routes />
          <Search />
        </Stack>
      </Box>
      <br/>
      <br/>
      <Box sx={{ backgroundColor: '#FFFFF4', marginTop: '0px' }}>
        <Box sx={{ width: '80%', margin: 'auto', minHeight: '800px' }}>
          <Component />
        </Box>
      </Box>

      <Footer />
    </>
  );
}