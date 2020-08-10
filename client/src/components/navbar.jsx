import React from 'react';

const navStyle = {
  liststyletype: 'none'
};
const listStyle = {
  display: 'inline',
  padding: 25
};

const NavBar = (props) => {
  return (
    <nav style={navStyle} className="navbar">
      <ul>
        <li style={listStyle}><a>Gallery</a></li>
        <li style={listStyle}><a>Description</a></li>
        <li style={listStyle}><a>Details</a></li>
        <li style={listStyle}><a>Story</a></li>
        <li style={listStyle}><a>Complete The Look</a></li>
        <li style={listStyle}><a>How To Style</a></li>
        <li style={listStyle}><a>Reviews</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;

