import React from 'react';
import ThumbNail from './thumbnail.jsx';
import styled from 'styled-components';

const Slide = styled.div `
  backgroundImage:
  position: relative;
  width: 58%
`;
const Img = styled.img `
  width: 100%;
  height: auto
`;
const Left = styled.button `
  position: absolute;
  top: 50%;
  left: 5%;
  cursor: pointer;
  height: 50px;
  width: 50px;
  transform: translate3d(-50px, -50px, -100px);
  border: 1px solid black;
  background-color: white
`;
const Right = styled.button `
  position: absolute;
  top: 50%;
  left: 56%;
  cursor: pointer;
  height: 50px;
  width: 50px;
  border: 1px solid black;
  transform: translate3d(-50px, -50px, -100px);
  background-color: white
`;
const Row = styled.div `
  position: absolute
  top: 80%;
  left: 50%;
  transform: translated3d(-50px, -50px, -100px)
`;


// onclick event for left or right arrow invokes a function that passes the next or previous image to the slide component
class ImageSlide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  clickRight() {

  }
  clickLeft() {

  }

  render() {
    return (
      <Slide>
        <Img src="imageSlide.jpg"></Img>
        <Left >LEFT</Left>
        <Right >RIGHT</Right>
        <Row>
          <ThumbNail />
        </Row>
      </Slide>
    );
  }
}

export default ImageSlide;