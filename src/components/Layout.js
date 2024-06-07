import * as React from 'react';
import Navbar from './Navbar';
import Footer from './Footer/Footer';
import Box from '@mui/material/Box';

export default function Layout({ children, headerImage }) {
  return (
    <Box>
      <Navbar mode="light" toggleColorMode={() => { }} />
      <Box
        component="img"
        src={headerImage}
        alt="Header"
        sx={{
          width: '100%',
          height: 'auto',
          maxHeight: '400px',
          objectFit: 'cover',
        }}
      />
      {children}
      <Footer />
    </Box>
  );
}
