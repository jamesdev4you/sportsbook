import React from 'react';
import Box from '@mui/material/Box';
import PopularScroll from './betsComponents/popularScroll';
import Parlay from './betsComponents/parlay';
import NBA from './betsComponents/nba';

const Bets = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#EAF0F6',
        width: '40%',
        height: 'auto',
        display: 'flex',
        padding: '2em',
        alignItems: 'center',
        justifyContent: 'start',
        flexDirection: 'column',
        gap: '1em',
      }}
    >
      <PopularScroll />
      <Parlay />
      <NBA />
    </Box>
  );
};

export default Bets;
