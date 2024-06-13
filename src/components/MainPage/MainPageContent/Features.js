import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import MuiChip from '@mui/material/Chip';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import RestaurantRoundedIcon from '@mui/icons-material/RestaurantRounded';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import DirectionsWalkRoundedIcon from '@mui/icons-material/DirectionsWalkRounded';
import CelebrationIcon from '@mui/icons-material/Celebration';

const initiatives = [
  {
    icon: <RestaurantRoundedIcon />,
    title: 'Indraprasth Nu Rasodu',
    description:
      'A testament to our commitment to combat hunger, this initiative has provided free meals to over 200,000 people in just 18 months, ensuring that no one in our community goes to bed on an empty stomach.',
    images: [
      'url("https://www.ourvadodara.com/wp-content/uploads/2022/12/indraprasth-yuvak-mandal-1.jpeg")',
      'url("https://pbs.twimg.com/media/FPZpGekWQAMCqYY.jpg")',
      'url("https://indraprasthfoundation.org/BaaProject/media/rasodu-3.png")'
    ],
  },
  {
    icon: <WbSunnyRoundedIcon />,
    title: 'Blanket Donations',
    description:
      'Recognizing the harsh realities of winter, we distribute warm blankets to those in need, ensuring they are shielded from the biting cold.',
    images: [
      'url("https://indraprasthfoundation.org/BaaProject/media/blanket-1.png")',
      'url("https://pbs.twimg.com/media/FPZpGekWQAMCqYY.jpg")',
      'url("https://indraprasthfoundation.org/BaaProject/media/rasodu-3.png")'
    ],
  },
  {
    icon: <SchoolRoundedIcon />,
    title: 'Educational Support',
    description:
      'Every child deserves the right to education, and with our notebook donation drives, we strive to equip them with the tools they need to carve out a brighter future.',
    images: [
      'url("https://www.ourvadodara.com/wp-content/uploads/2022/12/indraprasth-yuvak-mandal-1.jpeg")',
      'url("https://pbs.twimg.com/media/FPZpGekWQAMCqYY.jpg")',
      'url("https://indraprasthfoundation.org/BaaProject/media/rasodu-3.png")'
    ],
  },
  {
    icon: <DirectionsWalkRoundedIcon />,
    title: 'Footwear Donations',
    description:
      'Walking miles can become a bit easier with the right pair of shoes. We aim to protect the feet of the less fortunate, ensuring they tread their paths with a bit more comfort.',
    images: [
      'url("https://indraprasthfoundation.org/BaaProject/media/footwear.png")',
      'url("https://pbs.twimg.com/media/FPZpGekWQAMCqYY.jpg")',
      'url("https://indraprasthfoundation.org/BaaProject/media/rasodu-3.png")'
    ],
  },
  {
    icon: <CelebrationIcon />,
    title: 'Ganesh Utsav',
    description:
      'Our eco-friendly Ganesh Visarjan event has been a beacon of sustainable celebration in Vadodara for the past eight years. We are proud to offer a platform that celebrates tradition while safeguarding the environment.',
    images: [
      'url("https://indraprasthfoundation.org/BaaProject/media/Ganesh-Aagman-2023-DSC_0236.webp")',
      'url("https://indraprasthfoundation.org/BaaProject/media/WhatsApp_Image_2023-09-18_at_9.40.36_PM_1.webp")',
      'url("https://indraprasthfoundation.org/BaaProject/media/Ganesh-Aagman-2023-DSC_0039.webp")'
    ],
  },
];

const Chip = styled(MuiChip)(({ theme, selected }) => ({
  ...(selected && {
    borderColor:
      theme.palette.mode === 'light'
        ? theme.palette.primary.light
        : theme.palette.primary.dark,
    background:
      'linear-gradient(to bottom right, hsl(210, 98%, 48%), hsl(210, 98%, 35%))',
    color: 'hsl(0, 0%, 100%)',
    '& .MuiChip-label': {
      color: 'hsl(0, 0%, 100%)',
    },
  }),
}));

