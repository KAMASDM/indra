import * as React from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import getLPTheme from "../../theme/getLPTheme";
import Hero from "../HeroBanner/Hero";
import Cards from "../BannerCard/Card";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState, useEffect } from "react";

const initiatives = [
  {
    title: 'Indraprasth Nu Rasodu',
    images: [
      'https://www.ourvadodara.com/wp-content/uploads/2022/12/indraprasth-yuvak-mandal-1.jpeg',
      'https://pbs.twimg.com/media/FPZpGekWQAMCqYY.jpg',
      'https://indraprasthfoundation.org/BaaProject/media/rasodu-3.png'
    ],
  },
  {
    title: 'Blanket Donations',
    images: [
      'https://indraprasthfoundation.org/BaaProject/media/blanket-1.png',
      'https://pbs.twimg.com/media/FPZpGekWQAMCqYY.jpg',
      'https://indraprasthfoundation.org/BaaProject/media/rasodu-3.png'
    ],
  },
  {
    title: 'Educational Support',
    images: [
      'https://www.ourvadodara.com/wp-content/uploads/2022/12/indraprasth-yuvak-mandal-1.jpeg',
      'https://pbs.twimg.com/media/FPZpGekWQAMCqYY.jpg',
      'https://indraprasthfoundation.org/BaaProject/media/rasodu-3.png'
    ],
  },
  {
    title: 'Footwear Donations',
    images: [
      'https://indraprasthfoundation.org/BaaProject/media/footwear.png',
      'https://pbs.twimg.com/media/FPZpGekWQAMCqYY.jpg',
      'https://indraprasthfoundation.org/BaaProject/media/rasodu-3.png'
    ],
  },
  {
    title: 'Ganesh Utsav',
    images: [
      'https://indraprasthfoundation.org/BaaProject/media/Ganesh-Aagman-2023-DSC_0236.webp',
      'https://indraprasthfoundation.org/BaaProject/media/WhatsApp_Image_2023-09-18_at_9.40.36_PM_1.webp',
      'https://indraprasthfoundation.org/BaaProject/media/Ganesh-Aagman-2023-DSC_0039.webp'
    ],
  },
];

export default function Gallery() {
  const theme = useTheme();
  const [mode, setMode] = useState("light");
  const [outerValue, setOuterValue] = useState("1");
  const [innerEventsValue, setInnerEventsValue] = useState("1");
  const [innerInitiativesValue, setInnerInitiativesValue] = useState("1");
  const [category, setCategory] = useState([]);
  const [data, setData] = useState([]);
  const LPtheme = createTheme(getLPTheme(mode));
  const navigate = useNavigate();

  const handleOuterChange = (event, newValue) => {
    setOuterValue(newValue);
  };

  const handleInnerEventsChange = (event, newValue) => {
    setInnerEventsValue(newValue);
  };

  const handleInnerInitiativesChange = (event, newValue) => {
    setInnerInitiativesValue(newValue);
  };

  useEffect(() => {
    axios
      .get("https://indraprasthfoundation.org/api/gallerylistview")
      .then((response) => {
        setCategory(response.data.category);
        setData(response.data.images);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <ThemeProvider theme={LPtheme}>
      <CssBaseline />
      <Hero imageHeight={550} />
      <Cards title="Gallery" />

      <Container>
        <TabContext value={outerValue}>
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
              onChange={handleOuterChange}
              aria-label="lab API tabs example"
              sx={{
                color: 'black',
                display: 'flex',
                gap: '16px',
                padding: '8px',
                borderRadius: '4px',
              }}
            >
              <Button
                color="primary"
                variant={outerValue === '1' ? "contained" : "outlined"}
                fullWidth
                onClick={() => setOuterValue('1')}
                sx={{ mr: 1 }}
              >
                Events
              </Button>
              <Button
                color="primary"
                variant={outerValue === '2' ? "contained" : "outlined"}
                fullWidth
                onClick={() => setOuterValue('2')}
                sx={{ mr: 1 }}
              >
                Initiatives
              </Button>
            </TabList>
          </Box>

          <TabPanel value="1">
            <TabContext value={innerEventsValue}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  typography: "body1",
                }}
              >
                <TabList onChange={handleInnerEventsChange} aria-label="Events tabs" variant="scrollable" scrollButtons="auto">
                  {category.map((item, index) => (
                    <Tab key={index} value={String(index + 1)} label={item.name} />
                  ))}
                </TabList>
              </Box>
              {category.map((item, index) => (
                <TabPanel key={index} value={String(index + 1)}>
                  <Box
                    sx={{
                      py: 2,
                      backgroundColor: theme.palette.background.default,
                    }}
                  >
                    <Grid container spacing={2}>
                      {data
                        .filter((img) =>
                          img.category.some((cat) => cat.name === item.name)
                        )
                        .map((img, imgIndex) => (
                          <Grid item xs={12} sm={6} md={4} key={imgIndex}>
                            <Card
                              sx={{
                                boxShadow: theme.shadows[3],
                                backgroundColor: theme.palette.background.paper,
                              }}
                            >
                              <CardMedia
                                component="img"
                                style={{ objectFit: "cover" }}
                                height="200"
                                image={`https://indraprasthfoundation.org/${img.image}`}
                                alt={item.name}
                              />
                            </Card>
                          </Grid>
                        ))
                        .slice(0, 6)}
                    </Grid>
                    <Box textAlign="center" mt={2}>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                          navigate(`/Gallery/${item.id}`);
                        }}
                      >
                        View More
                      </Button>
                    </Box>
                  </Box>
                </TabPanel>
              ))}
            </TabContext>
          </TabPanel>

          <TabPanel value="2">
            <TabContext value={innerInitiativesValue}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  typography: "body1",
                }}
              >
                <TabList onChange={handleInnerInitiativesChange} aria-label="Initiatives tabs" variant="scrollable" scrollButtons="auto">
                  {initiatives.map((initiative, index) => (
                    <Tab key={index} value={String(index + 1)} label={initiative.title} />
                  ))}
                </TabList>
              </Box>
              {initiatives.map((initiative, index) => (
                <TabPanel key={index} value={String(index + 1)}>
                  <Box
                    sx={{
                      py: 2,
                      backgroundColor: theme.palette.background.default,
                    }}
                  >
                    <Grid container spacing={2}>
                      {initiative.images.map((image, idx) => (
                        <Grid item xs={12} sm={6} md={4} key={idx}>
                          <Box
                            sx={{
                              backgroundImage: `url(${image})`,
                              backgroundSize: 'cover',
                              backgroundPosition: 'center',
                              height: 200,
                              width: '100%',
                            }}
                          />
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                </TabPanel>
              ))}
            </TabContext>
          </TabPanel>
        </TabContext>
      </Container>
    </ThemeProvider>
  );
}
