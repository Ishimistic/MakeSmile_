import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import styled from "styled-components";
import s1 from "../assets/images-back/s1.png"
// import s2 from "../assets/images-back/s2.jpg";
import s3 from "../assets/images-back/s3.jpg";

const ImageWrapper = styled.div`
  width: 100%;
  height: 90vh; 
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto; 
`;

const ImageCarousel = () => {
  const images = [s1, s3];

  return (
    <Carousel>
      {images.map((image, index) => (
        <Paper key={index}>
          <ImageWrapper>
            <StyledImage src={image} alt={`Slide ${index}`} />
          </ImageWrapper>
        </Paper>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;