export default function OurInitiatives() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  const handleItemClick = (index) => {
    setSelectedItemIndex(index);
  };

  const selectedInitiative = initiatives[selectedItemIndex];

  return (
    <Container id="our-initiatives" sx={{ py: { xs: 8, sm: 10 } }}>
      <Grid container spacing={6}>
        <Grid item xs={8} md={6}>
          <div>
            <Typography component="h2" variant="h4" color="text.primary">
              Our Initiatives
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: { xs: 2, sm: 4 } }}
            >
              Discover our key initiatives aimed at supporting the community and
              fostering a better future for all.
            </Typography>
          </div>
          <Grid container item gap={1} sx={{ display: { xs: 'auto', sm: 'none' } }}>
            {initiatives.map(({ title }, index) => (
              <Chip
                key={index}
                label={title}
                onClick={() => handleItemClick(index)}
                selected={selectedItemIndex === index}
              />
            ))}
          </Grid>
          <Card
            variant="outlined"
            sx={{
              display: { xs: 'auto', sm: 'none' },
              mt: 4,
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {selectedInitiative.images.map((image, idx) => (
                <Box
                  key={idx}
                  sx={{
                    backgroundImage: image,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: 100,
                    width: '100%',
                  }}
                />
              ))}
            </Box>
            <Box sx={{ px: 2, pb: 2 }}>
              <Typography color="text.primary" fontWeight="medium" gutterBottom>
                {selectedInitiative.title}
              </Typography>
              <Typography color="text.secondary" variant="body2" sx={{ mb: 1.5 }}>
                {selectedInitiative.description}
              </Typography>
              <Link
                color="primary"
                variant="body2"
                fontWeight="bold"
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  '& > svg': { transition: '0.2s' },
                  '&:hover > svg': { transform: 'translateX(2px)' },
                }}
              >
                <span>Learn more</span>
                <ChevronRightRoundedIcon
                  fontSize="small"
                  sx={{ mt: '1px', ml: '2px' }}
                />
              </Link>
            </Box>
          </Card>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            spacing={2}
            useFlexGap
            sx={{ width: '100%', display: { xs: 'none', sm: 'flex' } }}
          >
            {initiatives.map(({ icon, title, description }, index) => (
              <Card
                key={index}
                component={Button}
                onClick={() => handleItemClick(index)}
                sx={(theme) => ({
                  p: 3,
                  height: 'fit-content',
                  width: '100%',
                  background: 'none',
                  ...(selectedItemIndex === index && {
                    backgroundColor: 'action.selected',
                    borderColor:
                      theme.palette.mode === 'light'
                        ? 'primary.light'
                        : 'primary.dark',
                  }),
                  '&:hover': {
                    background:
                      theme.palette.mode === 'light'
                        ? 'linear-gradient(to bottom right, hsla(210, 100%, 97%, 0.5) 25%, hsla(210, 100%, 90%, 0.3) 100%)'
                        : 'linear-gradient(to right bottom, hsla(210, 100%, 12%, 0.2) 25%, hsla(210, 100%, 16%, 0.2) 100%)',
                    borderColor:
                      theme.palette.mode === 'light'
                        ? 'primary.light'
                        : 'primary.dark',
                    boxShadow:
                      theme.palette.mode === 'light'
                        ? '0px 2px 8px hsla(0, 0%, 0%, 0.1)'
                        : '0px 1px 8px hsla(210, 100%, 25%, 0.5) ',
                  },
                })}
              >
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    textAlign: 'left',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: { md: 'center' },
                    gap: 2.5,
                  }}
                >
                  <Box
                    sx={(theme) => ({
                      color:
                        theme.palette.mode === 'light' ? 'grey.400' : 'grey.600',
                      ...(selectedItemIndex === index && {
                        color: 'primary.main',
                      }),
                    })}
                  >
                    {icon}
                  </Box>
                  <div>
                    <Typography
                      color="text.primary"
                      fontWeight="medium"
                      gutterBottom
                    >
                      {title}
                    </Typography>
                    <Typography
                      color="text.secondary"
                      variant="body2"
                      sx={{ mb: 1.5 }}
                    >
                      {description}
                    </Typography>
                    <Link
                      color="primary"
                      variant="body2"
                      fontWeight="bold"
                      sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        '& > svg': { transition: '0.2s' },
                        '&:hover > svg': { transform: 'translateX(2px)' },
                      }}
                      onClick={(event) => {
                        event.stopPropagation();
                      }}
                    >
                      <span>Learn more</span>
                      <ChevronRightRoundedIcon
                        fontSize="small"
                        sx={{ mt: '1px', ml: '2px' }}
                      />
                    </Link>
                  </div>
                </Box>
              </Card>
            ))}
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: { xs: 'none', sm: 'flex' }, width: '100%' }}
        >
          <Card
            variant="outlined"
            sx={{
              height: '100%',
              width: '100%',
              display: { xs: 'none', sm: 'flex' },
              pointerEvents: 'none',
            }}
          >
            <Stack sx={{ width: '100%', height: '100%', gap: 2 }}>
              {selectedInitiative.images.map((image, idx) => (
                <Box
                  key={idx}
                  sx={{
                    backgroundImage: image,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    flexGrow: 1,
                  }}
                />
              ))}
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
