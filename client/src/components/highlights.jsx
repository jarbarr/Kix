import React from 'react';
import styled from 'styled-components';

const HLD = styled.div`

`;

const HLS = styled.span `
  display: inline;
  margin-left: 20px;
  margin-right: 20px;
  padding-left: 20px;
  padding-right: 20px;
  display: inline
`;

const HLI = styled.img `
  margin-left: 20px;
  margin-right: 20px;
  height: auto;
  width: 350px;
`;
const HLP1 = styled.p `
  margin-left: 20px;
  margin-right: 20px;
`;
const HLP2 = styled.p `
  margin-left: 20px;
  margin-right: 20px;
  padding-left: 20px;
  padding-right: 20px;
`;
const HLH = styled.p `
  font-size: 36px;
  font-weight: bold;
`;

class HighLights extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <HLD>
        <HLH>HIGHLIGHTS</HLH>
        <HLS>
          <HLI src="detail.jpg"></HLI>
          <HLP1>A TOUCH OF SPARKLE</HLP1>
          <HLP2>Silver jewels stand out on the laces.</HLP2>
        </HLS>
        <HLS>
          <HLI src="detail2.jpg"></HLI>
          <HLP1>SMOOTH RIDE</HLP1>
          <HLP2>The rubber outsole offers all-day comfort.</HLP2>
        </HLS>
        <HLS>
          <HLI src="detail3.jpg"></HLI>
          <HLP1>CELEBRATE AN ICON</HLP1>
          <HLP2>These adidas Superstar shoes come with branded laces and lace jewel details.</HLP2>
        </HLS>
      </HLD>
    );
  }
}

export default HighLights;