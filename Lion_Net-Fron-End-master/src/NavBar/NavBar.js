import * as React from 'react';

// import { bgcolor } from '@mui/system';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

import Routes from './Routes.js';
import Search from './Search.js';

export default function NavBar({ component : Component }) {
  return (
    <>
      <Stack direction="row" spacing={2} divider={<Divider orientation="vertical" flexItem /> }
        sx={{
          mx: 'auto',
          p: 1,
          m: 2,
          textAlign: 'center',
          justifyContent: 'center',
        }}
      >
        <Routes />
        <Search />
      </Stack>
      <Component></Component>

    </>
  );
}