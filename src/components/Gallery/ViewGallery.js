import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { useTheme } from "@mui/material/styles";

const events = [
    {
        src: "https://indraprasthfoundation.org//BaaProject/media/8.webp",
        alt: "Event 1",

    },
    {
        src: "https://indraprasthfoundation.org/BaaProject/media/WhatsApp_Image_2023-09-10_at_9.53.28_PM.png",
        alt: "Event 2",
    },
    {
        src: "https://indraprasthfoundation.org/BaaProject/media/rasodu-3.png",
        alt: "Event 3",
    },
];


export default function ViewGallery() {
    const theme = useTheme();
    return (
        <Container>
            <Box sx={{ py: 12, backgroundColor: theme.palette.background.default }}>
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

                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
}
