import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppAppBar from './AppAppBar';
import Hero from './Hero';
import Highlights from './Highlights';

import Features from './Features'; // Rename this component to OurInitiatives if needed
import Testimonials from './Testimonials';
import FAQ from './FAQ';
import Footer from './Footer';

import getLPTheme from '../theme/getLPTheme';
import styled, { keyframes } from 'styled-components';


const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// const FixedLogo = styled.img`
//   position: fixed;
//   left: 20px;
//   top: 50%;
//   transform: translateY(-50%);
//   width: 100px;
//   height: 100px;
//   animation: ${rotate} 5s linear infinite;
// `;

export default function LandingPage() {
  const [mode, setMode] = React.useState('light');
  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const LPtheme = createTheme(getLPTheme(mode));

  return (
    <ThemeProvider theme={LPtheme}>
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      {/* <FixedLogo src={logo} alt="Logo" /> */}
      <Hero />
      <Divider /> {/* Added divider between Hero and Our Initiatives */}
      <Box id="our-initiatives" sx={{ bgcolor: 'background.default' }}>
        <Features /> {/* This is the Our Initiatives section */}
        <Divider />
        <Testimonials />
        <Divider />
        <Highlights />
        <Divider />
        <FAQ />
        <Divider />
        
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
