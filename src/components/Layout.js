import * as React from 'react';
import AppAppBar from './AppAppBar';
import Footer from './Footer';
import Box from '@mui/material/Box';

export default function Layout({ children, headerImage }) {
  return (
    <Box>
      <AppAppBar mode="light" toggleColorMode={() => {}} />
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
