import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { useTheme } from "@mui/material/styles";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";

const IMAGES_PER_PAGE = 12;

export default function ViewGallery() {
    const theme = useTheme();
    const { id } = useParams();
    const [images, setImages] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        axios
            .get(
                `https://indraprasthfoundation.org/api/category/images?category_id=${id}&page=${currentPage}&limit=${IMAGES_PER_PAGE}`
            )
            .then((response) => {
                const { results, total_pages } = response.data;
                setImages((prevImages) => [...prevImages, ...results]);
                setTotalPages(total_pages);
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
            });
    }, [id, currentPage]);

    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };


    return (
        <Container>
            <Box sx={{ py: 12, backgroundColor: theme.palette.background.default }}>
                <Typography
                    variant="h4"
                    gutterBottom
                    align="center"
                    color={theme.palette.primary.main}
                >
                    Gallery
                </Typography>
                <Grid container spacing={4}>
                    {images.map((image, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card
                                sx={{
                                    boxShadow: theme.shadows[3],
                                    backgroundColor: theme.palette.background.paper,
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    height="250"
                                    image={image.image}
                                    alt={image.alt}
                                />
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                <Box sx={{ textAlign: 'center', marginTop: 4, width: '100px' }}>
                    <Button
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                        color="primary"
                        fullWidth
                        sx={{ mr: 1 }}
                    >

                        View More
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}
