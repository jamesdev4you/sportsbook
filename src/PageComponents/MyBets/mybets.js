import React from 'react';
import Popular from '../Home/popular';
import HomeSlip from '../Home/homeSlip';
import NavBar from '../NavBar/navbar';
import Box from '@mui/material/Box';
import BetPage from './betpage';

const Mybets = () => {
  return (
    <>
      <NavBar />
      <Box
        sx={{
          width: '100%',
          height: 'auto',
          display: 'flex',
          alignItems: 'start',
          justifyContent: 'start',
          marginTop: '79px',
        }}
      >
        <Popular />
        <BetPage />
        <HomeSlip />
      </Box>
    </>
  );
};

export default Mybets;
