import React from 'react';
import NavBar from '../NavBar/navbar';
import Box from '@mui/material/Box';
import Popular from './popular';
import Bets from './bets';
import HomeSlip from './homeSlip';

const Home = () => {
  return (
    <>
      <NavBar />
      <Box
        sx={{
          width: '100%',
          height: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'start',
          marginTop: '79px',
        }}
      >
        <Popular />
        <Bets />
        <HomeSlip />
      </Box>
    </>
  );
};

export default Home;
