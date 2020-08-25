import React from 'react';
import styled from 'styled-components';

const Slide = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  max-height: 600px;
  margin-bottom: 20px;
  background-color: #eceff0;
  // position: static;
`;
const Pad = styled.div`
  flex: 1;
`;
const Icons = styled.div`
  // justify-content: center;
  // margin-left: -100%;
  z-index: 1;
  // float: left;
  grid-column-start: 1;
  grid-row-start: 1;
  margin-left: 100px;
  margin-top: 400px;
`;
const MainBody = styled.div`
  flex: 4;
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  // overflow: hidden;
  display: grid;
  grid-template-columns: 1fr;
  gird-template-rows: 1fr;
`;

const Slider = styled.div`
  display: flex;
  overflow-x: auto;
  grid-column-start: 1;
  grid-row-start: 1;
  scroll-snap-type: x mandatory;
  scroll-bahavior: smooth;
  -webkit-overflow-scrolling: touch;

`;
const Menu = styled.div`
  margin-top: 20px;
  margin-left: 10px;
  display: flex;
`;

const Direct = styled.button`
  border: 0px;
  // position: static;
  display: inline-flex;
  cursor: pointer;
  background-color: transparent;
  text-decoration: underline;
  text-transform: uppercase;
  &:hover {
    background-color: black;
    color: white;
}
`;

const Img = styled.img`
  width: 100%;
  // position: static;
  max-width: 600px;
  height: auto;
  cursor: nesw-resize;
  z-index: 0;
  grid-column-start: 1;
  grid-row-start: 1;
  // overflow: hidden;
  // justify-content: column;
`;

const Left = styled.button`
  cursor: pointer;
  // position: relative;
  height: 50px;
  width: 50px;
  border: 1px solid black;
  background-color: white;
  padding-bottom: 5px;
  font-size: 30px;
  margin-top: 200px;
  margin-left: 20px;
`;
const Right = styled.button`
  cursor: pointer;
  // position: relative;
  height: 50px;
  width: 50px;
  margin-top: 250px;
  margin-left: 100px;
  border: 1px solid black;
  background-color: white;
  padding-bottom: 5px;
  font-size: 30px;
`;

const ThumbNail = styled.img`
  cursor: pointer;
  position: relative;
  display: inline-flex;
  // top: 20%;
  // left: 100%;
  // float: left;
  height:25px;
  width: auto;
  margin: 5px;
  z-index: 1;
  justify-content: center;
  overflow: hidden;
  // border-bottom: 4px solid white;
  border: 1px solid black;
  &:hover {
    border-bottom: 4px solid black;
  };
  &:focus {
    border-bottom: 4px solid black;
  };
`;
const Collapsed = styled.img`
  display: inline-flex;
  position: relative;
  margin-left: 5px;
  margin-right: 5px;
  z-index: 1;
  height: 2px;
  width: 25px;
  overflow: hidden;
  border-bottom: 2px solid black;
