import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Hero from '../HeroBanner/Hero';
import Highlights from './MainPageContent/Highlights';
import Features from './MainPageContent/Features';
import Testimonials from './MainPageContent/Testimonials';
import FAQ from '../Faq/FAQ';
import getLPTheme from '../../theme/getLPTheme';
import Cards from "../BannerCard/Card"

export default function Main() {
  const [mode, setMode] = React.useState('light');

  const LPtheme = createTheme(getLPTheme(mode));
  return (
    <ThemeProvider theme={LPtheme}>
      <CssBaseline />
      <Hero />
      <Cards
        title="Indraprasth Foundation"
        subtitle="Charitable Trust"
        description="By harnessing the collective power of visionaries, volunteers, and supporters, we strive to make Vadodara a beacon of hope, prosperity, and unity for all."
      />
      <Divider />
      <Box id="our-initiatives" sx={{ bgcolor: 'background.default' }}>
        <Features />
        <Divider />
        <Testimonials />
        <Divider />
        <Highlights />
        <Divider />
        <FAQ />
        <Divider />
      </Box>
    </ThemeProvider>
  );
}
