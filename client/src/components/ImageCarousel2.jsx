import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import styled from "styled-components";
import PropTypes from "prop-types";


const ImageWrapper = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
`;

const ImageCarousel2 = ({ images }) => {
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

ImageCarousel2.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};


export default ImageCarousel2;