import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;

`;
const Body = styled.div `
  margin-top: 100px;
`;
const Pad = styled.div`
  margin-left: 100px;
  margin-right: 100px;
`;
const MainBody = styled.div `
  margin-left: 100px;
  margin-right: 50px;
`;
const Span = styled.span`
  margin-left: 10px;
  margin-right: 10px;
  display: inline;
  padding-right: 10px;
`;

const Img = styled.img`
  margin-left: 10px;
  margin-right: 10px;
  height: auto;
  width: 280px;
`;
const P1 = styled.p`
  text-transform: uppercase;
  margin-left: 15px;
  font-weight: bold;
  font-size: 24px;
`;
const P2 = styled.p`
  margin-left: 15px;
  padding-right: 100px;
`;
const Header = styled.p`
  font-size: 36px;
  font-weight: bold;
  text-transform: uppercase;
  justify-content: flex-end;
  flex-direction: column;
  margin-left: 20px;
`;

class HighLights extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Body>
        <Pad></Pad>
        <MainBody>
          <Header>HIGHLIGHTS</Header>
          <Div>
            <Span>
              <Img src="detail.jpg"></Img>
              <P1>A TOUCH OF SPARKLE</P1>
              <P2>Silver jewels stand out on the laces.</P2>
            </Span>
            <Span>
              <Img src="detail2.jpg"></Img>
              <P1>SMOOTH RIDE</P1>
              <P2>The rubber outsole offers all-day comfort.</P2>
            </Span>
            <Span>
              <Img src="detail3.jpg"></Img>
              <P1>CELEBRATE AN ICON</P1>
              <P2>These adidas Superstar shoes come with branded laces and lace jewel details.</P2>
            </Span>
          </Div>
        </MainBody>
        <Pad></Pad>
      </Body>
    );
  }
}

export default HighLights;