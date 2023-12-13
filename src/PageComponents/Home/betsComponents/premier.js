import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SvgIcon from '@mui/material/SvgIcon';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import Link from '@mui/material/Link';
import Watford from '../../../assets/PremierWatford.png';
import Brentford from '../../../assets/PremierBrentford.png';
import Arsenal from '../../../assets/PremierArsenal.png';
import Brighton from '../../../assets/PremierBrighton.png';
import Chelsea from '../../../assets/PremierChelsea.png';
import Liverpool from '../../../assets/PremierLiverpool.png';
import City from '../../../assets/PremierCity.png';
import United from '../../../assets/PremierUnited.png';
import Wolver from '../../../assets/PremierWolver.png';
import Totten from '../../../assets/PremierTottenham.png';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const teams = [
  {
    title1: 'Watford',
    logo: Watford,
    title2: 'Brentford',
    logo2: Brentford,
    home: '-150',
    tie: '-110',
    away: '+140',
  },
  {
    title1: 'Arsenal',
    logo: Arsenal,
    title2: 'Brighton',
    logo2: Brighton,
    home: '-250',
    tie: '-310',
    away: '+340',
  },
  {
    title1: 'Chelsea',
    logo: Chelsea,
    title2: 'Liverpool',
    logo2: Liverpool,
    home: '+850',
    tie: '+110',
    away: '-260',
  },
  {
    title1: 'Man. City',
    logo: City,
    title2: 'Man. Uni.',
    logo2: United,
    home: '+450',
    tie: '+210',
    away: '-100',
  },
  {
    title1: 'Wolverhampton',
    logo: Wolver,
    title2: 'Tottentam',
    logo2: Totten,
    home: '+350',
    tie: '+310',
    away: '-140',
  },
];

const Premier = () => {
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
          component={SportsSoccerIcon}
          sx={{
            height: { md: '20px', lg: '40px', xl: '25px' },
            width: { md: '20px', lg: '40px', xl: '25px' },
            color: 'skyblue',
            marginRight: '.2em',
            display: 'inline',
          }}
        />
        <Typography
          variant='p'
          sx={{ fontFamily: 'Birds', fontWeight: 'bold' }}
        >
          Premier Odds
        </Typography>
        <Link
          variant='p'
          sx={{
            fontFamily: 'Birds',
            textDecoration: 'none',
            marginLeft: 'auto',
            '&:hover': {
              cursor: 'pointer',
            },
          }}
        >
          More Soccer
        </Link>
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
            English Premier League
          </Typography>
        </Box>
        <Box
          sx={{
            width: '60%',
            height: '2em',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}
        >
          <Typography
            sx={{ fontWeight: 'light', fontSize: '12px', paddingRight: '5px' }}
          >
            HOME
          </Typography>
          <Typography sx={{ fontWeight: 'light', fontSize: '12px' }}>
            TIE
          </Typography>
          <Typography sx={{ fontWeight: 'light', fontSize: '12px' }}>
            AWAY
          </Typography>
        </Box>
      </Box>
      {teams.map(({ title1, logo, title2, logo2, home, tie, away }) => (
        <Box
          sx={{
            width: '100%',
            backgroundColor: '#FFFFFF',
            height: '8em',
            borderBottom: '1px solid #C9D1DB',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'start',
            flexDirection: 'column',
            paddingLeft: '1em',
            paddingRight: '1em',
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: '80%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'start',
            }}
          >
            <Box
              sx={{
                width: '40%',
                height: '90%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'start',
                flexDirection: 'column',
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: '40%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'start',
                }}
              >
                <Box
                  sx={{
                    backgroundImage: `url(${logo})`,
                    height: '32px',
                    width: '32px',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                  }}
                />
                <Link
                  variant='p'
                  sx={{
                    fontFamily: 'Birds',
                    textDecoration: 'none',
                    fontSize: '11px',
                    marginLeft: '5px',
                    '&:hover': {
                      cursor: 'pointer',
                    },
                  }}
                >
                  {title1}
                </Link>
              </Box>
              <Box
                sx={{
                  width: '100%',
                  height: '20%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'start',
                }}
              >
                <Typography
                  sx={{
                    fontFamily: 'Birds',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    fontSize: '11px',
                    marginLeft: '5px',
                    color: '#C9D1DB',
                  }}
                >
                  VS
                </Typography>
                <Box
                  sx={{
                    marginLeft: '2px',
                    width: '90%',
                    height: '.5px',
                    backgroundColor: '#C9D1DB',
                  }}
                />
              </Box>
              <Box
                sx={{
                  width: '100%',
                  height: '40%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'start',
                }}
              >
                <Box
                  sx={{
                    backgroundImage: `url(${logo2})`,
                    height: '28px',
                    width: '28px',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                  }}
                />
                <Link
                  variant='p'
                  sx={{
                    fontFamily: 'Birds',
                    textDecoration: 'none',
                    fontSize: '11px',
                    marginLeft: '5px',
                    '&:hover': {
                      cursor: 'pointer',
                    },
                  }}
                >
                  {title2}
                </Link>
              </Box>
            </Box>
            <Box
              sx={{
                width: '60%',
                height: '90%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'start',
                flexDirection: 'column',
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingLeft: '.6em',
                }}
              >
                <Box
                  sx={{
                    width: '30%',
                    backgroundColor: 'white',
                    height: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    border: '1px solid #2B90FF',
                    borderRadius: '5px',
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
                    {home}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: '30%',
                    backgroundColor: 'white',
                    height: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    border: '1px solid #2B90FF',
                    borderRadius: '5px',
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
                    {tie}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: '30%',
                    backgroundColor: 'white',
                    height: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    border: '1px solid #2B90FF',
                    borderRadius: '5px',
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
                    {away}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              width: '100%',
              height: '10%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'start',
            }}
          >
            <SvgIcon
              component={LocalAtmIcon}
              sx={{
                height: { md: '20px', lg: '40px', xl: '20px' },
                width: { md: '20px', lg: '40px', xl: '20px' },
                color: 'green',
                marginRight: '.2em',
                display: 'inline',
              }}
            />
            <Typography
              variant='p'
              sx={{ fontFamily: 'Birds', fontSize: '11px' }}
            >
              7:10pm
            </Typography>
            <Link
              variant='p'
              sx={{
                fontFamily: 'Birds',
                textDecoration: 'none',
                marginLeft: 'auto',
                fontSize: '11px',
                '&:hover': {
                  cursor: 'pointer',
                },
              }}
            >
              More Wages
            </Link>
          </Box>
        </Box>
      ))}
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
        <Typography
          variant='p'
          sx={{ fontFamily: 'Birds', fontWeight: 'bold' }}
        >
          Score +4 Parlay Team Builder
        </Typography>
        <Button
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
          <ExpandMoreIcon />
        </Button>
      </Box>
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
        <Typography
          variant='p'
          sx={{ fontFamily: 'Birds', fontWeight: 'bold' }}
        >
          Week 10+ Game Parlay
        </Typography>
        <Button
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
          <ExpandMoreIcon />
        </Button>
      </Box>
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
        <Typography
          variant='p'
          sx={{ fontFamily: 'Birds', fontWeight: 'bold' }}
        >
          Parlay Your Favorite Players
        </Typography>
        <Button
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
          <ExpandMoreIcon />
        </Button>
      </Box>
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
        <Link
          variant='p'
          sx={{
            fontFamily: 'Birds',
            textDecoration: 'none',
            fontSize: '14px',
            '&:hover': {
              cursor: 'pointer',
            },
          }}
        >
          More Soccer
        </Link>
        <Button
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
          <KeyboardArrowRightIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default Premier;
