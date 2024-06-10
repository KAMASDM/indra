import * as React from "react";
import Box from "@mui/material/Box";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import bannerImage1 from "../../assets/rasodu-3.png";
import bannerImage2 from "../../assets/two.jpeg";
import bannerImage3 from "../../assets/three.jpeg"; // Add more images as needed
import styled from "@mui/system/styled";

const images = [
  bannerImage1,
  bannerImage2,
  bannerImage3,
  // Add more images here if needed
];

const StyledBox = styled("div")(({ theme }) => ({
  alignSelf: "center",
  width: "calc(100% - 40px)", // Adjusted for left and right margin
  height: 400,
  borderRadius: theme.shape.borderRadius,
  boxShadow:
    theme.palette.mode === "light"
      ? "0 0 12px 8px hsla(220, 25%, 80%, 0.2)"
      : "0 0 24px 12px hsla(210, 100%, 25%, 0.2)",
  outline: "1px solid",
  backgroundSize: "cover",
  backgroundPosition: "center",
  margin: "0 20px", // Left and right margin
  outlineColor:
    theme.palette.mode === "light"
      ? "hsla(220, 25%, 80%, 0.5)"
      : "hsla(210, 100%, 80%, 0.1)",
  [theme.breakpoints.up("sm")]: {
    height: 700,
  },
}));


export default function Hero() {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: "100%",
        backgroundImage:
          theme.palette.mode === "light"
            ? "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)"
            : "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)",
        backgroundRepeat: "no-repeat",
      })}
    >
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
      >
        {images.map((image, index) => (
          <StyledBox
            key={index}
            sx={{
              backgroundImage: `url(${image})`,
            }}
          />
        ))}
      </Carousel>
    </Box>
  );
}
