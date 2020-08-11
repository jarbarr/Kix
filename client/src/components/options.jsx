import React from 'react';
import styled from 'styled-components';

const Option = styled.nav `

`;

const OS = styled.span `
  height:100px;
  width: auto;
  display: inline;
  padding: 10px;
  cursor: pointer;
`;

const OI = styled.img `
  height:100px;
  width: auto;
  display: inline;
  padding: 10px;
  cursor: pointer;
`;

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Option>
        <OS><p>n COLORS</p><p>AVAILABLE</p>
          <OI src="o1.jpg"></OI>
          <OI src="o2.jpg"></OI>
          <OI src="o3.jpg"></OI>
          <OI src="o4.jpg"></OI>
          <OI src="imageSlide.jpg"></OI>
        </OS>
      </Option>
    );
  }
}

export default Options;