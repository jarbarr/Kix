import React from 'react';
import styled from 'styled-components';

const Div = styled.div `
  position: relative;
  justify-content: center;
  width: auto;
  height: 100px;
`;
const Header = styled.p `
  text-transform: uppercase;
`;
const P = styled.p`
`;

class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Div>
        <Header>up to 25% offitewide</Header>
        <P>Use promo code <em>SAVINGS</em> to get 15% off entire purchase, or 25% off when you spend $120 or more. Some exclusions apply.</P>
        <P>*Limited time offer valid on full-price and on-sale items from August 6, 2020 through August 14, 2020 at adidas.com/us/shop. Get 15% off order, or 25% off purchase of $120 or more with promo code SAVINGS at checkout. Offer cannot be combined with other offers. Offer is not valid on prior purchases. Exclusions apply, including but not limited to: Pharrell x adidas, Disney, Girls Are Awesome, Human Made, limited edition Originals and gift cards. Valid on domestic U.S. orders only. adidas reserves the right to change terms and conditions, substitute offer of equal or greater value and end offer at any time without notice. Void where prohibited or restricted by law.</P>
      </Div>
    );
  }
}

export default Popup;

