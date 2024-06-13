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
import Button from '@mui/material/Button';

const events = [
    { title: 'Ganesh-Idol Making', src: "https://indraprasthfoundation.org//BaaProject/media/8.webp", alt: 'Ganesh-Idol Making' },
    { title: 'Ganesh Aagman', src: 'https://indraprasthfoundation.org//BaaProject/media/WhatsApp_Image_2023-09-18_at_9.40.36_PM_1.webp', alt: 'Ganesh Aagman' },
    { title: 'Drawing Competetion', src: 'https://indraprasthfoundation.org//BaaProject/media/DSC_0190.webp', alt: 'Drawing Competetion' },
    { title: 'Millet Recipe Competition', src: 'https://indraprasthfoundation.org//BaaProject/media/DSC05446.webp', alt: 'Millet Recipe Competition' },
    { title: 'Media Coverage', src: 'https://indraprasthfoundation.org/BaaProject/media/WhatsApp_Image_2024-04-05_at_16.27.10.jpeg', alt: 'Media Coverage' },
];


export default function Events() {
    const theme = useTheme();
    const [mode, setMode] = React.useState('light');

    const LPtheme = createTheme(getLPTheme(mode));

    return (
        <ThemeProvider theme={LPtheme}>
            <CssBaseline />
            <Hero imageHeight={550} />
            <Cards
                title="Events"
            />

            <Container
            >
                <Box sx={{ py: 4, backgroundColor: theme.palette.background.default }}>
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
                                        <Typography variant="h5" color={theme.palette.primary.dark} >
                                            {event.title}
                                            <Button variant="contained" size="small" sx={{ marginLeft: 2 }} href="/gallery">View</Button>
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>

        </ThemeProvider >
    );
}
