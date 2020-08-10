import React from 'react';
import LeftArrow from './leftArrow.jsx';
import RightArrow from './rightArrow.jsx';
import ThumbNail from './thumbnail.jsx';
import styled from 'styled-components';

const Slide = styled.div `
  backgroundImage:
`;
const Left = styled.div `

`;
const Div = styled.div `

`;


// onclick event for left or right arrow invokes a function that passes the next or previous image to the slide component
const ImageSlide = (props) => {
  return (
    <Div>
      <img src="placeholder.jpg" />
      <ThumbNail />
      <LeftArrow />
      <RightArrow />
    </Div>
  );
};

export default ImageSlide;