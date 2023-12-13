import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SvgIcon from '@mui/material/SvgIcon';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import '../../../index.css';

const Circle = ({ children }) => (
  <Box
    sx={{
      bgcolor: 'white',
      width: 15,
      height: 15,
      borderRadius: '50%',
      border: '1px solid #C9D1DB',
    }}
  />
);

const Line = () => (
  <Box
    sx={{ width: '1px', bgcolor: '#C9D1DB', height: 35, alignSelf: 'center' }}
  />
);

const Parlay = () => {
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
          component={LocalAtmIcon}
          sx={{
            height: '25px',
            width: '25px',
            color: 'green',
            marginRight: '.2em',
            display: {
              xs: 'none',
              sm: 'none',
              md: 'none',
              lg: 'inline',
            },
          }}
        />
        <Typography
          variant='p'
          sx={{ fontFamily: 'Birds', fontWeight: 'bold' }}
        >
          Popular Same Game Parlay Bets
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
      {isOpen && (
        <Box
          sx={{
            width: '100%',
            height: '23em',
            borderBottom: '1px solid #C9D1DB',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              width: '95%',
              height: '90%',
              borderRadius: '15px',
              boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
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
                padding: '.5em',
                gap: '.2em',
                flexDirection: 'row',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'start',
                  justifyContent: 'center',
                  flexDirection: 'column',
                }}
              >
                <Box
                  sx={{
                    padding: 'none',
                    width: 'auto',
                    height: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <SvgIcon
                    component={LocalAtmIcon}
                    sx={{
                      height: '15px',
                      width: '15px',
                      color: 'green',
                      marginRight: '.2em',
                      display: {
                        xs: 'none',
                        sm: 'none',
                        md: 'none',
                        lg: 'inline',
                      },
                    }}
                  />
                  <Typography
                    variant='p'
                    sx={{
                      fontFamily: 'Birds',
                      fontWeight: 'bold',
                      fontSize: '11px',
                    }}
                  >
                    New England Patriots @ Pitsburgh Steelers
                  </Typography>
                </Box>
                <Box
                  sx={{
                    padding: 'none',
                    width: 'auto',
                    height: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '.5em',
                  }}
                >
                  <Box
                    sx={{
                      width: 'auto',
                      height: 'auto',
                      backgroundColor: '#F87A1E',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '.1em',
                      borderRadius: '5px',
                    }}
                  >
                    <SvgIcon
                      component={WhatshotIcon}
                      sx={{
                        height: '14px',
                        width: '14px',
                        color: 'black',
                        marginRight: '.2em',
                        display: {
                          xs: 'none',
                          sm: 'none',
                          md: 'none',
                          lg: 'inline',
                        },
                      }}
                    />
                    <Typography
                      variant='p'
                      sx={{
                        fontFamily: 'Birds',
                        fontWeight: 'bold',
                        fontSize: '11px',
                      }}
                    >
                      11844 PEOPLE PLACED
                    </Typography>
                  </Box>
                  <Typography
                    variant='p'
                    sx={{
                      fontFamily: 'Birds',
                      fontWeight: 'bold',
                      fontSize: '11px',
                    }}
                  >
                    4 Selections
                  </Typography>
                </Box>
              </Box>
              <Typography
                sx={{
                  fontFamily: 'Birds',
                  fontWeight: 'bold',
                  fontSize: '14px',
                  marginLeft: 'auto',
                }}
              >
                +1149
              </Typography>
            </Box>
            <Box
              sx={{
                padding: '.5em 1em .5em 1em',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'start',
                gap: '1em',
                marginRight: 'auto',
              }}
            >
              <Stack direction='column' alignItems='center' spacing={0}>
                <Circle />
                <Line />
                <Circle />
                <Line />
                <Circle />
                <Line />
                <Circle />
              </Stack>
              <Box
                sx={{
                  height: '13em',
                  width: 'auto',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'start',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    paddingBottom: '.8em',
                    paddingTop: '.5em',
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: 'Birds',
                      fontWeight: 'bold',
                      fontSize: '14px',
                    }}
                  >
                    Diontae Johnson Over 43.5
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: 'Birds',
                      fontSize: '12px',
                    }}
                  >
                    DIONTAE JOHNSON - RECEIVING YDS
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'start',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    paddingBottom: '.5em',
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: 'Birds',
                      fontWeight: 'bold',
                      fontSize: '14px',
                    }}
                  >
                    Pat Freiermuth Over 27.5
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: 'Birds',

                      fontSize: '12px',
                    }}
                  >
                    PAT FREIERMUTH - RECEIVING YDS
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'start',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    paddingBottom: '.8em',
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: 'Birds',
                      fontWeight: 'bold',
                      fontSize: '14px',
                    }}
                  >
                    George Pickens Over 40.5
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: 'Birds',
                      fontSize: '12px',
                    }}
                  >
                    GEORGE PICKENS - RECEIVING YDS
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'start',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    paddingBottom: '.7em',
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: 'Birds',
                      fontWeight: 'bold',
                      fontSize: '14px',
                    }}
                  >
                    Jaylen Warren Over 16.5
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: 'Birds',

                      fontSize: '12px',
                    }}
                  >
                    JAYLEN WARREN - RECEIVING YDS
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Button
              sx={{
                width: '95%',
                height: '3em',
                margin: 'auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                backgroundColor: 'green',
                '&:hover': {
                  backgroundColor: 'darkgreen',
                },
              }}
            >
              <Typography sx={{ lineHeight: '1.1em', fontSize: '14px' }}>
                Add to Betslip
              </Typography>
              <Typography sx={{ lineHeight: '1em', fontSize: '11px' }}>
                $10 Wager Wins $134.00
              </Typography>
            </Button>
          </Box>
        </Box>
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
        <Link
          variant='p'
          sx={{
            fontFamily: 'Birds',
            textDecoration: 'none',
          }}
        >
          Enter Parlay Hub to View More
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

export default Parlay;
