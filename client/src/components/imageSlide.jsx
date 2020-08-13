import React from 'react';
import styled from 'styled-components';

const Slide = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  max-height: 600px;
  margin-bottom: 20px;
  background-color: #eceff0;
  // z-index: 0;
`;
const Pad = styled.div`
  flex: 1;
`;
const Icons = styled.div`
  // justify-content: column;
`;
const MainBody = styled.div `
  flex: 4;
  // display: flex;
  justify-content: column;
`;
const Menu = styled.div`
  margin-top: 20px;
  margin-left: 10px;
  display: flex;
`;

const Direct = styled.button`
  border: 0px;
  display: inline-flex;
  background-color: transparent;
  text-decoration: underline;
  text-transform: uppercase;
  // z-index: 2;
  &:hover {
    background-color: black;
    color: white;
}
`;

const Img = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;
  cursor: nesw-resize;
  z-index: 0;
`;
const Center = styled.div`
  // z-index: 0;
  // justify-content: column;
`;
const Left = styled.button`
  cursor: pointer;
  height: 50px;
  width: 50px;
  border: 1px solid black;
  background-color: white;
  padding-bottom: 5px;
  font-size: 30px;
  // z-index: 1;
  margin-top: 200px;
  margin-left: 20px;
`;
const Right = styled.button`
  cursor: pointer;
  height: 50px;
  width: 50px;
  margin-top: 250px;
  margin-left: 100px;
  border: 1px solid black;
  background-color: white;
  padding-bottom: 5px;
  font-size: 30px;
  // z-index: 1;
`;

const ThumbNail = styled.img`
  cursor: pointer;
  display: inline-flex;
  height:25px;
  width: auto;
  margin: 5px;
  border: 1px solid black;
  z-index: 100;
  &:hover {
    border-bottom: 4px solid black;
  }
`;
const Collapsed = styled.img`
  display: inline-flex;
  margin-left: 5px;
  margin-right: 5px;
  height: 2px;
  width: 25px;
  z-index: 100;
  border-bottom: 2px solid black;
`;




// onclick event for left or right arrow invokes a function that passes the next or previous image to the slide component
class ImageSlide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseOver: 0
    };
    this.zoom = this.zoom.bind(this);
    this.renderThumbNails = this.renderThumbNails.bind(this);
    this.collapseThumbNails = this.collapseThumbNails.bind(this);
  }

  clickRight() {
    this.props.right();
  }
  clickLeft() {
    this.props.left();
  }
  zoom() {
    this.props.zoom();
  }
  renderThumbNails() {
    this.setState({ mouseOver: 1 });
  }
  collapseThumbNails() {
    this.setState({ mouseOver: 0 });
  }

  render() {
    return (
      <Slide onMouseLeave={this.renderThumbNails} onMouseOver={this.collapseThumbNails}>
        <Pad>
          <Menu>
            <Direct>&crarr;BACK</Direct>
            <Direct>Home</Direct>
            <Direct>women</Direct>
            <Direct>shoes</Direct>
          </Menu>
          <Left>&larr;</Left>
        </Pad>
        <MainBody>
          <Center>
            <Img onClick={this.zoom} src="imageSlide.jpg"></Img>
          </Center>
          <Icons>
            {this.state.mouseOver === 0 ? <ThumbNail src="o1.jpg"></ThumbNail> : <Collapsed src="o1.jpg"></Collapsed>}
            {this.state.mouseOver === 0 ? <ThumbNail src="o1.jpg"></ThumbNail> : <Collapsed src="o1.jpg"></Collapsed>}
            {this.state.mouseOver === 0 ? <ThumbNail src="o1.jpg"></ThumbNail> : <Collapsed src="o1.jpg"></Collapsed>}
            {this.state.mouseOver === 0 ? <ThumbNail src="o1.jpg"></ThumbNail> : <Collapsed src="o1.jpg"></Collapsed>}
            {this.state.mouseOver === 0 ? <ThumbNail src="o1.jpg"></ThumbNail> : <Collapsed src="o1.jpg"></Collapsed>}
            {this.state.mouseOver === 0 ? <ThumbNail src="o1.jpg"></ThumbNail> : <Collapsed src="o1.jpg"></Collapsed>}
            {this.state.mouseOver === 0 ? <ThumbNail src="o1.jpg"></ThumbNail> : <Collapsed src="o1.jpg"></Collapsed>}
            {this.state.mouseOver === 0 ? <ThumbNail src="o1.jpg"></ThumbNail> : <Collapsed src="o1.jpg"></Collapsed>}
            {this.state.mouseOver === 0 ? <ThumbNail src="o1.jpg"></ThumbNail> : <Collapsed src="o1.jpg"></Collapsed>}
            {this.state.mouseOver === 0 ? <ThumbNail src="o1.jpg"></ThumbNail> : <Collapsed src="o1.jpg"></Collapsed>}
          </Icons>
        </MainBody>
        <Pad>
          <Right>&rarr;</Right>
        </Pad>
      </Slide>
    );
  }
}

export default ImageSlide;