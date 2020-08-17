import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  margin-top: 100px;
`;

const Span1 = styled.span`
  justify-content: column;
  padding-left: 60px;
  margin-left: 60px;
`;
const Span2 = styled.span`
  display: inline-flex;
`;
const P1 = styled.p`
  font-weight: bold;
  font-family: AdihausDIN,Helvetica,Arial,sans-serif;
  font-weight: italic;
  text-transform: uppercase;
  font-size: 18px;
`;
const Img = styled.img`
  padding-right: 180px;
  padding-left: 20px;
  width: 450px;
  height: auto;
`;
const MainBody = styled.div `
  // flex: 4;
  display: inline-flex;
`;
const Pad = styled.div`
  // flex: 1;
  // margin: 0px;
  // padding: 0px;
`;
const P2 = styled.p`

`;
const Header = styled.p`
font-size: 36px;
font-weight: bold;
text-transform: uppercase;
font-family: AdihausDIN,Helvetica,Arial,sans-serif;
`;

const Description = (props) => {
  return (
    <Div>
      {/* <Pad></Pad> */}
      <MainBody>
        <Span1>
          <Header>{props.data.title}</Header>
          <P1>{props.data.header}</P1>
          <P2>{props.data.bio}</P2>
        </Span1>
        <Span2>
          <Img src={props.data.img}></Img>
        </Span2>
      </MainBody>
      {/* <Pad></Pad> */}
    </Div>
  );
};

export default Description;