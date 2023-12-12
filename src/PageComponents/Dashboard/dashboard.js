import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../Dashboard/src/theme/theme'; // Adjust path as needed
import MainDashboard from './src/views/admin/default';
import NavBar from '../NavBar/navbar';

function Dashboard() {
  return (
    <>
      <NavBar />
      <ChakraProvider theme={theme}>
        <MainDashboard />
      </ChakraProvider>
    </>
  );
}

export default Dashboard;
