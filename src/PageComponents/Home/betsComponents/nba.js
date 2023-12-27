import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SvgIcon from '@mui/material/SvgIcon';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import Link from '@mui/material/Link';
import Raptors from '../../../assets/NBARAPTORS.png';
import Hornets from '../../../assets/NBAHORNETS.png';
import Pistons from '../../../assets/NBAPISTONS.png';
import Magic from '../../../assets/NBAMAGIC.png';
import Hawks from '../../../assets/NBAHAWKS.png';
import Phil from '../../../assets/NBA76.png';
import Wizards from '../../../assets/NBAWIZARDS.png';
import Pacers from '../../../assets/NBAPACERS.png';
import Knicks from '../../../assets/NBAKNICKS.png';
import Nugget from '../../../assets/NBANUGGET.png';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import logooo from '../../../assets/NBALOGO.png';

const teams = [
  {
    title1: 'Toronto Raptors',
    logo: Raptors,
    title2: 'Charlotte Hornets',
    logo2: Hornets,
    spread1a: '-5.5',
    spread1b: '-112',
    money1: '-200',
    total1a: 'O 222',
    total1b: '-110',
    spread2a: '+5.5',
    spread2b: '+108',
    money2: '+184',
    total2a: 'U 222',
    total2b: '-110',
  },
  {
    title1: 'Detroit Pistons',
    logo: Pistons,
    title2: 'Orlando Magic',
    logo2: Magic,
    spread1a: '+11',
    spread1b: '-112',
    money1: '+420',
    total1a: 'O 228.5',
    total1b: '-112',
    spread2a: '-11',
    spread2b: '-108',
    money2: '-560',
    total2a: 'U 228.5',
    total2b: '-108',
  },
  {
    title1: 'Atlanta Hawks',
    logo: Hawks,
    title2: 'Philadelphia 76ers',
    logo2: Phil,
    spread1a: '+9',
    spread1b: '-110',
    money1: '+350',
    total1a: 'O 239',
    total1b: '-110',
    spread2a: '-9.5',
    spread2b: '-112',
    money2: '-450',
    total2a: 'U 239',
    total2b: '-110',
  },
  {
    title1: 'Washington Wizards',
    logo: Wizards,
    title2: 'Indiana Pacers',
    logo2: Pacers,
    spread1a: '+9.5',
    spread1b: '-108',
    money1: '+350',
    total1a: 'O 239',
    total1b: '-110',
    spread2a: '-9.5',
    spread2b: '-112',
    money2: '-450',
    total2a: 'U 239',
    total2b: '-110',
  },
  {
    title1: 'New York Knicks',
    logo: Knicks,
    title2: 'Indiana Pacers',
    logo2: Nugget,
    spread1a: '+8',
    spread1b: '-112',
    money1: '+240',
    total1a: 'O 220.5',
    total1b: '-112',
    spread2a: '-8',
    spread2b: '-108',
    money2: '-295',
    total2a: 'U 220.5',
    total2b: '-108',
  },
];

const NBA = () => {
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
        <Box
          
          sx={{
            backgroundImage: `url(${logooo})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: 'center',
            backgroundSize: "contain",
            height: {xs: '30px', sm: '20px', md: '20px', lg: '30px', xl: '25px' },
            width: { xs: '30px', sm: '20px', md: '20px', lg: '40px', xl: '25px' },
            color: 'brown',
            marginRight: '1em',
            display: 'inline',
          }}
        />
        <Typography
          variant='p'
          sx={{ fontFamily: 'Birds', fontWeight: 'bold' }}
        >
          NBA Odds
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
          More NBA
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
            NBA
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
            SPREAD
          </Typography>
          <Typography sx={{ fontWeight: 'light', fontSize: '12px' }}>
            MONEY
          </Typography>
          <Typography sx={{ fontWeight: 'light', fontSize: '12px' }}>
            TOTAL
          </Typography>
        </Box>
      </Box>
      {teams.map(
        ({
          title1,
          logo,
          title2,
          logo2,
          spread1a,
          spread1b,
          money1,
          total1a,
          total1b,
          spread2a,
          spread2b,
          money2,
          total2a,
          total2b,
        }) => (
          <Box
            sx={{
              width: '100%',
              backgroundColor: '#FFFFFF',
              height: '10em',
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
                    @
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
                    height: '50%',
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
                      height: { xs: '80%', sm: '95%' },
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
                    <Typography sx={{ fontSize: '11px', fontWeight: 'bold' }}>
                      {spread1a}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '11px',
                        fontWeight: 'bold',
                        color: 'blue',
                      }}
                    >
                      {spread1b}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      width: '30%',
                      backgroundColor: 'white',
                      height: { xs: '80%', sm: '95%' },
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
                      {money1}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      width: '30%',
                      backgroundColor: 'white',
                      height: { xs: '80%', sm: '95%' },
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
                    <Typography sx={{ fontSize: '11px', fontWeight: 'bold' }}>
                      {total1a}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '11px',
                        fontWeight: 'bold',
                        color: 'blue',
                      }}
                    >
                      {total1b}
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    width: '100%',
                    height: '50%',
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
                      height: { xs: '80%', sm: '95%' },
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
                    <Typography sx={{ fontSize: '11px', fontWeight: 'bold' }}>
                      {spread2a}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '11px',
                        fontWeight: 'bold',
                        color: 'blue',
                      }}
                    >
                      {spread2b}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      width: '30%',
                      backgroundColor: 'white',
                      height: { xs: '80%', sm: '95%' },
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
                      {money2}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      width: '30%',
                      backgroundColor: 'white',
                      height: { xs: '80%', sm: '95%' },
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
                    <Typography sx={{ fontSize: '11px', fontWeight: 'bold' }}>
                      {total2a}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '11px',
                        fontWeight: 'bold',
                        color: 'blue',
                      }}
                    >
                      {total2b}
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
                  height: { md: '20px', lg: '20px', xl: '20px' },
                  width: { md: '20px', lg: '20px', xl: '20px' },
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
        )
      )}
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
          To Score 20+ Points Parlay Builder
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
          To Record a Double Double Parlay
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
          3+ Made Threes Parlay Builder
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
          More Nba
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

export default NBA;
