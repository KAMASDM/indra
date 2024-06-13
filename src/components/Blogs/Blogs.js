import React, { useEffect, useState } from "react";
import axios from "axios";
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
import Button from "@mui/material/Button";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useNavigate } from "react-router-dom";

const BlogItem = ({ blog, theme }) => {
    const navigate = useNavigate();
    const [showFullDescription, setShowFullDescription] = useState(false);

    return (
        <Card
            sx={{
                boxShadow: theme.shadows[3],
                backgroundColor: theme.palette.background.paper,
            }}
            style={{ height: '100%' }}
        >
            <CardMedia
                component="img"
                height="200"
                image={blog.image}
                alt={blog.title}
            />
            <CardContent>
                <Typography variant="h6" color={theme.palette.primary.dark}>
                    {blog.title}
                </Typography>
                <Typography color={theme.palette.primary.black}>
                    {showFullDescription ? (
                        <div dangerouslySetInnerHTML={{ __html: blog.text }} />
                    ) : (
                        <div
                            dangerouslySetInnerHTML={{
                                __html: `${blog.text.slice(0, 100)}...`,
                            }}
                        />
                    )}
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <Button
                            variant="contained"
                            size="small"
                            sx={{ marginLeft: 2 }}
                            onClick={() => navigate(`/Blog/${blog.id}`)}
                        >
                            View
                        </Button>
                    </Box>
                </Typography>
            </CardContent>
        </Card>
    );
};

export default function Blogs() {
    const theme = useTheme();
    const [mode, setMode] = useState("light");
    const [value, setValue] = useState("3");
    const [categories, setCategories] = useState([]);
    const [blogs, setBlogs] = useState([]);

    const LPtheme = createTheme(getLPTheme(mode));

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        axios
            .get("https://indraprasthfoundation.org/api/bloglistview")
            .then((response) => {
                setCategories(response.data.category);
                setBlogs(
                    response.data.blog.map((blog) => ({
                        ...blog,
                        showFullDescription: false,
                    }))
                );
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
            });
    }, []);

    const filterBlogsByCategory = (categoryId) => {
        return blogs.filter((blog) => blog.category === parseInt(categoryId));
    };

    return (
        <ThemeProvider theme={LPtheme}>
            <CssBaseline />
            <Hero imageHeight={550} />
            <Cards title="Blogs" />
            <Container>
                <Box sx={{ width: "100%", typography: "body1" }}>
                    <TabContext value={value}>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                width: "100%",
                                typography: "body1",
                            }}

                        >
                            <TabList
                                onChange={handleChange}
                                aria-label="lab API tabs example"
                                variant="scrollable" scrollButtons="auto"
                            >
                                {categories.map((category) => (
                                    <Tab
                                        key={category.id}
                                        label={category.name}
                                        value={category.id.toString()}
                                    />
                                ))}
                            </TabList>
                        </Box>
                        {categories.map((category) => (
                            <TabPanel key={category.id} value={category.id.toString()}>
                                <Box
                                    sx={{
                                        py: 2,
                                        backgroundColor: theme.palette.background.default,
                                    }}
                                >
                                    <Grid container spacing={4}>
                                        {filterBlogsByCategory(category.id).map((blog, index) => (
                                            <Grid item xs={12} sm={6} md={4} key={index}>
                                                <BlogItem blog={blog} theme={theme} />
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Box>
                            </TabPanel>
                        ))}
                    </TabContext>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
