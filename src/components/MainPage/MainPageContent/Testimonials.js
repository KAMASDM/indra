import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/system';

const userTestimonials = [
  {
    name: '- Rajesh Bhatt',
    service: "Indraprasth Nu Rasodu(Free Nutritious Meals)",
    testimonial:
      "Donating to Indraprasth Nu Rasodu has been one of the most fulfilling experiences of my life.Knowing that my contributions help provide nutritious meals to those in need brings me immense joy.This organization is truly making a difference in our community."
    ,
  },
  {
    name: '- Sneha Gupta',
    testimonial:
      "As a donor to Indraprasth Nu Rasodu, I am proud to support a cause that ensures no one goes hungry. The dedication of the team and the impact of their work is inspiring. I encourage everyone to contribute to this noble initiative."
    ,
  },
  {
    name: '- Vikram Sharma',
    service: "Footwear Donation",
    testimonial:
      "Donating footwear through this program has been an eye-opener. It's incredible how something as simple as a pair of shoes can transform someone's life. Indraprasth Nu Rasodu ensures that our donations reach those who need them the most, making every contribution count."
    ,
  },
  {
    name: '- Neha Joshi',
    testimonial:
      "I am grateful for the opportunity to donate footwear to those in need. Seeing the smiles on the faces of children who receive new shoes is priceless. Indraprasth Nu Rasodu’s commitment to helping the underprivileged is truly commendable."
    ,
  },
  {
    name: '- Arjun Mehta',
    service: "Discounted Books for Underprivileged Kids",
    testimonial:
      "Contributing to the discounted books program has been incredibly rewarding. Education is a powerful tool, and knowing that my donations are helping children access quality books and learning materials is heartwarming. Indraprasth Nu Rasodu is paving the way for a brighter future."
    ,
  },
  {
    name: '- Pooja Desai',
    testimonial:
      "I believe in the power of education, and donating to this cause has been a wonderful experience. Indraprasth Nu Rasodu’s initiative to provide discounted books to underprivileged kids is making a significant impact. It feels great to be a part of this journey."
    ,
  },
  {
    name: '- Karan Patel',
    service: "Free Blanket Donation",
    testimonial:
      "Donating blankets through Indraprasth Nu Rasodu has allowed me to make a tangible difference in people's lives, especially during the harsh winters. It’s reassuring to know that my contributions are helping to keep people warm and safe."

    ,
  },
  {
    name: '- Ritu Shah',
    testimonial:
      "I am honored to support the free blanket donation program. The team at Indraprasth Nu Rasodu ensures that our donations reach the most vulnerable, providing them with warmth and comfort. This initiative is truly heartwarming, and I am proud to be a part of it."
    ,
  },

];

export default function Testimonials() {
  const theme = useTheme();

  return (
    <Container
      id="testimonials"
      sx={{
        pt: { xs: 4, sm: 8 },
        pb: { xs: 8, sm: 8 },
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
        <Typography component="h2" variant="h4" color="text.primary">
          Testimonials
        </Typography>

      </Box>
      <Grid container spacing={2}>
        {userTestimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flexGrow: 1,
                p: 1,
                border: '1px solid',
                borderColor: 'grey.300',
              }}
            >
              <CardContent>
                <Typography variant="body2" >
                  {testimonial.service}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {testimonial.testimonial}
                </Typography>
              </CardContent>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  pr: 2,
                }}
              >
                <CardHeader
                  title={testimonial.name}
                />
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}