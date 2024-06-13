import * as React from "react";
import Box from "@mui/material/Box";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerImage1 from "../../assets/rasodu-3.png";
import bannerImage2 from "../../assets/two.jpeg";
import bannerImage3 from "../../assets/three.jpeg";
import styled from "@mui/system/styled";

const images = [
  bannerImage1,
  bannerImage2,
  bannerImage3,
];

const StyledBox = styled("div")(({ theme, height = 700 }) => ({
  alignSelf: "center",
  width: "calc(100% - 40px)",
  height: 400,
  borderRadius: theme.shape.borderRadius,
  boxShadow:
    theme.palette.mode === "light"
      ? "0 0 12px 8px hsla(220, 25%, 80%, 0.2)"
      : "0 0 24px 12px hsla(210, 100%, 25%, 0.2)",
  outline: "1px solid",
  backgroundSize: "cover",
  backgroundPosition: "center",
  margin: "0 20px",
  outlineColor:
    theme.palette.mode === "light"
      ? "hsla(220, 25%, 80%, 0.5)"
      : "hsla(210, 100%, 80%, 0.1)",
  [theme.breakpoints.up("sm")]: {
    height: height,
  },
}));


export default function Hero({ size, imageHeight }) {
  return (
    <div className={`hero-banner ${size}`}>
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
              height={imageHeight}
              key={index}
              sx={{
                backgroundImage: `url(${image})`,
              }}
            />
          ))}
        </Carousel>
      </Box>
    </div>
  );
}
