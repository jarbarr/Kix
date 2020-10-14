import React from 'react';
import styled from 'styled-components';
import $ from 'jquery';

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
    if (this.props.image[1] === 10) {
      this.Slider.style.transitionDuration = '0.5s';
      this.Slider.style.transform = `translate(1000px)`;
    }
    this.Slider.style.transitionDuration = '0.5s';
    this.Slider.style.transform = `translate(-200px)`;
    this.props.right();

  }
  clickLeft(e) {
    e.preventDefault();
    if (this.props.image[1] === 0) {
      this.Slider.style.transitionDuration = '0.5s';
      this.Slider.style.transform = `translate(-1000px)`;
    }
    this.Slider.style.transitionDuration = '0.5s';
    this.Slider.style.transform = `translate(200px)`;
    this.props.left();
  }
  zoom(e, img) {
    event.preventDefault();
    this.props.z(img);
  }
  renderThumbNails() {
    this.setState({ mouseOver: 1 });
    $('#t').slideDown('slow');
    $('#t').slideUp('slow');
  }
  collapseThumbNails() {
    $('#t').slideDown('slow');
    this.setState({ mouseOver: 0 });
  }

  thumbnailClick(e, num) {
    e.preventDefault();

    this.props.clickThumbnail(num);
  }

  render() {
    return (
      <Div onMouseLeave={this.renderThumbNails} onMouseOver={this.collapseThumbNails}>
        <Pad>
          <Menu>
            <Direct>&crarr;BACK</Direct>
            <Direct>Home</Direct>
            <Direct>women</Direct>
            <Direct>shoes</Direct>
          </Menu>
          <Left onClick={this.clickLeft}>&larr;</Left>
        </Pad>
        <Carousel>
          <Track>
            <Slider ref={refId => this.Slider = refId}>

              <Img ref={refId => this.Img = refId} id="currentImage" src={this.props.image[0]} onClick={(e) => { this.zoom(e, this.props.image); }} ></Img>
              <Img ref={refId => this.Img = refId} id="slide 2" src={this.props.data[2]} onClick={(e) => { this.zoom(e, this.props.image); }} ></Img>
              <Img ref={refId => this.Img = refId} id="slide 3" src={this.props.data[3]} onClick={(e) => { this.zoom(e, this.props.image); }} ></Img>
              <Img ref={refId => this.Img = refId} id="slide 4" src={this.props.data[4]} onClick={(e) => { this.zoom(e, this.props.image); }} ></Img>
              <Img ref={refId => this.Img = refId} id="slide 5" src={this.props.data[5]} onClick={(e) => { this.zoom(e, this.props.image); }} ></Img>
              <Img ref={refId => this.Img = refId} id="slide 6" src={this.props.data[6]} onClick={(e) => { this.zoom(e, this.props.image); }} ></Img>
              <Img ref={refId => this.Img = refId} id="slide 7" src={this.props.data[7]} onClick={(e) => { this.zoom(e, this.props.image); }} ></Img>
              <Img ref={refId => this.Img = refId} id="slide 8" src={this.props.data[8]} onClick={(e) => { this.zoom(e, this.props.image); }} ></Img>
              <Img ref={refId => this.Img = refId} id="slide 9" src={this.props.data[9]} onClick={(e) => { this.zoom(e, this.props.image); }} ></Img>
              <Img ref={refId => this.Img = refId} id="slide 10" src={this.props.data[10]} onClick={(e) => { this.zoom(e, this.props.image); }} ></Img>
              <Img ref={refId => this.Img = refId} id="slide 11" src={this.props.data[11]} onClick={(e) => { this.zoom(e, this.props.image); }} ></Img>
            </Slider>
          </Track>
          <Icons>
            {this.state.mouseOver === 0 ? <ThumbNail id="t" onClick={(e) => { this.thumbnailClick(e, 1); }} src={this.props.data[1]}></ThumbNail> : <Collapsed id="c" src={this.props.data[1]}></Collapsed>}
            {this.state.mouseOver === 0 ? <ThumbNail id="t" onClick={(e) => { this.thumbnailClick(e, 2); }} src={this.props.data[2]}></ThumbNail> : <Collapsed id="c" src={this.props.data[2]}></Collapsed>}
            {this.state.mouseOver === 0 ? <ThumbNail id="t" onClick={(e) => { this.thumbnailClick(e, 3); }} src={this.props.data[3]}></ThumbNail> : <Collapsed id="c" src={this.props.data[3]}></Collapsed>}
            {this.state.mouseOver === 0 ? <ThumbNail id="t" onClick={(e) => { this.thumbnailClick(e, 4); }} src={this.props.data[4]}></ThumbNail> : <Collapsed id="c" src={this.props.data[4]}></Collapsed>}
            {this.state.mouseOver === 0 ? <ThumbNail id="t" onClick={(e) => { this.thumbnailClick(e, 5); }} src={this.props.data[5]}></ThumbNail> : <Collapsed id="c" src={this.props.data[5]}></Collapsed>}
            {this.state.mouseOver === 0 ? <ThumbNail id="t" onClick={(e) => { this.thumbnailClick(e, 6); }} src={this.props.data[6]}></ThumbNail> : <Collapsed id="c" src={this.props.data[6]}></Collapsed>}
            {this.state.mouseOver === 0 ? <ThumbNail id="t" onClick={(e) => { this.thumbnailClick(e, 7); }} src={this.props.data[7]}></ThumbNail> : <Collapsed id="c" src={this.props.data[7]}></Collapsed>}
            {this.state.mouseOver === 0 ? <ThumbNail id="t" onClick={(e) => { this.thumbnailClick(e, 8); }} src={this.props.data[8]}></ThumbNail> : <Collapsed id="c" src={this.props.data[8]}></Collapsed>}
            {this.state.mouseOver === 0 ? <ThumbNail id="t" onClick={(e) => { this.thumbnailClick(e, 9); }} src={this.props.data[9]}></ThumbNail> : <Collapsed id="c" src={this.props.data[9]}></Collapsed>}
            {this.state.mouseOver === 0 ? <ThumbNail id="t" onClick={(e) => { this.thumbnailClick(e, 10); }} src={this.props.data[10]}></ThumbNail> : <Collapsed id="c" src={this.props.data[10]}></Collapsed>}
            {this.state.mouseOver === 0 ? <ThumbNail id="t" onClick={(e) => { this.thumbnailClick(e, 11); }} src={this.props.data[11]}></ThumbNail> : <Collapsed id="c" src={this.props.data[11]}></Collapsed>}
          </Icons>

        </Carousel>
        <Pad>
          <Right onClick={this.clickRight}>&rarr;</Right>
        </Pad>
      </Div>
    );
  }
}

