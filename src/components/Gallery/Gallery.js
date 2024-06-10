import * as React from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import { useTheme } from "@mui/material/styles";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import getLPTheme from "../../theme/getLPTheme";
import Hero from "../HeroBanner/Hero";
import Cards from "../BannerCard/Card";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState, useEffect } from "react";

export default function Gallery() {
  const theme = useTheme();
  const [mode, setMode] = useState("light");
  const [value, setValue] = useState("1");
  const [category, setCategory] = useState([]);
  const [data, setData] = useState([]);
  const LPtheme = createTheme(getLPTheme(mode));

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
      <Hero />
      <Cards title="Gallery" />
      <Container>
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
            <TabList onChange={handleChange} aria-label="lab API tabs example">
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
                <Grid container spacing={4}>
                  {data
                    .filter((img) =>
                      img.category.some((cat) => cat.name === item.name)
                    )
                    .map((img, index) => (
                      <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card
                          sx={{
                            boxShadow: theme.shadows[3],
                            backgroundColor: theme.palette.background.paper,
                          }}
                        >
                          <CardMedia
                            component="img"
                            style={{ objectFit: 'cover' }}
                            height="300"
                            image={`https://indraprasthfoundation.org/${img.image}`}
                            alt={item.name}
                          />

                        </Card>
                      </Grid>
                    )).slice(0, 6)}
                </Grid>
              </Box>
            </TabPanel>
          ))}
        </TabContext>
      </Container>
    </ThemeProvider>
  );
}
