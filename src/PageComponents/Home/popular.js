import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SvgIcon from '@mui/material/SvgIcon';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import SportsFootballIcon from '@mui/icons-material/SportsFootball';
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';

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
    title: 'Tennis',
    icon: SportsTennisIcon,
  },
  {
    title: 'Soccer',
    icon: SportsSoccerIcon,
  },
];

const Popular = () => {
  return (
    <Box sx={{ backgroundColor: '#05285A', width: '20%', height: '100vh' }}>
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
          }}
        >
          Sports
        </Typography>
        {iconTitle.map(({ icon, title }) => (
          <Box
            sx={{
              display: 'flex',
              width: '50px',
              height: '30px',
              alignItems: 'start',
            }}
          >
            <SvgIcon
              component={icon}
              sx={{
                height: { md: '20px', lg: '40px', xl: '20px' },
                width: { md: '20px', lg: '40px', xl: '20px' },
                color: 'white',
                marginRight: '15px',
                display: {
                  xs: 'none',
                  sm: 'none',
                  md: 'none',
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
