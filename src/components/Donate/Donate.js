import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import { useTheme } from '@mui/material/styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import getLPTheme from '../../theme/getLPTheme';
import Hero from '../HeroBanner/Hero';
import Cards from "../BannerCard/Card"
import DonateImg from "../../assets/Donate.jpeg"

export default function Donate() {
    const theme = useTheme();
    const [mode, setMode] = React.useState('light');

    const LPtheme = createTheme(getLPTheme(mode));

    return (
        <ThemeProvider theme={LPtheme}>
            <CssBaseline />
            <Hero imageHeight={550} />
            <Cards title="Donate" />

            <Grid container spacing={4} justifyContent="center" style={{ marginBottom: '30px' }}>
                <Grid item xs={12} sm={6} md={4}>
                    <Typography
                        variant="h5"
                        sx={{
                            fontSize: 'clamp(2rem, 8vw, 2.5rem)',
                            textAlign: 'center',
                        }}
                    >
                        માત્ર સેવા જ
                    </Typography>
                    <Card
                        sx={{
                            boxShadow: theme.shadows[3],
                            backgroundColor: theme.palette.background.paper,
                        }}
                    >
                        <CardMedia
                            component="img"
                            image={DonateImg}
                            style={{ objectFit: 'cover', }}
                        />
                    </Card>
                </Grid>
            </Grid>



        </ThemeProvider>
    );
}
