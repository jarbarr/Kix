import React from 'react';
import Carousel from './carousel.jsx';
import ImageSlide from './imageSlide.jsx';
import NavBar from './navbar.jsx';
import styled from 'styled-components';
const axios = require('axios');
const endpoint = '/kix';

// const divStyle = {
//   color: 'blue'
// };
// const logoStyle = {
//   width: 85,
//   height: 60
// };
const Div = styled.div`

`;
const Logo = styled.img`
  height: 50px;
  width: auto;

`;


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      imgSlides: [],
      thumbNails: [],
      options: [],
      highLights: {img: [], cap: []},
      description: [],
      details: '',
      story: [],
      completeTheLook: '',
      howToStyle: ''

    };
    this.fetchDefaultData = this.fetchDefaultData.bind(this);
    this.clickColorOption = this.clickColorOption.bind(this);
    this.clickThumbnail = this.clickThumbnail.bind(this);
    this.changeStyle = this.changeStyle.bind(this);
  }
  fetchDefaultData() {
    axios.get(endpoint)
      .then(console.log)
      .catch(console.log);
  }
  clickColorOption() {
    axios.post(endpoint)
      .then(console.log)
      .catch(console.log);
  }
  clickThumbnail() {

  }
  changeStyle() {

  }
  scrollRight() {

  }
  scrollLeft() {

  }

  componentDidMount() {
    // this.fetchDefaultData();
  }

  render() {
    return (
      <Div className="app">
        <div>
          <Logo className="logo"src="adidaslogo.png" />
        </div>
        <div>
          <ImageSlide />
        </div>
        <div>
          <NavBar />
        </div>
      </Div>
    );
  }
}

export default App;

