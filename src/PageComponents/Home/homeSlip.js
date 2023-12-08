import React from 'react';
import Box from '@mui/material/Box';
import SvgIcon from '@mui/material/SvgIcon';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import '../../index.css';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

const StickyBox = styled(Box)({
  width: '39%',
  position: 'fixed',
  right: 0,
  top: 0,
  height: '100vh',
  zIndex: 1000,
  display: 'flex',
  alignItems: 'start',
  justifyContent: 'start',
  flexDirection: 'column',
  backgroundColor: '#EAF0F6',
  paddingTop: '5em',
});

const HomeSlip = () => {
  return (
    <StickyBox>
      <Box
        sx={{
          marginTop: '2em',
          width: '50%',
          height: '80vh',
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
            height: '5vh',
            backgroundColor: 'white',
            display: 'flex',
            boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
            display: 'flex',
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
              0{' '}
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
            Betslip{' '}
          </Typography>
        </Box>
        <SvgIcon
          component={InsertDriveFileIcon}
          sx={{
            height: { md: '20px', lg: '40px', xl: '100px' },
            width: { md: '20px', lg: '40px', xl: '100px' },
            color: '#00499B ',
            marginTop: '30%',
            display: {
              xs: 'none',
              sm: 'none',
              md: 'none',
              lg: 'inline',
            },
          }}
        />
        <Typography
          sx={{
            color: 'black',
            fontFamily: 'Birds',
            fontWeight: 'bold',
            fontSize: '18px',
            marginLeft: '5px',
          }}
        >
          Betslip empty
        </Typography>
        <Typography
          sx={{
            color: 'black',
            fontFamily: 'Birds',
            fontSize: '14px',
            marginLeft: '5px',
          }}
        >
          Add selections to place bet
        </Typography>
      </Box>
    </StickyBox>
  );
};

export default HomeSlip;
