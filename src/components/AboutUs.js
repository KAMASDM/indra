import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { useTheme } from '@mui/material/styles';
import Layout from './Layout';
import headerImage from '../assets/rasodu-3.png';

const licenses = [
  { src: 'assets/license1.jpg', alt: 'License 1' },
  { src: 'assets/license2.jpg', alt: 'License 2' },
  { src: 'assets/license3.jpg', alt: 'License 3' },
];

const initiatives = [
  {
    title: 'Indraprasth Nu Rasodu',
    description: 'A testament to our commitment to combat hunger, this initiative has provided free meals to over 200,000 people in just 18 months, ensuring that no one in our community goes to bed on an empty stomach.',
  },
  {
    title: 'Blanket Donations',
    description: 'Recognizing the harsh realities of winter, we distribute warm blankets to those in need, ensuring they are shielded from the biting cold.',
  },
  {
    title: 'Educational Support',
    description: 'Every child deserves the right to education, and with our notebook donation drives, we strive to equip them with the tools they need to carve out a brighter future.',
  },
  {
    title: 'Footwear Donations',
    description: 'Walking miles can become a bit easier with the right pair of shoes. We aim to protect the feet of the less fortunate, ensuring they tread their paths with a bit more comfort.',
  },
  {
    title: 'Ganesh Utsav',
    description: 'Undoubtedly, our community\'s favorite initiative, our eco-friendly Ganesh Visarjan event has been a beacon of sustainable celebration in Vadodara for the past eight years. We are proud to offer a platform that celebrates tradition while safeguarding the environment.',
  },
];

export default function AboutUs() {
  const theme = useTheme();

  return (
    <Layout headerImage={headerImage}>
      {/* Licenses and Other Images */}
      <Box sx={{ py: 8 }}>
        <Typography variant="h4" gutterBottom align="center" color={theme.palette.primary.main}>
          About Indraprasth Foundation
        </Typography>
        <Grid container spacing={4}>
          {licenses.map((license, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ boxShadow: theme.shadows[3], backgroundColor: theme.palette.background.paper }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={license.src}
                  alt={license.alt}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Mission and Vision Statements */}
      <Box sx={{ py: 8, backgroundColor: theme.palette.background.default }}>
        <Typography variant="h4" gutterBottom align="center" color={theme.palette.primary.main}>
          Our Mission & Vision
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card sx={{ boxShadow: theme.shadows[3], backgroundColor: theme.palette.background.paper }}>
              <CardContent>
                <Typography variant="h5" gutterBottom color={theme.palette.primary.dark}>
                  Mission
                </Typography>
                <Typography variant="body1" color={theme.palette.text.primary}>
                  To foster a compassionate community where every individual is empowered, where hunger and deprivation are memories of the past, and where sustainable practices pave the way for a brighter, eco-conscious future.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ boxShadow: theme.shadows[3], backgroundColor: theme.palette.background.paper }}>
              <CardContent>
                <Typography variant="h5" gutterBottom color={theme.palette.primary.dark}>
                  Vision
                </Typography>
                <Typography variant="body1" color={theme.palette.text.primary}>
                  To create a society where every person has the opportunity to live a healthy, fulfilling life, and to be a leading force in promoting environmental sustainability and social well-being.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Our Initiatives */}
      <Box sx={{ py: 8, backgroundColor: theme.palette.background.default }}>
        <Typography variant="h4" gutterBottom align="center" color={theme.palette.primary.main}>
          Our Initiatives
        </Typography>
        <Grid container spacing={4}>
          {initiatives.map((initiative, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ boxShadow: theme.shadows[3], backgroundColor: theme.palette.background.paper }}>
                <CardContent>
                  <Typography variant="h5" gutterBottom color={theme.palette.primary.dark}>
                    {initiative.title}
                  </Typography>
                  <Typography variant="body1" color={theme.palette.text.primary}>
                    {initiative.description}
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
