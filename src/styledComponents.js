import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import './index.css';
import './navlink.css';

const MyLoginButton = (props) => (
  <Button
    variant='contained'
    sx={{
      paddingBottom: '5px',
      width: '113px',
      height: '39px',
      background: `#0070EB`,
      color: 'white',
      borderRadius: '5px',
      '&:hover': {
        color: 'white',
        background: '#0070EB',
        fontWeight: 'bold',
      },
      fontFamily: 'Birds',
    }}
  >
    Log In
  </Button>
);

const MyJoinButton = (props) => (
  <Button
    variant='contained'
    sx={{
      paddingBottom: '5px',
      width: '113px',
      height: '39px',
      background: `#128000`,
      color: 'white',
      borderRadius: '5px',
      '&:hover': {
        color: 'white',
        background: '#128000',
        fontWeight: 'bold',
      },
      fontFamily: 'Birds',
    }}
    href='/appointment'
  >
    Join
  </Button>
);

const OpenCloseButton = (props) => (
  <Button
    variant='contained'
    sx={{
      marginLeft: 'auto',
      height: '2em',
      padding: 'none',
      width: '1px',
      color: 'black',
    }}
  ></Button>
);

export { MyLoginButton, MyJoinButton, OpenCloseButton };
