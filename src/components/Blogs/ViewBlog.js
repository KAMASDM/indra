import React, { useEffect } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function ViewBlog() {
    const theme = useTheme();
    const { id } = useParams();
    const [data, setData] = useState({});

    useEffect(() => {
        axios
            .get(`https://indraprasthfoundation.org/api/blogretupddelview/${id}`)
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
            });
    }, [id]);

    return (
        <Container
        >
            <Box sx={{ py: 12, backgroundColor: theme.palette.background.default }}>
                <Typography
                    variant="h4"
                    gutterBottom
                    align="center"
                    color={theme.palette.primary.main}
                >
                    {data.title}
                </Typography>
                <Grid
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Grid item xs={12} md={6}>
                        <Card
                            sx={{
                                boxShadow: theme.shadows[3],
                                backgroundColor: theme.palette.background.paper,
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <CardMedia
                                component="img"
                                height="400"
                                image={data.image}
                                alt={data.title}
                                sx={{
                                    objectFit: "cover",
                                    objectPosition: "center top",
                                }}
                            />
                            <CardContent>
                                <Typography variant="body1" color={theme.palette.text.primary}>
                                    <div dangerouslySetInnerHTML={{ __html: data.text }} />
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}
