import React from 'react';
import styled from 'styled-components';

const Div = styled.div `
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
`;

const Img = styled.img `
  cursor: zoom-out;
  width: 200%;
  height: auto;
  flex: 4;
`;

const Button = styled.button `
  position: absolute;
  top: 10%;
  left: 95%;
  height: 50px;
  width: 50px;
  border: 1px solid black;
  background-color: white;
  padding: 5px;
  font-size: 24px;
`;

class ZoomMore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.zoomOut = this.zoomOut.bind(this);
    this.exit = this.exit.bind(this);
  }

  zoomOut() {
    this.props.zoomLess();
  }
  exit() {
    this.props.exitZoom();
  }

  render() {
    return (
      <Div>
        <Button onClick={this.exit}>&#10005;</Button>
        <Img src="imageslide.jpg"onClick={this.zoomOut}></Img>
      </Div>
    );
  }
}

export default ZoomMore;