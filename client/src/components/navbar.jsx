import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  border-top: 1px solid grey;
  border-bottom: 1px solid grey;
`;
const Pad = styled.div`
  flex: 1;
`;
// const Div = styled.div `
//   list-style-type: none;
//   display: infline-flex;
//   flex: 8;
//   height: 100%;
//   justify-content: center;
//   margin-top: 10px;
//   margin-bottom: 10px;
//   // border-bottom: 1px solid black;
// `;

const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  padding: 20px;
  // padding-right: 20px;
  border-bottom: 4px solid white;
  border-top: 4px solid white;
  border-left: 1px solid white;
  border-right: 1px solid white;
  width: auto;
  height: 100%;
  // padding-bottom: 10px;
  // padding-top: 10px;
  Background-color: transparent;
  cursor: pointer;
  &:hover {
    border-bottom: 4px solid black;
  }
`;

const Link = styled.a`
  font-family: AdihausDIN,Helvetica,Arial,sans-serif;
`;

const NavBar = (props) => {
  return (
    <Nav className="navbar">
      <Pad></Pad>
      <Button><Link>Gallery</Link></Button>
      <Button><Link>Highlights</Link></Button>
      <Button><Link>Description</Link></Button>
      <Button><Link>Details</Link></Button>
      <Button><Link>Story</Link></Button>
      <Button><Link>Complete The Look</Link></Button>
      <Button><Link>How To Style</Link></Button>
      <Button><Link>Reviews</Link></Button>
      <Pad></Pad>
    </Nav>
  );
};

export default NavBar;

