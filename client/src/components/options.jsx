import React from 'react';
import styled from 'styled-components';

const Option = styled.nav `

`;

const WordBlock = styled.span `
  height:100px;
  width: auto;
  display: inline;
  padding: 10px;
  cursor: pointer
`;

const O1 = styled.img `
  height:100px;
  width: auto;
  display: inline;
  padding: 10px;
  cursor: pointer
`;
const O2 = styled.img `
  height:100px;
  width: auto;
  display: inline;
  padding: 10px;
  cursor: pointer
`;
const O3 = styled.img `
  height:100px;
  width: auto;
  display: inline;
  padding: 10px;
  cursor: pointer
`;
const O4 = styled.img `
  height:100px;
  width: auto;
  display: inline;
  padding: 10px;
  cursor: pointer
`;
const O5 = styled.img `
  height:100px;
  width: auto;
  display: inline;
  padding: 10px
`;

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Option>
        <WordBlock><p>n COLORS</p><p>AVAILABLE</p></WordBlock>
        <O1 src="o1.jpg"></O1>
        <O2 src="o2.jpg"></O2>
        <O3 src="o3.jpg"></O3>
        <O4 src="o4.jpg"></O4>
        <O5 src="imageSlide.jpg"></O5>
      </Option>
    );
  }
}

export default Options;