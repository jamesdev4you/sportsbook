import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SvgIcon from '@mui/material/SvgIcon';
import Button from '@mui/material/Button';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const BetPage = () => {
  const [activeTab, setActiveTab] = useState('Active');

  return (
    <Box
      sx={{
        backgroundColor: '#EAF0F6',
        width: { xl: '44%', lg: '54%', md: '80%', sm: '100%', xs: '100%' },
        height: {
          xl: '536.2vh',
          lg: '536.2vh',
          md: '536.2vh',
          sm: 'auto',
          xs: 'auto',
        },
        display: 'flex',
        padding: {
          xl: '2.3em',
          lg: '2.3em',
          md: '2.3em',
          sm: '1em',
          xs: '1em',
        },
        alignItems: 'start',
        justifyContent: 'start',
        flexDirection: 'column',
        gap: '1em',
      }}
    >
      <Typography
        sx={{ color: '#05285A', fontSize: '20px', fontWeight: 'bold' }}
      >
        My Bets
      </Typography>
      <Box
        sx={{
          background: 'rgba(255,255,255,1)',
          width: '100%',
          height: '3em',
          display: 'flex',
          alignItems: 'center',
          paddingLeft: '15px',
          justifyContent: 'start',
          gap: '1em',
        }}
      >
        <Box
          sx={{
            height: '100%',
            width: { xs: '25%', md: '10%' },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderBottom:
              activeTab === 'Active' ? '3px solid black' : '0px solid black',
            '&:hover': {
              cursor: 'pointer',
            },
          }}
          onClick={() => setActiveTab('Active')}
        >
          <Typography
            sx={{ fontWeight: activeTab === 'Active' ? 'bold' : 'none' }}
          >
            Active
          </Typography>
        </Box>
        <Box
          sx={{
            height: '100%',
            width: { xs: '25%', md: '10%' },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderBottom:
              activeTab === 'Settled' ? '3px solid black' : '0px solid black',
            '&:hover': {
              cursor: 'pointer',
            },
          }}
          onClick={() => setActiveTab('Settled')}
        >
          <Typography
            sx={{ fontWeight: activeTab === 'Settled' ? 'bold' : 'none' }}
          >
            Settled
          </Typography>
        </Box>
      </Box>
      {activeTab === 'Active' && (
        <Box
          sx={{
            marginTop: '1em',
            width: '100%',
            height: {xl:'50%', lg: '20%', md: '100%', sm: '100%', xs: '100%'},
            backgroundColor: '#EAF0F6',
            boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'start',
            flexDirection: 'column',
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: '7vh',
              backgroundColor: 'white',
              display: 'flex',
              boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
              alignItems: 'center',
              justifyContent: 'start',
              padding: '.5em',
            }}
          >
            <Box
              sx={{
                backgroundColor: '#00499B',
                height: '25px',
                width: '25px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography sx={{ color: 'white', fontSize: '12px' }}>
                {' '}
                3{' '}
              </Typography>
            </Box>
            <Typography
              sx={{
                color: 'black',
                fontFamily: 'Birds',
                fontWeight: 'bold',
                marginLeft: '5px',
              }}
            >
              {' '}
              Ongoing Bets{' '}
            </Typography>
          </Box>
          <Box
            sx={{
              width: '100%',
              height: '20vh',
              backgroundColor: 'white',
              marginTop: '15px',
              display: 'flex',
              boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
              alignItems: 'start',
              justifyContent: 'center',
              flexDirection: 'row',
              padding: '.5em',
            }}
          >
            <Box
              sx={{
                height: '100%',
                width: '8%',
                display: 'flex',
                alignItems: 'start',
                justifyContent: 'center',
              }}
            >
              <Box
                sx={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  border: '2px solid red',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  '&:hover': {
                    cursor: 'pointer',
                  },
                  marginTop: '5px',
                }}
              >
                <Typography sx={{ color: 'red', fontWeight: 'bold' }}>
                  -
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                height: '100%',
                width: '90%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'start',
                flexDirection: 'column',
              }}
            >
              <Box
                sx={{
                  height: '30%',
                  width: '90%',
                  display: 'flex',
                  alignItems: 'start',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  marginLeft: '15px',
                  gap: '.3em',
                }}
              >
                <Box
                  sx={{
                    height: '40%',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'start',
                    justifyContent: 'center',
                  }}
                >
                  <Typography sx={{ fontSize: '14px', fontWeight: 'bold' }}>
                    Tenneesee Titans +13.5
                  </Typography>
                  <Typography
                    sx={{
                      marginLeft: 'auto',
                      fontSize: '14px',
                      fontWeight: 'bold',
                    }}
                  >
                    -120
                  </Typography>
                </Box>
                <Box
                  sx={{
                    height: '50%',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'start',
                    justifyContent: 'center',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '12px',
                      fontWeight: 'bold',
                      color: 'lightblack',
                    }}
                  >
                    SPREAD
                  </Typography>
                  <Box
                    sx={{
                      width: '4em',
                      height: '1.2em',
                      borderRadius: '3px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: 'lightgrey',
                      marginLeft: 'auto',
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: '11px',
                        fontWeight: 'bold',
                        color: 'darkblue',
                      }}
                    >
                      CASH OUT
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  height: '20%',
                  width: '90%',
                  display: 'flex',
                  alignItems: 'end',
                  justifyContent: 'center',
                  marginLeft: '15px',
                  gap: '.3em',
                }}
              >
                <Typography
                  sx={{
                    fontSize: '11px',
                    fontWeight: 'bold',
                    color: 'grey',
                  }}
                >
                  Tennessee Titans @ Miami Dolphins
                </Typography>
                <Typography
                  sx={{
                    fontSize: '11px',
                    fontWeight: 'bold',
                    color: 'grey',
                    marginLeft: 'auto',
                  }}
                >
                  8:16 PM EST
                </Typography>
              </Box>
              <Box
                sx={{
                  height: '50%',
                  width: '90%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'start',
                  marginLeft: '15px',
                  gap: '.3em',
                }}
              >
                <Box
                  sx={{
                    width: '50%',
                    height: '80%',
                    border: '1px solid lightgrey',
                    padding: '.5em',
                    borderRadius: '3px',
                    display: 'flex',
                    alignItems: 'start',
                    justifyContent: 'center',
                    flexDirection: 'column',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '11px',
                      fontWeight: 'bold',
                      color: 'black',
                    }}
                  >
                    WAGER
                  </Typography>
                  <Typography>+$200.00</Typography>
                </Box>
                <Box
                  sx={{
                    width: '50%',
                    height: '80%',
                    border: '1px solid lightgrey',
                    padding: '.5em',
                    borderRadius: '3px',
                    display: 'flex',
                    alignItems: 'start',
                    justifyContent: 'center',
                    flexDirection: 'column',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '11px',
                      fontWeight: 'bold',
                      color: 'black',
                    }}
                  >
                    TO WIN
                  </Typography>
                  <Typography>+$196.8</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              width: '100%',
              height: '20vh',
              marginTop: '15px',
              backgroundColor: 'white',
              display: 'flex',
              boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
              alignItems: 'start',
              justifyContent: 'center',
              flexDirection: 'row',
              padding: '.5em',
            }}
          >
            <Box
              sx={{
                height: '100%',
                width: '8%',
                display: 'flex',
                alignItems: 'start',
                justifyContent: 'center',
              }}
            >
              <Box
                sx={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  border: '2px solid red',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  '&:hover': {
                    cursor: 'pointer',
                  },
                  marginTop: '5px',
                }}
              >
                <Typography sx={{ color: 'red', fontWeight: 'bold' }}>
                  -
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                height: '100%',
                width: '90%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'start',
                flexDirection: 'column',
              }}
            >
              <Box
                sx={{
                  height: '30%',
                  width: '90%',
                  display: 'flex',
                  alignItems: 'start',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  marginLeft: '15px',
                  gap: '.3em',
                }}
              >
                <Box
                  sx={{
                    height: '40%',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'start',
                    justifyContent: 'center',
                  }}
                >
                  <Typography sx={{ fontSize: '14px', fontWeight: 'bold' }}>
                    Tenneesee Titans +13.5
                  </Typography>
                  <Typography
                    sx={{
                      marginLeft: 'auto',
                      fontSize: '14px',
                      fontWeight: 'bold',
                    }}
                  >
                    -120
                  </Typography>
                </Box>
                <Box
                  sx={{
                    height: '50%',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'start',
                    justifyContent: 'center',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '12px',
                      fontWeight: 'bold',
                      color: 'lightblack',
                    }}
                  >
                    SPREAD
                  </Typography>
                  <Box
                    sx={{
                      width: '4em',
                      height: '1.2em',
                      borderRadius: '3px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: 'lightgrey',
                      marginLeft: 'auto',
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: '11px',
                        fontWeight: 'bold',
                        color: 'darkblue',
                      }}
                    >
                      CASH OUT
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  height: '20%',
                  width: '90%',
                  display: 'flex',
                  alignItems: 'end',
                  justifyContent: 'center',
                  marginLeft: '15px',
                  gap: '.3em',
                }}
              >
                <Typography
                  sx={{
                    fontSize: '11px',
                    fontWeight: 'bold',
                    color: 'grey',
                  }}
                >
                  Tennessee Titans @ Miami Dolphins
                </Typography>
                <Typography
                  sx={{
                    fontSize: '11px',
                    fontWeight: 'bold',
                    color: 'grey',
                    marginLeft: 'auto',
                  }}
                >
                  8:16 PM EST
                </Typography>
              </Box>
              <Box
                sx={{
                  height: '50%',
                  width: '90%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'start',
                  marginLeft: '15px',
                  gap: '.3em',
                }}
              >
                <Box
                  sx={{
                    width: '50%',
                    height: '80%',
                    border: '1px solid lightgrey',
                    padding: '.5em',
                    borderRadius: '3px',
                    display: 'flex',
                    alignItems: 'start',
                    justifyContent: 'center',
                    flexDirection: 'column',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '11px',
                      fontWeight: 'bold',
                      color: 'black',
                    }}
                  >
                    WAGER
                  </Typography>
                  <Typography>+$200.00</Typography>
                </Box>
                <Box
                  sx={{
                    width: '50%',
                    height: '80%',
                    border: '1px solid lightgrey',
                    padding: '.5em',
                    borderRadius: '3px',
                    display: 'flex',
                    alignItems: 'start',
                    justifyContent: 'center',
                    flexDirection: 'column',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '11px',
                      fontWeight: 'bold',
                      color: 'black',
                    }}
                  >
                    TO WIN
                  </Typography>
                  <Typography>+$196.8</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              width: '100%',
              height: '20vh',
              marginTop: '15px',
              backgroundColor: 'white',
              display: 'flex',
              boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
              alignItems: 'start',
              justifyContent: 'center',
              flexDirection: 'row',
              padding: '.5em',
            }}
          >
            <Box
              sx={{
                height: '100%',
                width: '8%',
                display: 'flex',
                alignItems: 'start',
                justifyContent: 'center',
              }}
            >
              <Box
                sx={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  border: '2px solid red',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  '&:hover': {
                    cursor: 'pointer',
                  },
                  marginTop: '5px',
                }}
              >
                <Typography sx={{ color: 'red', fontWeight: 'bold' }}>
                  -
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                height: '100%',
                width: '90%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'start',
                flexDirection: 'column',
              }}
            >
              <Box
                sx={{
                  height: '30%',
                  width: '90%',
                  display: 'flex',
                  alignItems: 'start',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  marginLeft: '15px',
                  gap: '.3em',
                }}
              >
                <Box
                  sx={{
                    height: '40%',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'start',
                    justifyContent: 'center',
                  }}
                >
                  <Typography sx={{ fontSize: '14px', fontWeight: 'bold' }}>
                    Tenneesee Titans +13.5
                  </Typography>
                  <Typography
                    sx={{
                      marginLeft: 'auto',
                      fontSize: '14px',
                      fontWeight: 'bold',
                    }}
                  >
                    -120
                  </Typography>
                </Box>
                <Box
                  sx={{
                    height: '50%',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'start',
                    justifyContent: 'center',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '12px',
                      fontWeight: 'bold',
                      color: 'lightblack',
                    }}
                  >
                    SPREAD
                  </Typography>
                  <Box
                    sx={{
                      width: '4em',
                      height: '1.2em',
                      borderRadius: '3px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: 'lightgrey',
                      marginLeft: 'auto',
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: '11px',
                        fontWeight: 'bold',
                        color: 'darkblue',
                      }}
                    >
                      CASH OUT
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  height: '20%',
                  width: '90%',
                  display: 'flex',
                  alignItems: 'end',
                  justifyContent: 'center',
                  marginLeft: '15px',
                  gap: '.3em',
                }}
              >
                <Typography
                  sx={{
                    fontSize: '11px',
                    fontWeight: 'bold',
                    color: 'grey',
                  }}
                >
                  Tennessee Titans @ Miami Dolphins
                </Typography>
                <Typography
                  sx={{
                    fontSize: '11px',
                    fontWeight: 'bold',
                    color: 'grey',
                    marginLeft: 'auto',
                  }}
                >
                  8:16 PM EST
                </Typography>
              </Box>
              <Box
                sx={{
                  height: '50%',
                  width: '90%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'start',
                  marginLeft: '15px',
                  gap: '.3em',
                }}
              >
                <Box
                  sx={{
                    width: '50%',
                    height: '80%',
                    border: '1px solid lightgrey',
                    padding: '.5em',
                    borderRadius: '3px',
                    display: 'flex',
                    alignItems: 'start',
                    justifyContent: 'center',
                    flexDirection: 'column',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '11px',
                      fontWeight: 'bold',
                      color: 'black',
                    }}
                  >
                    WAGER
                  </Typography>
                  <Typography>+$200.00</Typography>
                </Box>
                <Box
                  sx={{
                    width: '50%',
                    height: '80%',
                    border: '1px solid lightgrey',
                    padding: '.5em',
                    borderRadius: '3px',
                    display: 'flex',
                    alignItems: 'start',
                    justifyContent: 'center',
                    flexDirection: 'column',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '11px',
                      fontWeight: 'bold',
                      color: 'black',
                    }}
                  >
                    TO WIN
                  </Typography>
                  <Typography>+$196.8</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              width: '100%',
              height: '7vh',
              marginTop: '15px',
              backgroundColor: 'white',
              display: 'flex',
              boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '.5em',
            }}
          >
            <SvgIcon
              component={DeleteOutlineIcon}
              sx={{
                height: { md: '20px', lg: '30px', xl: '20px' },
                width: { md: '20px', lg: '30px', xl: '20px' },
                color: 'red',
                display: {
                  xs: 'none',
                  sm: 'none',
                  md: 'none',
                  lg: 'inline',
                },
                '&:hover': {
                  cursor: 'pointer',
                },
              }}
            />
            <Typography
              sx={{
                fontFamily: 'Birds',
                color: 'red',
                marginLeft: '5px',
                fontSize: '11px',
                '&:hover': {
                  cursor: 'pointer',
                },
              }}
            >
              Remove All Sections
            </Typography>
          </Box>
          <Box
            sx={{
              width: '100%',
              height: '4em',
              marginTop: 'auto',
              backgroundColor: 'white',
              display: 'flex',
              boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '.5em',
            }}
          >
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
                Log in or join
              </Typography>
              <Typography sx={{ lineHeight: '1em', fontSize: '11px' }}>
                TO WIN $196.08
              </Typography>
            </Button>
          </Box>
        </Box>
      )}
      {activeTab === 'Settled' && (
        <Box
          sx={{
            marginTop: '1em',
            width: '100%',
            height: 'auto',
            backgroundColor: '#EAF0F6',
            boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'start',
            flexDirection: 'column',
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: '7vh',
              backgroundColor: 'white',
              display: 'flex',
              boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
              alignItems: 'center',
              justifyContent: 'start',
              padding: '.5em',
            }}
          >
            <Box
              sx={{
                backgroundColor: '#00499B',
                height: '25px',
                width: '25px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography sx={{ color: 'white', fontSize: '12px' }}>
                {' '}
                7{' '}
              </Typography>
            </Box>
            <Typography
              sx={{
                color: 'black',
                fontFamily: 'Birds',
                fontWeight: 'bold',
                marginLeft: '5px',
              }}
            >
              {' '}
              Earnings{' '}
            </Typography>
            <Box
              sx={{
                padding: '.4em',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '5px',
                backgroundColor: 'green',
                marginLeft: 'auto',
              }}
            >
              <Typography
                sx={{
                  color: 'white',
                  fontFamily: 'Birds',
                  fontWeight: 'bold',
                  fontSize: {lg: '12px', xl: '16px'}
                }}
              >
                {' '}
                Total: $12,437{' '}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              width: '100%',
              height: '20vh',
              backgroundColor: 'white',
              marginTop: '15px',
              display: 'flex',
              boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
              alignItems: 'start',
              justifyContent: 'center',
              flexDirection: 'row',
              padding: '.5em',
            }}
          >
            <Box
              sx={{
                height: '100%',
                width: '90%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'start',
                flexDirection: 'column',
              }}
            >
              <Box
                sx={{
                  height: '30%',
                  width: '90%',
                  display: 'flex',
                  alignItems: 'start',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  marginLeft: '15px',
                  gap: '.3em',
                }}
              >
                <Box
                  sx={{
                    height: '40%',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'start',
                    justifyContent: 'center',
                  }}
                >
                  <Typography sx={{ fontSize: '14px', fontWeight: 'bold' }}>
                    Tenneesee Titans +13.5
                  </Typography>
                  <Typography
                    sx={{
                      marginLeft: 'auto',
                      fontSize: '14px',
                      fontWeight: 'bold',
                    }}
                  >
                    -120
                  </Typography>
                </Box>
                <Box
                  sx={{
                    height: '50%',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'start',
                    justifyContent: 'center',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '12px',
                      fontWeight: 'bold',
                      color: 'lightblack',
                    }}
                  >
                    SPREAD
                  </Typography>
                  <Box
                    sx={{
                      width: '4em',
                      height: '1.2em',
                      borderRadius: '3px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: 'lightgrey',
                      marginLeft: 'auto',
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: '11px',
                        fontWeight: 'bold',
                        color: 'darkblue',
                      }}
                    >
                      CASH OUT
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  height: '20%',
                  width: '90%',
                  display: 'flex',
                  alignItems: 'end',
                  justifyContent: 'center',
                  marginLeft: '15px',
                  gap: '.3em',
                }}
              >
                <Typography
                  sx={{
                    fontSize: '11px',
                    fontWeight: 'bold',
                    color: 'grey',
                  }}
                >
                  Tennessee Titans @ Miami Dolphins
                </Typography>
                <Typography
                  sx={{
                    fontSize: '11px',
                    fontWeight: 'bold',
                    color: 'grey',
                    marginLeft: 'auto',
                  }}
                >
                  8:16 PM EST
                </Typography>
              </Box>
              <Box
                sx={{
                  height: '50%',
                  width: '90%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'start',
                  marginLeft: '15px',
                  gap: '.3em',
                }}
              >
                <Box
                  sx={{
                    width: '50%',
                    height: '80%',
                    border: '1px solid lightgrey',
                    padding: '.5em',
                    borderRadius: '3px',
                    display: 'flex',
                    alignItems: 'start',
                    justifyContent: 'center',
                    flexDirection: 'column',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '11px',
                      fontWeight: 'bold',
                      color: 'black',
                    }}
                  >
                    WAGER
                  </Typography>
                  <Typography>+$200.00</Typography>
                </Box>
                <Box
                  sx={{
                    width: '50%',
                    height: '80%',
                    border: '1px solid lightgrey',
                    padding: '.5em',
                    borderRadius: '3px',
                    display: 'flex',
                    alignItems: 'start',
                    justifyContent: 'center',
                    flexDirection: 'column',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '11px',
                      fontWeight: 'bold',
                      color: 'black',
                    }}
                  >
                    AMOUNT WON:
                  </Typography>
                  <Typography>+$196.8</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              width: '100%',
              height: '20vh',
              backgroundColor: 'white',
              marginTop: '15px',
              display: 'flex',
              boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
              alignItems: 'start',
              justifyContent: 'center',
              flexDirection: 'row',
              padding: '.5em',
            }}
          >
            <Box
              sx={{
                height: '100%',
                width: '90%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'start',
                flexDirection: 'column',
              }}
            >
              <Box
                sx={{
                  height: '30%',
                  width: '90%',
                  display: 'flex',
                  alignItems: 'start',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  marginLeft: '15px',
                  gap: '.3em',
                }}
              >
                <Box
                  sx={{
                    height: '40%',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'start',
                    justifyContent: 'center',
                  }}
                >
                  <Typography sx={{ fontSize: '14px', fontWeight: 'bold' }}>
                    Tenneesee Titans +13.5
                  </Typography>
                  <Typography
                    sx={{
                      marginLeft: 'auto',
                      fontSize: '14px',
                      fontWeight: 'bold',
                    }}
                  >
                    -120
                  </Typography>
                </Box>
                <Box
                  sx={{
                    height: '50%',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'start',
                    justifyContent: 'center',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '12px',
                      fontWeight: 'bold',
                      color: 'lightblack',
                    }}
                  >
                    SPREAD
                  </Typography>
                  <Box
                    sx={{
                      width: '4em',
                      height: '1.2em',
                      borderRadius: '3px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: 'lightgrey',
                      marginLeft: 'auto',
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: '11px',
                        fontWeight: 'bold',
                        color: 'darkblue',
                      }}
                    >
                      CASH OUT
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  height: '20%',
                  width: '90%',
                  display: 'flex',
                  alignItems: 'end',
                  justifyContent: 'center',
                  marginLeft: '15px',
                  gap: '.3em',
                }}
              >
                <Typography
                  sx={{
                    fontSize: '11px',
                    fontWeight: 'bold',
                    color: 'grey',
                  }}
                >
                  Tennessee Titans @ Miami Dolphins
                </Typography>
                <Typography
                  sx={{
                    fontSize: '11px',
                    fontWeight: 'bold',
                    color: 'grey',
                    marginLeft: 'auto',
                  }}
                >
                  8:16 PM EST
                </Typography>
              </Box>
              <Box
                sx={{
                  height: '50%',
                  width: '90%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'start',
                  marginLeft: '15px',
                  gap: '.3em',
                }}
              >
                <Box
                  sx={{
                    width: '50%',
                    height: '80%',
                    border: '1px solid lightgrey',
                    padding: '.5em',
                    borderRadius: '3px',
                    display: 'flex',
                    alignItems: 'start',
                    justifyContent: 'center',
                    flexDirection: 'column',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '11px',
                      fontWeight: 'bold',
                      color: 'black',
                    }}
                  >
                    WAGER
                  </Typography>
                  <Typography>+$200.00</Typography>
                </Box>
                <Box
                  sx={{
                    width: '50%',
                    height: '80%',
                    border: '1px solid lightgrey',
                    padding: '.5em',
                    borderRadius: '3px',
                    display: 'flex',
                    alignItems: 'start',
                    justifyContent: 'center',
                    flexDirection: 'column',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '11px',
                      fontWeight: 'bold',
                      color: 'black',
                    }}
                  >
                    AMOUNT WON:
                  </Typography>
                  <Typography>+$196.8</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              width: '100%',
              height: '20vh',
              backgroundColor: 'white',
              marginTop: '15px',
              display: 'flex',
              boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
              alignItems: 'start',
              justifyContent: 'center',
              flexDirection: 'row',
              padding: '.5em',
            }}
          >
            <Box
              sx={{
                height: '100%',
                width: '90%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'start',
                flexDirection: 'column',
              }}
            >
              <Box
                sx={{
                  height: '30%',
                  width: '90%',
                  display: 'flex',
                  alignItems: 'start',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  marginLeft: '15px',
                  gap: '.3em',
                }}
              >
                <Box
                  sx={{
                    height: '40%',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'start',
                    justifyContent: 'center',
                  }}
                >
                  <Typography sx={{ fontSize: '14px', fontWeight: 'bold' }}>
                    Tenneesee Titans +13.5
                  </Typography>
                  <Typography
                    sx={{
                      marginLeft: 'auto',
                      fontSize: '14px',
                      fontWeight: 'bold',
                    }}
                  >
                    -120
                  </Typography>
                </Box>
                <Box
                  sx={{
                    height: '50%',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'start',
                    justifyContent: 'center',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '12px',
                      fontWeight: 'bold',
                      color: 'lightblack',
                    }}
                  >
                    SPREAD
                  </Typography>
                  <Box
                    sx={{
                      width: '4em',
                      height: '1.2em',
                      borderRadius: '3px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: 'lightgrey',
                      marginLeft: 'auto',
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: '11px',
                        fontWeight: 'bold',
                        color: 'darkblue',
                      }}
                    >
                      CASH OUT
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  height: '20%',
                  width: '90%',
                  display: 'flex',
                  alignItems: 'end',
                  justifyContent: 'center',
                  marginLeft: '15px',
                  gap: '.3em',
                }}
              >
                <Typography
                  sx={{
                    fontSize: '11px',
                    fontWeight: 'bold',
                    color: 'grey',
                  }}
                >
                  Tennessee Titans @ Miami Dolphins
                </Typography>
                <Typography
                  sx={{
                    fontSize: '11px',
                    fontWeight: 'bold',
                    color: 'grey',
                    marginLeft: 'auto',
                  }}
                >
                  8:16 PM EST
                </Typography>
              </Box>
              <Box
                sx={{
                  height: '50%',
                  width: '90%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'start',
                  marginLeft: '15px',
                  gap: '.3em',
                }}
              >
                <Box
                  sx={{
                    width: '50%',
                    height: '80%',
                    border: '1px solid lightgrey',
                    padding: '.5em',
                    borderRadius: '3px',
                    display: 'flex',
                    alignItems: 'start',
                    justifyContent: 'center',
                    flexDirection: 'column',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '11px',
                      fontWeight: 'bold',
                      color: 'black',
                    }}
                  >
                    WAGER
                  </Typography>
                  <Typography>+$200.00</Typography>
                </Box>
                <Box
                  sx={{
                    width: '50%',
                    height: '80%',
                    border: '1px solid lightgrey',
                    padding: '.5em',
                    borderRadius: '3px',
                    display: 'flex',
                    alignItems: 'start',
                    justifyContent: 'center',
                    flexDirection: 'column',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '11px',
                      fontWeight: 'bold',
                      color: 'black',
                    }}
                  >
                    AMOUNT WON:
                  </Typography>
                  <Typography>+$196.8</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              width: '100%',
              height: '20vh',
              backgroundColor: 'white',
              marginTop: '15px',
              display: 'flex',
              boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
              alignItems: 'start',
              justifyContent: 'center',
              flexDirection: 'row',
              padding: '.5em',
            }}
          >
            <Box
              sx={{
                height: '100%',
                width: '90%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'start',
                flexDirection: 'column',
              }}
            >
              <Box
                sx={{
                  height: '30%',
                  width: '90%',
                  display: 'flex',
                  alignItems: 'start',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  marginLeft: '15px',
                  gap: '.3em',
                }}
              >
                <Box
                  sx={{
                    height: '40%',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'start',
                    justifyContent: 'center',
                  }}
                >
                  <Typography sx={{ fontSize: '14px', fontWeight: 'bold' }}>
                    Tenneesee Titans +13.5
                  </Typography>
                  <Typography
                    sx={{
                      marginLeft: 'auto',
                      fontSize: '14px',
                      fontWeight: 'bold',
                    }}
                  >
                    -120
                  </Typography>
                </Box>
                <Box
                  sx={{
                    height: '50%',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'start',
                    justifyContent: 'center',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '12px',
                      fontWeight: 'bold',
                      color: 'lightblack',
                    }}
                  >
                    SPREAD
                  </Typography>
                  <Box
                    sx={{
                      width: '4em',
                      height: '1.2em',
                      borderRadius: '3px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: 'lightgrey',
                      marginLeft: 'auto',
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: '11px',
                        fontWeight: 'bold',
                        color: 'darkblue',
                      }}
                    >
                      CASH OUT
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  height: '20%',
                  width: '90%',
                  display: 'flex',
                  alignItems: 'end',
                  justifyContent: 'center',
                  marginLeft: '15px',
                  gap: '.3em',
                }}
              >
                <Typography
                  sx={{
                    fontSize: '11px',
                    fontWeight: 'bold',
                    color: 'grey',
                  }}
                >
                  Tennessee Titans @ Miami Dolphins
                </Typography>
                <Typography
                  sx={{
                    fontSize: '11px',
                    fontWeight: 'bold',
                    color: 'grey',
                    marginLeft: 'auto',
                  }}
                >
                  8:16 PM EST
                </Typography>
              </Box>
              <Box
                sx={{
                  height: '50%',
                  width: '90%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'start',
                  marginLeft: '15px',
                  gap: '.3em',
                }}
              >
                <Box
                  sx={{
                    width: '50%',
                    height: '80%',
                    border: '1px solid lightgrey',
                    padding: '.5em',
                    borderRadius: '3px',
                    display: 'flex',
                    alignItems: 'start',
                    justifyContent: 'center',
                    flexDirection: 'column',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '11px',
                      fontWeight: 'bold',
                      color: 'black',
                    }}
                  >
                    WAGER
                  </Typography>
                  <Typography>+$200.00</Typography>
                </Box>
                <Box
                  sx={{
                    width: '50%',
                    height: '80%',
                    border: '1px solid lightgrey',
                    padding: '.5em',
                    borderRadius: '3px',
                    display: 'flex',
                    alignItems: 'start',
                    justifyContent: 'center',
                    flexDirection: 'column',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '11px',
                      fontWeight: 'bold',
                      color: 'black',
                    }}
                  >
                    AMOUNT WON:
                  </Typography>
                  <Typography>+$196.8</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              width: '100%',
              height: '20vh',

              backgroundColor: 'white',
              marginTop: '15px',
              display: 'flex',
              boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
              alignItems: 'start',
              justifyContent: 'center',
              flexDirection: 'row',
              padding: '.5em',
            }}
          >
            <Box
              sx={{
                height: '100%',
                width: '90%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'start',
                flexDirection: 'column',
              }}
            >
              <Box
                sx={{
                  height: '30%',
                  width: '90%',
                  display: 'flex',
                  alignItems: 'start',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  marginLeft: '15px',
                  gap: '.3em',
                }}
              >
                <Box
                  sx={{
                    height: '40%',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'start',
                    justifyContent: 'center',
                  }}
                >
                  <Typography sx={{ fontSize: '14px', fontWeight: 'bold' }}>
                    Tenneesee Titans +13.5
                  </Typography>
                  <Typography
                    sx={{
                      marginLeft: 'auto',
                      fontSize: '14px',
                      fontWeight: 'bold',
                    }}
                  >
                    -120
                  </Typography>
                </Box>
                <Box
                  sx={{
                    height: '50%',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'start',
                    justifyContent: 'center',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '12px',
                      fontWeight: 'bold',
                      color: 'lightblack',
                    }}
                  >
                    SPREAD
                  </Typography>
                  <Box
                    sx={{
                      width: '4em',
                      height: '1.2em',
                      borderRadius: '3px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: 'lightgrey',
                      marginLeft: 'auto',
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: '11px',
                        fontWeight: 'bold',
                        color: 'darkblue',
                      }}
                    >
                      CASH OUT
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  height: '20%',
                  width: '90%',
                  display: 'flex',
                  alignItems: 'end',
                  justifyContent: 'center',
                  marginLeft: '15px',
                  gap: '.3em',
                }}
              >
                <Typography
                  sx={{
                    fontSize: '11px',
                    fontWeight: 'bold',
                    color: 'grey',
                  }}
                >
                  Tennessee Titans @ Miami Dolphins
                </Typography>
                <Typography
                  sx={{
                    fontSize: '11px',
                    fontWeight: 'bold',
                    color: 'grey',
                    marginLeft: 'auto',
                  }}
                >
                  8:16 PM EST
                </Typography>
              </Box>
              <Box
                sx={{
                  height: '50%',
                  width: '90%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'start',
                  marginLeft: '15px',
                  gap: '.3em',
                }}
              >
                <Box
                  sx={{
                    width: '50%',
                    height: '80%',
                    border: '1px solid lightgrey',
                    padding: '.5em',
                    borderRadius: '3px',
                    display: 'flex',
                    alignItems: 'start',
                    justifyContent: 'center',
                    flexDirection: 'column',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '11px',
                      fontWeight: 'bold',
                      color: 'black',
                    }}
                  >
                    WAGER
                  </Typography>
                  <Typography>+$200.00</Typography>
                </Box>
                <Box
                  sx={{
                    width: '50%',
                    height: '80%',
                    border: '1px solid lightgrey',
                    padding: '.5em',
                    borderRadius: '3px',
                    display: 'flex',
                    alignItems: 'start',
                    justifyContent: 'center',
                    flexDirection: 'column',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '11px',
                      fontWeight: 'bold',
                      color: 'black',
                    }}
                  >
                    AMOUNT WON:
                  </Typography>
                  <Typography>+$196.8</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              width: '100%',
              height: '20vh',

              backgroundColor: 'white',
              marginTop: '15px',
              display: 'flex',
              boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
              alignItems: 'start',
              justifyContent: 'center',
              flexDirection: 'row',
              padding: '.5em',
            }}
          >
            <Box
              sx={{
                height: '100%',
                width: '90%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'start',
                flexDirection: 'column',
              }}
            >
              <Box
                sx={{
                  height: '30%',
                  width: '90%',
                  display: 'flex',
                  alignItems: 'start',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  marginLeft: '15px',
                  gap: '.3em',
                }}
              >
                <Box
                  sx={{
                    height: '40%',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'start',
                    justifyContent: 'center',
                  }}
                >
                  <Typography sx={{ fontSize: '14px', fontWeight: 'bold' }}>
                    Tenneesee Titans +13.5
                  </Typography>
                  <Typography
                    sx={{
                      marginLeft: 'auto',
                      fontSize: '14px',
                      fontWeight: 'bold',
                    }}
                  >
                    -120
                  </Typography>
                </Box>
                <Box
                  sx={{
                    height: '50%',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'start',
                    justifyContent: 'center',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '12px',
                      fontWeight: 'bold',
                      color: 'lightblack',
                    }}
                  >
                    SPREAD
                  </Typography>
                  <Box
                    sx={{
                      width: '4em',
                      height: '1.2em',
                      borderRadius: '3px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: 'lightgrey',
                      marginLeft: 'auto',
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: '11px',
                        fontWeight: 'bold',
                        color: 'darkblue',
                      }}
                    >
                      CASH OUT
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  height: '20%',
                  width: '90%',
                  display: 'flex',
                  alignItems: 'end',
                  justifyContent: 'center',
                  marginLeft: '15px',
                  gap: '.3em',
                }}
              >
                <Typography
                  sx={{
                    fontSize: '11px',
                    fontWeight: 'bold',
                    color: 'grey',
                  }}
                >
                  Tennessee Titans @ Miami Dolphins
                </Typography>
                <Typography
                  sx={{
                    fontSize: '11px',
                    fontWeight: 'bold',
                    color: 'grey',
                    marginLeft: 'auto',
                  }}
                >
                  8:16 PM EST
                </Typography>
              </Box>
              <Box
                sx={{
                  height: '50%',
                  width: '90%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'start',
                  marginLeft: '15px',
                  gap: '.3em',
                }}
              >
                <Box
                  sx={{
                    width: '50%',
                    height: '80%',
                    border: '1px solid lightgrey',
                    padding: '.5em',
                    borderRadius: '3px',
                    display: 'flex',
                    alignItems: 'start',
                    justifyContent: 'center',
                    flexDirection: 'column',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '11px',
                      fontWeight: 'bold',
                      color: 'black',
                    }}
                  >
                    WAGER
                  </Typography>
                  <Typography>+$200.00</Typography>
                </Box>
                <Box
                  sx={{
                    width: '50%',
                    height: '80%',
                    border: '1px solid lightgrey',
                    padding: '.5em',
                    borderRadius: '3px',
                    display: 'flex',
                    alignItems: 'start',
                    justifyContent: 'center',
                    flexDirection: 'column',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '11px',
                      fontWeight: 'bold',
                      color: 'black',
                    }}
                  >
                    AMOUNT WON:
                  </Typography>
                  <Typography>+$196.8</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              width: '100%',
              height: '20vh',

              backgroundColor: 'white',
              marginTop: '15px',
              display: 'flex',
              boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
              alignItems: 'start',
              justifyContent: 'center',
              flexDirection: 'row',
              padding: '.5em',
            }}
          >
            <Box
              sx={{
                height: '100%',
                width: '90%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'start',
                flexDirection: 'column',
              }}
            >
              <Box
                sx={{
                  height: '30%',
                  width: '90%',
                  display: 'flex',
                  alignItems: 'start',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  marginLeft: '15px',
                  gap: '.3em',
                }}
              >
                <Box
                  sx={{
                    height: '40%',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'start',
                    justifyContent: 'center',
                  }}
                >
                  <Typography sx={{ fontSize: '14px', fontWeight: 'bold' }}>
                    Tenneesee Titans +13.5
                  </Typography>
                  <Typography
                    sx={{
                      marginLeft: 'auto',
                      fontSize: '14px',
                      fontWeight: 'bold',
                    }}
                  >
                    -120
                  </Typography>
                </Box>
                <Box
                  sx={{
                    height: '50%',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'start',
                    justifyContent: 'center',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '12px',
                      fontWeight: 'bold',
                      color: 'lightblack',
                    }}
                  >
                    SPREAD
                  </Typography>
                  <Box
                    sx={{
                      width: '4em',
                      height: '1.2em',
                      borderRadius: '3px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: 'lightgrey',
                      marginLeft: 'auto',
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: '11px',
                        fontWeight: 'bold',
                        color: 'darkblue',
                      }}
                    >
                      CASH OUT
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  height: '20%',
                  width: '90%',
                  display: 'flex',
                  alignItems: 'end',
                  justifyContent: 'center',
                  marginLeft: '15px',
                  gap: '.3em',
                }}
              >
                <Typography
                  sx={{
                    fontSize: '11px',
                    fontWeight: 'bold',
                    color: 'grey',
                  }}
                >
                  Tennessee Titans @ Miami Dolphins
                </Typography>
                <Typography
                  sx={{
                    fontSize: '11px',
                    fontWeight: 'bold',
                    color: 'grey',
                    marginLeft: 'auto',
                  }}
                >
                  8:16 PM EST
                </Typography>
              </Box>
              <Box
                sx={{
                  height: '50%',
                  width: '90%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'start',
                  marginLeft: '15px',
                  gap: '.3em',
                }}
              >
                <Box
                  sx={{
                    width: '50%',
                    height: '80%',
                    border: '1px solid lightgrey',
                    padding: '.5em',
                    borderRadius: '3px',
                    display: 'flex',
                    alignItems: 'start',
                    justifyContent: 'center',
                    flexDirection: 'column',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '11px',
                      fontWeight: 'bold',
                      color: 'black',
                    }}
                  >
                    WAGER
                  </Typography>
                  <Typography>+$200.00</Typography>
                </Box>
                <Box
                  sx={{
                    width: '50%',
                    height: '80%',
                    border: '1px solid lightgrey',
                    padding: '.5em',
                    borderRadius: '3px',
                    display: 'flex',
                    alignItems: 'start',
                    justifyContent: 'center',
                    flexDirection: 'column',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '11px',
                      fontWeight: 'bold',
                      color: 'black',
                    }}
                  >
                    AMOUNT WON:
                  </Typography>
                  <Typography>+$196.8</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              width: '100%',
              height: '7vh',
              marginTop: '15px',
              backgroundColor: 'white',
              display: 'flex',
              boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '.5em',
            }}
          >
            <SvgIcon
              component={DeleteOutlineIcon}
              sx={{
                height: { md: '20px', lg: '30px', xl: '20px' },
                width: { md: '20px', lg: '30px', xl: '20px' },
                color: 'red',
                display: {
                  xs: 'none',
                  sm: 'none',
                  md: 'none',
                  lg: 'inline',
                },
                '&:hover': {
                  cursor: 'pointer',
                },
              }}
            />
            <Typography
              sx={{
                fontFamily: 'Birds',
                color: 'red',
                marginLeft: '5px',
                fontSize: '11px',
                '&:hover': {
                  cursor: 'pointer',
                },
              }}
            >
              Archive History
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default BetPage;
