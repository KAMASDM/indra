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
import headerImage from '../../assets/rasodu-3.png';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import getLPTheme from '../../theme/getLPTheme';
import Hero from '../HeroBanner/Hero';
import Cards from "../BannerCard/Card"

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

export default function Events() {
    const theme = useTheme();
    const [mode, setMode] = React.useState('light');

    const LPtheme = createTheme(getLPTheme(mode));

    return (
        <ThemeProvider theme={LPtheme}>
            <CssBaseline />
            <Hero />
            <Cards
                title="Events"
            />

        </ThemeProvider>
    );
}
