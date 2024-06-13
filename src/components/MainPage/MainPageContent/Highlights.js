import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import blanketImage from '../../../assets/blanket.png';
import notebookImage from '../../../assets/notebook.png';
import bicycleImage from '../../../assets/bicycle.png';
import ganeshImage from '../../../assets/ganesh.png';
import footwearImage from '../../../assets/footwear.png';
import holikaImage from '../../../assets/blood.png';

const items = [
  {
    image: blanketImage,
    title: 'Blanket Donation',
    description: '30,000 Blankets Donated and Counting.',
  },
  {
    image: notebookImage,
    title: 'Discounted Notebook Distribution',
    description: 'More than 1 Lakh Notebooks Distributed at discounted rates.',
  },
  {
    image: bicycleImage,
    title: 'Bicycle Donation',
    description: 'More than 2000 Bicycles Donated to Young School Girls.',
  },
  {
    image: ganeshImage,
    title: 'Eco Friendly Ganesh Visarjan',
    description: 'More than 25000 GANESH Idol Visarjan done since last 8 years.',
  },
  {
    image: footwearImage,
    title: 'Footwear Donation',
    description: 'Ten Thousand Plus Footwear donated to the young and Poor.',
  },
  {
    image: holikaImage,
    title: 'Blood Donation Camp',
    description: 'More than 1000 Units of Blood Collected in the Camp.',
  },
];

export default function Highlights() {
  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 8 },
        pb: { xs: 8, sm: 8 },
        color: 'white',
        bgcolor: 'hsl(220, 30%, 2%)',
      }}
    >
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: '100%', md: '60%' },
            textAlign: { sm: 'left', md: 'center' },
          }}
        >
          <Typography component="h2" variant="h4">
            Highlights
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.400' }}>
            Explore our impactful initiatives that support the community and foster a better future for all.
          </Typography>
        </Box>
        <Grid container spacing={2.5}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  p: 2,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'hsla(220, 25%, 25%, .3)',
                  backgroundColor: 'background.paper',
                  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              >
                <Stack
                  direction="column"
                  spacing={2}
                  alignItems="center"
                  useFlexGap
                >
                  <Box
                    component="img"
                    sx={{
                      height: 200,
                      width: '100%',
                      objectFit: 'cover',
                      borderRadius: '8px',
                    }}
                    src={item.image}
                    alt={item.title}
                  />
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography fontWeight="medium" gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'grey.600' }}>
                      {item.description}
                    </Typography>
                  </Box>
                </Stack>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
