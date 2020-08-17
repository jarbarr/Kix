import React from 'react';
import styled from 'styled-components';

const Div = styled.div `
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  background-color: #eceff0;
`;

const Pad = styled.div `
  flex: 1;
`;
const Img = styled.img `
  cursor: zoom-in;
  width: 100%;
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

class Zoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.exitZoom = this.exitZoom.bind(this);
    this.zoomMore = this.zoomMore.bind(this);
  }
  exitZoom(e) {
    e.preventDefault();
    this.props.exOut();
  }
  zoomMore(e) {
    e.preventDefault();
    this.props.zoomIn();
  }
  render() {
    return (
      <Div>
        <Pad></Pad>
        <Button onClick={this.exitZoom}>&#x2715;</Button>
        <Img src={this.props.img[0]} onClick={this.zoomMore}></Img>
        <Pad></Pad>
      </Div>
    );
  }
}

export default Zoom;