import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../Dashboard/src/theme/theme'; // Adjust path as needed
import MainDashboard from './src/views/admin/default';
import NavBar from '../NavBar/navbar';
import Box from '@mui/material/Box';

function Dashboard() {
  return (
    <>
      <NavBar />
      <Box sx={{ width: '100%', height: 'auto', padding: '1em' }}>
        <ChakraProvider theme={theme}>
          <MainDashboard />
        </ChakraProvider>
      </Box>
    </>
  );
}

export default Dashboard;