export default ImageSlide;

const Div = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  max-height: 600px;
  margin-bottom: 20px;
  background-color: #eceff0;
  // position: static;
`;
const Pad = styled.div`
  // flex: 1;
  z-index: 12;
`;
const Icons = styled.div`
  justify-content: center;
  margin-left: -100%;
  z-index: 12;
  float: left;
  grid-column-start: 1;
  grid-row-start: 1;
  margin-left: 100px;
  margin-top: 400px;
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
  z-index: 20;
`;
const Right = styled.button`
  cursor: pointer;
  position: absolute;
  height: 50px;
  width: 50px;
  margin-top: 250px;
  margin-right: 50px;
  border: 1px solid black;
  background-color: white;
  padding-bottom: 5px;
  font-size: 30px;
  z-index: 20;
`;

const Carousel = styled.div`
  // flex: 4;
  display: flex;
  // height: 100%;
  // width: 100%;
  justify-content: center;
  align-items: center;
  // overflow: hidden;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  // z-index: 10;
`;
const Track = styled.div`
  overflow-x: hidden !important;
  position: relative !important;
  // -webkit-overflow-scrolling: touch;
  // scroll-snap-type: x mandatory;
  grid-column-start: 1;
  grid-row-start: 1;
  width: 60%;
  // width: fit-content;
  display: flex;
  // z-index: 10;
`;
const Slider = styled.div`
  flexDirection: row;

  display: flex !important;
  overflow-x: hidden !important;
  overflow-y: hidden !important;
  // min-width: 100%; !important;
  padding-left: 0px !important;
  margin-bottom: 0px !important;
  margin-top: 0px !important;
  // scroll-snap-type: x mandatory !important;
  list-style: none !important;
  // grid-column-start: 1;
  // grid-row-start: 1;
  // scroll-snap-align: start !important;
  scroll-snap-stop: always !important;
  // scroll-bahavior: smooth;
`;
const Img = styled.img`
  // max-width: 25%;
  flex: 0 0 25%;
  width: 400px;
  display: block;
  // position: absolute;
  // max-width: 600px;
  height: auto;
  cursor: nesw-resize;
  justify-content: center;
  z-index: 0;
  grid-column-start: 1;
  grid-row-start: 1;
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
  // &:focus {
  //   border-bottom: 4px solid black;
  // };
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

