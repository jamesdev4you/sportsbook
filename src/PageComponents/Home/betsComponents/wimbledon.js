import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SvgIcon from '@mui/material/SvgIcon';
import Link from '@mui/material/Link';
import SportsGolfIcon from '@mui/icons-material/SportsGolf';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Button from '@mui/material/Button';

const morePlayers = [
  {
    name: 'Guido Migliiozzi',
    odds: '+2800',
  },
  {
    name: 'Sebastian Soderberg',
    odds: '+3000',
  },
  {
    name: 'Wilco Nienaber',
    odds: '+3000',
  },
  {
    name: 'Louis de Jager',
    odds: '+3300',
  },
  {
    name: 'Paul Waring',
    odds: '+3300',
  },
  {
    name: 'Matthew Southgate',
    odds: '+3500',
  },
];

const players = [
  {
    name: 'Lous Oosthuizen',
    odds: '+700',
  },
  {
    name: 'Matthieu Pavon',
    odds: '+1400',
  },
  {
    name: 'Antonie Rozner',
    odds: '+1800',
  },
  {
    name: 'Laurie Canter',
    odds: '+1800',
  },
  {
    name: 'Marcel Siem',
    odds: '+2500',
  },
  {
    name: 'Jayden Schaper',
    odds: '+2500',
  },
];

const Wimbledon = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: '#ffffff',
        height: 'auto',
        borderRadius: '5px',
      }}
    >
      <Box
        sx={{
          width: '100%',
          backgroundColor: '#ffffff',
          height: '3em',
          borderBottom: '1px solid #C9D1DB',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'start',
          padding: '1em',
        }}
      >
        <SvgIcon
          component={SportsGolfIcon}
          sx={{
            height: { md: '20px', lg: '40px', xl: '25px' },
            width: { md: '20px', lg: '40px', xl: '25px' },
            color: 'green',
            marginRight: '.2em',
            display: 'inline',
          }}
        />
        <Typography
          variant='p'
          sx={{ fontFamily: 'Birds', fontWeight: 'bold' }}
        >
          PGA Tour 2024
        </Typography>
      </Box>
      <Box
        sx={{
          width: '100%',
          backgroundColor: '#F7FBFF',
          height: '2em',
          borderBottom: '1px solid #C9D1DB',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'start',
          padding: '1em',
        }}
      >
        <Box
          sx={{
            width: '40%',
            height: '2em',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'start',
          }}
        >
          <Typography sx={{ fontWeight: 'bold', fontSize: '11px' }}>
            Win Only
          </Typography>
        </Box>
      </Box>
      {players.map(({ name, odds }) => (
        <Box
          sx={{
            width: '100%',
            backgroundColor: '#FFFFFF',
            height: '4em',
            borderBottom: '1px solid #C9D1DB',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'start',
            flexDirection: 'row',
            paddingLeft: '1em',
            paddingRight: '1em',
          }}
        >
          <Link
            variant='p'
            sx={{
              fontFamily: 'Birds',
              textDecoration: 'none',
              fontSize: '14px',
              marginLeft: '5px',
              color: 'black',
              '&:hover': {
                cursor: 'pointer',
              },
            }}
          >
            {name}
          </Link>
          <Box
            sx={{
              width: '15%',
              backgroundColor: 'white',
              height: '55%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              border: '1px solid #2B90FF',
              borderRadius: '5px',
              marginLeft: 'auto',
              '&:hover': {
                backgroundColor: '#e0f0f5',
                cursor: 'pointer',
              },
            }}
          >
            <Typography
              sx={{
                fontSize: '11px',
                fontWeight: 'bold',
                color: 'blue',
              }}
            >
              {odds}
            </Typography>
          </Box>
        </Box>
      ))}
      <Box
        sx={{
          width: '100%',
          backgroundColor: '#ffffff',
          height: '3em',
          borderBottom: '1px solid #C9D1DB',
          display: isOpen ? 'flex' : 'none',
          alignItems: 'center',
          justifyContent: 'start',
          padding: '1em',
        }}
      >
        <SvgIcon
          component={SportsGolfIcon}
          sx={{
            height: { md: '20px', lg: '40px', xl: '25px' },
            width: { md: '20px', lg: '40px', xl: '25px' },
            color: 'green',
            marginRight: '.2em',
            display: 'inline',
          }}
        />
        <Typography
          variant='p'
          sx={{ fontFamily: 'Birds', fontWeight: 'bold' }}
        >
          More Player Odds
        </Typography>
        <Button
          onClick={handleToggle}
          sx={{
            marginLeft: 'auto',
            height: '2em',
            padding: 'none',
            width: '1px',
            color: 'black',
            minWidth: '30px',
            borderRadius: '50%',
          }}
        >
          {isOpen ? <ExpandMoreIcon /> : <KeyboardArrowRightIcon />}
        </Button>
      </Box>
      {!isOpen &&
        morePlayers.map(({ name, odds }) => (
          <Box
            sx={{
              width: '100%',
              backgroundColor: '#FFFFFF',
              height: '4em',
              borderBottom: '1px solid #C9D1DB',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'start',
              flexDirection: 'row',
              paddingLeft: '1em',
              paddingRight: '1em',
            }}
          >
            <Link
              variant='p'
              sx={{
                fontFamily: 'Birds',
                textDecoration: 'none',
                fontSize: '14px',
                marginLeft: '5px',
                color: 'black',
                '&:hover': {
                  cursor: 'pointer',
                },
              }}
            >
              {name}
            </Link>
            <Box
              sx={{
                width: '15%',
                backgroundColor: 'white',
                height: '55%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                border: '1px solid #2B90FF',
                borderRadius: '5px',
                marginLeft: 'auto',
                '&:hover': {
                  backgroundColor: '#e0f0f5',
                  cursor: 'pointer',
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: '11px',
                  fontWeight: 'bold',
                  color: 'blue',
                }}
              >
                {odds}
              </Typography>
            </Box>
          </Box>
        ))}
      <Box
        sx={{
          width: '100%',
          backgroundColor: '#ffffff',
          height: '3em',
          borderBottom: '1px solid #C9D1DB',
          display: isOpen ? 'none' : 'flex',
          alignItems: 'center',
          justifyContent: 'start',
          padding: '1em',
        }}
      >
        <Typography
          variant='p'
          sx={{ fontFamily: 'Birds', fontWeight: 'bold' }}
        >
          Less Player Odds
        </Typography>
        <Button
          onClick={handleToggle}
          sx={{
            marginLeft: 'auto',
            height: '2em',
            padding: 'none',
            width: '1px',
            color: 'black',
            minWidth: '30px',
            borderRadius: '50%',
          }}
        >
          {isOpen ? <ExpandMoreIcon /> : <KeyboardArrowRightIcon />}
        </Button>
      </Box>
    </Box>
  );
};

export default Wimbledon;
