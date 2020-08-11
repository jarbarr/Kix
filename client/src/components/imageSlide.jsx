import React from 'react';
import styled from 'styled-components';

const Slide = styled.div `
  backgroundImage:
  position: relative;
  width: 75%;
  height: auto
`;
const Img = styled.img `
  width: 100%;
  height: auto;
  cursor: nesw-resize;
`;
const PopImg = styled.img `
  width: 100%;
  height: auto;
  cursor: vertical-text;
`;
const ex = styled.button `
  height: 50px;
  width: 50px;
  border: 1px solid black;
`;
const Left = styled.button `
  position: absolute;
  top: 40%;
  left: 2%;
  cursor: pointer;
  height: 50px;
  width: 50px;
  border: 1px solid black;
  background-color: white
`;
const Right = styled.button `
  position: absolute;
  top: 40%;
  left: 70%;
  cursor: pointer;
  height: 50px;
  width: 50px;
  border: 1px solid black;
  background-color: white
`;
const ThumbNail1 = styled.img `
  cursor: pointer;
  position: absolute;
  top: 75%;
  left: 20%;
  height:25px;
  // transform: translated3d(-50px, -50px, -100px);
  width: auto;
  display: inline;
  margin: 5px;
  border: 1px solid black;
`;
const ThumbNail2 = styled.img `
  cursor: pointer;
  position: absolute;
  top: 75%;
  left: 23%;
  height:25px;
  // transform: translated3d(-50px, -50px, -100px);
  width: auto;
  display: inline;
  margin: 5px;
  border: 1px solid black;
`;
const ThumbNail3 = styled.img `
  cursor: pointer;
  position: absolute;
  top: 75%;
  left: 26%;
  height:25px;
  // transform: translated3d(-50px, -50px, -100px);
  width: auto;
  display: inline;
  margin: 5px;
  border: 1px solid black;
`;
const ThumbNail4 = styled.img `
  cursor: pointer;
  position: absolute;
  top: 75%;
  left: 29%;
  height:25px;
  // transform: translated3d(-50px, -50px, -100px);
  width: auto;
  display: inline;
  margin: 5px;
  border: 1px solid black;
`;
const ThumbNail5 = styled.img `
  cursor: pointer;
  position: absolute;
  top: 75%;
  left: 32%;
  height:25px;
  // transform: translated3d(-50px, -50px, -100px);
  width: auto;
  display: inline;
  margin: 5px;
  border: 1px solid black;
`;
const ThumbNail6 = styled.img `
  cursor: pointer;
  position: absolute;
  top: 75%;
  left: 35%;
  height:25px;
  // transform: translated3d(-50px, -50px, -100px);
  width: auto;
  display: inline;
  margin: 5px;
  border: 1px solid black;
`;
const ThumbNail7 = styled.img `
  cursor: pointer;
  position: absolute;
  top: 75%;
  left: 38%;
  height:25px;
  // transform: translated3d(-50px, -50px, -100px);
  width: auto;
  display: inline;
  margin: 5px;
  border: 1px solid black;
`;
const ThumbNail8 = styled.img `
  cursor: pointer;
  position: absolute;
  top: 75%;
  left: 41%;
  height:25px;
  // transform: translated3d(-50px, -50px, -100px);
  width: auto;
  display: inline;
  margin: 5px;
  border: 1px solid black;
`;
const ThumbNail9 = styled.img `
  cursor: pointer;
  position: absolute;
  top: 75%;
  left: 44%;
  height:25px;
  // transform: translated3d(-50px, -50px, -100px);
  width: auto;
  display: inline;
  margin: 5px;
  border: 1px solid black;
`;
const ThumbNail10 = styled.img `
  cursor: pointer;
  position: absolute;
  top: 75%;
  left: 47%;
  height:25px;
  // transform: translated3d(-50px, -50px, -100px);
  width: auto;
  display: inline;
  margin: 5px;
  border: 1px solid black;
`;



// onclick event for left or right arrow invokes a function that passes the next or previous image to the slide component
class ImageSlide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zoom: 0
    };
    this.zoom = this.zoom.bind(this);
  }

  clickRight() {
    this.props.right();
  }
  clickLeft() {
    this.props.left();
  }
  zoom() {
    this.setState = ({
      zoom: 1
    });
  }

  render() {
    return (
      <Slide>
        <Img onClick={this.zoom}src="imageSlide.jpg"></Img>
        <Left>LEFT</Left>
        <Right>RIGHT</Right>
        <ThumbNail1 src="o1.jpg"></ThumbNail1>
        <ThumbNail2 src="o2.jpg"></ThumbNail2>
        <ThumbNail3 src="o3.jpg"></ThumbNail3>
        <ThumbNail4 src="o4.jpg"></ThumbNail4>
        <ThumbNail5 src="o1.jpg"></ThumbNail5>
        <ThumbNail6 src="o2.jpg"></ThumbNail6>
        <ThumbNail7 src="o3.jpg"></ThumbNail7>
        <ThumbNail8 src="o4.jpg"></ThumbNail8>
        <ThumbNail9 src="o1.jpg"></ThumbNail9>
        <ThumbNail10 src="o3.jpg"></ThumbNail10>
      </Slide>
    );
  }
}

export default ImageSlide;