import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import { useTheme } from "@mui/material/styles";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import getLPTheme from "../../theme/getLPTheme";
import Hero from "../HeroBanner/Hero";
import Cards from "../BannerCard/Card";

const events = [
    {
        title:
            "Stepping Towards Compassion: Indraprasth Foundation's Footwear Donation Drive",
        src: "https://indraprasthfoundation.org//BaaProject/media/8.webp",
        alt: "Event 1",
        description:
            "In the vast tapestry of life, often, it's the smallest gestures that leave the most profound impact. For many of us, footwear is a taken-for-granted luxury. We choose, switch, and discard them with little thought. But for some, the luxury of a",
    },
    {
        title:
            "Crafting a Sustainable Future: Indraprasth Foundation’s Ganesh Idol Making Workshop",
        src: "https://indraprasthfoundation.org/BaaProject/media/WhatsApp_Image_2023-09-10_at_9.53.28_PM.png",
        alt: "Event 2",
        description:
            "In a world increasingly dominated by convenience and consumerism, it's essential to pause and reflect on our actions and their consequences. The environment, our most prized possession, needs champions who not only speak for it but also act to",
    },
    {
        title: "Indraprasth Nu Rasodu: A Beacon of Hope and Nourishment on Wheels",
        src: "https://indraprasthfoundation.org/BaaProject/media/rasodu-3.png",
        alt: "Event 3",
        description:
            "In the vibrant streets of Gotri Road, as the world wakes up to the chirping of birds and the hustle and bustle of a new day, there emerges a sight that brings hope and solace to many – the 'Indraprasth Nu Rasodu' food truck.",
    },
];

// const initiatives = [
//   { title: 'Initiative 1', src: 'assets/initiative1.jpg', alt: 'Initiative 1' },
//   { title: 'Initiative 2', src: 'assets/initiative2.jpg', alt: 'Initiative 2' },
//   { title: 'Initiative 3', src: 'assets/initiative3.jpg', alt: 'Initiative 3' },
// ];

export default function Blogs() {
    const theme = useTheme();
    const [mode, setMode] = React.useState("light");

    const LPtheme = createTheme(getLPTheme(mode));

    return (
        <ThemeProvider theme={LPtheme}>
            <CssBaseline />
            <Hero />
            <Cards title="Blogs" />

            <Container>
                <Box sx={{ py: 8, backgroundColor: theme.palette.background.default }}>
                    <Typography
                        variant="h4"
                        gutterBottom
                        align="center"
                        color={theme.palette.primary.main}
                    >

                    </Typography>
                    <Grid container spacing={4}>
                        {events.map((event, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Card
                                    sx={{
                                        boxShadow: theme.shadows[3],
                                        backgroundColor: theme.palette.background.paper,
                                    }}
                                >
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
                                        <Typography
                                            variant="h5"
                                            color={theme.palette.primary.black}
                                        >
                                            {event.description}
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
        </ThemeProvider>
    );
}
