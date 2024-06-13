import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import CardContent from '@mui/material/CardContent';
import { useTheme } from '@mui/material/styles';
import Hero from '../HeroBanner/Hero';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import getLPTheme from '../../theme/getLPTheme';
import Cards from "../BannerCard/Card"

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
  const [mode, setMode] = React.useState('light');

  const theme = useTheme();
  const LPtheme = createTheme(getLPTheme(mode));

  return (
    <ThemeProvider theme={LPtheme}>
      {/* <Loader logo={logo} /> */}
      <Hero imageHeight={550} />
      <Cards
        title="About Us"
      />

      <Container
        id="testimonials"
        sx={{
          pt: { xs: 4, sm: 4 },
          pb: { xs: 8, sm: 8 },
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box sx={{ backgroundColor: theme.palette.background.default }}>
          <Typography variant="h4" gutterBottom align="center" color={theme.palette.primary.main} >
            About Indraprasth Foundation
          </Typography>
          <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Grid item xs={12} md={6}>
              <Card sx={{ boxShadow: theme.shadows[3], backgroundColor: theme.palette.background.paper, display: 'flex', alignItems: 'center' }}>
                <CardContent>
                  <Typography variant="body1" color={theme.palette.text.primary}>
                    <b>Indraprasth Foundation: Lighting the Way for a Brighter Tomorrow</b>
                  </Typography>
                  <Typography variant="body1" color={theme.palette.text.primary}>
                    From its inception as a budding idea to support the less fortunate, Indraprasth Foundation has grown and blossomed into one of the most esteemed NGOs in Vadodara City. Our journey began with the unwavering support and vision of Mrs. Ranjanben Bhatt, our honorable Member of Parliament, and the dedication of Shri Jayendra Shah. As we navigated through our mission to bring hope and relief to countless lives, many other visionaries joined our ranks, fortifying our cause and amplifying our impact.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>


        {/* Mission and Vision Statements */}
        <Box sx={{ py: 2, backgroundColor: theme.palette.background.default }}>
          <Typography variant="h4" gutterBottom align="center" color={theme.palette.primary.main}>
            Our Mission & Vision
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card sx={{ boxShadow: theme.shadows[3], backgroundColor: theme.palette.background.paper, height: '100%' }}>
                <CardContent style={{ height: '100%' }}>
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
              <Card sx={{ boxShadow: theme.shadows[3], backgroundColor: theme.palette.background.paper, height: '100%' }}>
                <CardContent style={{ height: '100%' }}>
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
        <Box sx={{ backgroundColor: theme.palette.background.default }}>
          <Typography variant="h4" gutterBottom align="center" color={theme.palette.primary.main}>
            Our Initiatives
          </Typography>
          <Grid container spacing={4}>
            {initiatives.map((initiative, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%', boxShadow: theme.shadows[3], backgroundColor: theme.palette.background.paper }}>
                  <CardContent style={{ flexGrow: 1 }}>
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

      </Container>

    </ThemeProvider>
  );
}
