import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;

`;
const Body = styled.div`
  margin-top: 100px;
`;
const Pad = styled.div`
  margin-left: 100px;
  margin-right: 100px;
`;
const MainBody = styled.div`
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
  font-family: AdihausDIN,Helvetica,Arial,sans-serif;
`;

class HighLights extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    // if (this.props.data === undefined) {
    //   return null;
    // } else {
    return (
      <Body>
        <Pad></Pad>
        <MainBody>
          <Header>HIGHLIGHTS</Header>
          <Div>
            <Span>
              <Img src={this.props.data.img1}></Img>
              <P1>{this.props.data.header1}</P1>
              <P2>{this.props.data.p1}</P2>
            </Span>
            <Span>
              <Img src={this.props.data.img2}></Img>
              <P1>{this.props.data.header2}</P1>
              <P2>{this.props.data.p2}</P2>
            </Span>
            <Span>
              <Img src={this.props.data.img3}></Img>
              <P1>{this.props.data.header3}</P1>
              <P2>{this.props.data.p3}</P2>
            </Span>
          </Div>
        </MainBody>
        <Pad></Pad>
      </Body>
    );
  }
}
// }

export default HighLights;