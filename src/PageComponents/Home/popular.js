import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SvgIcon from '@mui/material/SvgIcon';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import SportsFootballIcon from '@mui/icons-material/SportsFootball';
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import SportsGolfIcon from '@mui/icons-material/SportsGolf';
import SportsHockeyIcon from '@mui/icons-material/SportsHockey';
import SportsMmaIcon from '@mui/icons-material/SportsMma';
import SportsMotorsportsIcon from '@mui/icons-material/SportsMotorsports';
import SportsRugbyIcon from '@mui/icons-material/SportsRugby';
import SportsVolleyballIcon from '@mui/icons-material/SportsVolleyball';

const iconTitle = [
  {
    title: 'NBA',
    icon: SportsBasketballIcon,
  },
  {
    title: 'NFL',
    icon: SportsFootballIcon,
  },
  {
    title: 'MLB',
    icon: SportsBaseballIcon,
  },
  {
    title: 'Wimbledon',
    icon: SportsTennisIcon,
  },
  {
    title: 'PL',
    icon: SportsSoccerIcon,
  },
  {
    title: 'ICC',
    icon: SportsCricketIcon,
  },
  {
    title: 'PGA',
    icon: SportsGolfIcon,
  },
  {
    title: 'NHL',
    icon: SportsHockeyIcon,
  },
  {
    title: 'UFC',
    icon: SportsMmaIcon,
  },
  {
    title: 'F1',
    icon: SportsMotorsportsIcon,
  },
  {
    title: 'NRL',
    icon: SportsRugbyIcon,
  },
  {
    title: 'NVA',
    icon: SportsVolleyballIcon,
  },
];

const Popular = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#05285A',
        display: { xl: 'flex', lg: 'flex', md: 'flex', sm: 'none', xs: 'none' },
        width: { xl: '21%', lg: '16%', md: '20%' },
        height: '315.2vh',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'end',
          justiyContent: 'center',
          flexDirection: 'column',
          width: '100%',
          paddingRight: '4em',
          marginTop: '15px',
        }}
      >
        <Typography
          sx={{
            color: 'white',
            fontSize: '16px',
            fontWeight: 'bold',
            marginBottom: '15px',
            width: '5em',
          }}
        >
          Sports
        </Typography>
        {iconTitle.map(({ icon, title }) => (
          <Box
            sx={{
              display: 'flex',
              width: '5em',
              height: '30px',
              alignItems: 'start',
            }}
          >
            <SvgIcon
              component={icon}
              sx={{
                height: '20px',
                width: '20px',
                color: 'white',
                marginRight: '.7em',
                display: {
                  xs: 'none',
                  sm: 'none',
                  md: 'inline',
                  lg: 'inline',
                },
              }}
            />{' '}
            <Typography sx={{ color: 'white' }}>{title}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Popular;
