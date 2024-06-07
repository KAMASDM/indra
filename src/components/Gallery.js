import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { useTheme } from '@mui/material/styles';
import Layout from './Layout';
import headerImage from '../assets/rasodu-3.png';

const events = [
  { title: 'Event 1', src: 'assets/event1.jpg', alt: 'Event 1' },
  { title: 'Event 2', src: 'assets/event2.jpg', alt: 'Event 2' },
  { title: 'Event 3', src: 'assets/event3.jpg', alt: 'Event 3' },
];

const initiatives = [
  { title: 'Initiative 1', src: 'assets/initiative1.jpg', alt: 'Initiative 1' },
  { title: 'Initiative 2', src: 'assets/initiative2.jpg', alt: 'Initiative 2' },
  { title: 'Initiative 3', src: 'assets/initiative3.jpg', alt: 'Initiative 3' },
];

export default function Gallery() {
  const theme = useTheme();

  return (
    <Layout headerImage={headerImage}>
      <Box sx={{ py: 8 }}>
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

      <Box sx={{ py: 8, backgroundColor: theme.palette.background.default }}>
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
      </Box>
    </Layout>
  );
}