`;

// const imgArray = this.props.data;


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
    this.clickRight = this.clickRight.bind(this);
    this.clickLeft = this.clickLeft.bind(this);
    this.thumbnailClick = this.thumbnailClick.bind(this);
  }

  clickRight(e) {
    e.preventDefault();
    this.props.right();
  }
  clickLeft(e) {
    e.preventDefault();
    this.props.left();
  }
  zoom(e, img) {
    event.preventDefault();
    this.props.z(img);
  }
  renderThumbNails() {
    this.setState({ mouseOver: 1});
  }
  collapseThumbNails() {
    this.setState({ mouseOver: 0});
  }

  thumbnailClick(e, num) {
    e.preventDefault();

    this.props.clickThumbnail(num);
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
          <Left onClick={this.clickLeft}>&larr;</Left>
        </Pad>
        <MainBody>
          {/* <Slider> */}
          <Img id="currentImage"src={this.props.image[0]} onClick={(e) => { this.zoom(e, this.props.image); }} ></Img>
          {/* <Img src={this.props.data[2]} onClick={(e) => { this.zoom(e, this.props.data[2]); }} ></Img>
          <Img src={this.props.data[3]} onClick={(e) => { this.zoom(e, this.props.data[3]); }} ></Img>
          <Img src={this.props.data[4]} onClick={(e) => { this.zoom(e, this.props.data[4]); }} ></Img>
          <Img src={this.props.data[5]} onClick={(e) => { this.zoom(e, this.props.data[5]); }} ></Img>
          <Img src={this.props.data[6]} onClick={(e) => { this.zoom(e, this.props.data[6]); }} ></Img>
          <Img src={this.props.data[7]} onClick={(e) => { this.zoom(e, this.props.data[7]); }} ></Img>
          <Img src={this.props.data[8]} onClick={(e) => { this.zoom(e, this.props.data[8]); }} ></Img>
          <Img src={this.props.data[9]} onClick={(e) => { this.zoom(e, this.props.data[9]); }} ></Img>
          <Img src={this.props.data[10]} onClick={(e) => { this.zoom(e, this.props.data[10]); }} ></Img>
          <Img src={this.props.data[11]} onClick={(e) => { this.zoom(e, this.props.data[11]); }} ></Img> */}
          {/* </Slider> */}
          <Icons>
            {this.state.mouseOver === 0 ? <ThumbNail onClick={(e) => { this.thumbnailClick(e, 1); }} src={this.props.data[1]}></ThumbNail> : <Collapsed src={this.props.data[1]}></Collapsed>}
            {this.state.mouseOver === 0 ? <ThumbNail onClick={(e) => { this.thumbnailClick(e, 2); }} src={this.props.data[2]}></ThumbNail> : <Collapsed src={this.props.data[2]}></Collapsed>}
            {this.state.mouseOver === 0 ? <ThumbNail onClick={(e) => { this.thumbnailClick(e, 3); }} src={this.props.data[3]}></ThumbNail> : <Collapsed src={this.props.data[3]}></Collapsed>}
            {this.state.mouseOver === 0 ? <ThumbNail onClick={(e) => { this.thumbnailClick(e, 4); }} src={this.props.data[4]}></ThumbNail> : <Collapsed src={this.props.data[4]}></Collapsed>}
            {this.state.mouseOver === 0 ? <ThumbNail onClick={(e) => { this.thumbnailClick(e, 5); }} src={this.props.data[5]}></ThumbNail> : <Collapsed src={this.props.data[5]}></Collapsed>}
            {this.state.mouseOver === 0 ? <ThumbNail onClick={(e) => { this.thumbnailClick(e, 6); }} src={this.props.data[6]}></ThumbNail> : <Collapsed src={this.props.data[6]}></Collapsed>}
            {this.state.mouseOver === 0 ? <ThumbNail onClick={(e) => { this.thumbnailClick(e, 7); }} src={this.props.data[7]}></ThumbNail> : <Collapsed src={this.props.data[7]}></Collapsed>}
            {this.state.mouseOver === 0 ? <ThumbNail onClick={(e) => { this.thumbnailClick(e, 8); }} src={this.props.data[8]}></ThumbNail> : <Collapsed src={this.props.data[8]}></Collapsed>}
            {this.state.mouseOver === 0 ? <ThumbNail onClick={(e) => { this.thumbnailClick(e, 9); }} src={this.props.data[9]}></ThumbNail> : <Collapsed src={this.props.data[9]}></Collapsed>}
            {this.state.mouseOver === 0 ? <ThumbNail onClick={(e) => { this.thumbnailClick(e, 10); }} src={this.props.data[10]}></ThumbNail> : <Collapsed src={this.props.data[10]}></Collapsed>}
            {this.state.mouseOver === 0 ? <ThumbNail onClick={(e) => { this.thumbnailClick(e, 11); }} src={this.props.data[11]}></ThumbNail> : <Collapsed src={this.props.data[11]}></Collapsed>}
          </Icons>
        </MainBody>
        <Pad>
          <Right onClick={this.clickRight}>&rarr;</Right>
        </Pad>
      </Slide>
    );
  }
}

export default ImageSlide;