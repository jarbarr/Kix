import React from 'react';
import styled from 'styled-components';

const Div = styled.div `
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  z-index: 0;
`;

const Img = styled.img `
  cursor: zoom-out;
  width: 200%;
  height: auto;
  flex: 4;
  z-index: 0;
  overflow: hidden;
`;

const Button = styled.button `
  position: absolute;
  top: 5%;
  left: 95%;
  height: 50px;
  width: 50px;
  border: 1px solid black;
  background-color: white;
  padding: 5px;
  font-size: 24px;
  z-index: 1;
`;


class ZoomMore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.zoomOut = this.zoomOut.bind(this);
    this.exit = this.exit.bind(this);
  }

  zoomOut(e, img) {
    e.preventDefault();
    this.props.zoomLess(img);
  }
  exit(e) {
    e.preventDefault();
    this.props.exitZoom();
  }

  render() {
    return (
      <Div id="box">
        <Button onClick={this.exit}>&#10005;</Button>
        <Img src={this.props.img[0]}onClick={(e) => { this.zoomOut(e, this.props.img); }}></Img>
      </Div>
    );
  }
}

export default ZoomMore;