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
`;

const Description = (props) => {
  return (
    <Div>
      {/* <Pad></Pad> */}
      <MainBody>
        <Span1>
          <Header>SUPERSTAR SHOES</Header>
          <P1>classic adidas superstart shoes with playful jewels</P1>
          <P2>These shoes update the unmistakable, iconic look of the adidas Superstar shoe with style that's fit for a pair of royal feet. Animal-print embossing stands out on the iridescent leather upper. A trainer-shaped lace jewel decorates one shoe, and a crown-shaped lace jewel decorates the other. Because your shoes should always be accessorized, don't you think?</P2>
        </Span1>
        <Span2>
          <Img src="imageSlide.jpg"></Img>
        </Span2>
      </MainBody>
      {/* <Pad></Pad> */}
    </Div>
  );
};

export default Description;