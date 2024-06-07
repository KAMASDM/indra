import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import { useTheme } from '@mui/material/styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import getLPTheme from '../../theme/getLPTheme';
import Hero from '../HeroBanner/Hero';
import Cards from "../BannerCard/Card"

const events = [
  { title: 'Ganesh-Idol Making', src: "https://indraprasthfoundation.org//BaaProject/media/8.webp", alt: 'Event 1' },
  { title: 'Ganesh Chaturthi', src: 'https://indraprasthfoundation.org//BaaProject/media/WhatsApp_Image_2023-09-18_at_9.40.36_PM_1.webp', alt: 'Event 2' },
  { title: 'Drawing Competetion', src: 'https://indraprasthfoundation.org//BaaProject/media/DSC_0190.webp', alt: 'Event 3' },
];

// const initiatives = [
//   { title: 'Initiative 1', src: 'assets/initiative1.jpg', alt: 'Initiative 1' },
//   { title: 'Initiative 2', src: 'assets/initiative2.jpg', alt: 'Initiative 2' },
//   { title: 'Initiative 3', src: 'assets/initiative3.jpg', alt: 'Initiative 3' },
// ];

export default function Gallery() {
  const theme = useTheme();
  const [mode, setMode] = React.useState('light');

  const LPtheme = createTheme(getLPTheme(mode));

  return (
    <ThemeProvider theme={LPtheme}>
      <CssBaseline />
      <Hero />
      <Cards
        title="Gallery"
      />

      <Container
      >
        <Box sx={{ py: 8, backgroundColor: theme.palette.background.default }}>
          <Typography variant="h4" gutterBottom align="center" color={theme.palette.primary.main}>
            Events
          </Typography>
          <Grid container spacing={4}>
            {events.map((event, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ boxShadow: theme.shadows[3], backgroundColor: theme.palette.background.paper }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={event.src}
                    alt={event.alt}
                  />
                  <CardContent>
                    <Typography variant="h5" color={theme.palette.primary.dark}>
                      {event.title}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* <Box sx={{ py: 8, backgroundColor: theme.palette.background.default }}>
          <Typography variant="h4" gutterBottom align="center" color={theme.palette.primary.main}>
            Our Initiatives
          </Typography>
          <Grid container spacing={4}>
            {initiatives.map((initiative, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ boxShadow: theme.shadows[3], backgroundColor: theme.palette.background.paper }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={initiative.src}
                    alt={initiative.alt}
                  />
                  <CardContent>
                    <Typography variant="h5" color={theme.palette.primary.dark}>
                      {initiative.title}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box> */}

      </Container>

    </ThemeProvider >
  );
}
