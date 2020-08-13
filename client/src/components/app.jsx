import React from 'react';
import ImageSlide from './imageSlide.jsx';
import NavBar from './navbar.jsx';
import styled from 'styled-components';
import Options from './options.jsx';
import HighLights from './highlights.jsx';
import Description from './description.jsx';
import Details from './details.jsx';
import Zoom from './zoom.jsx';
import ZoomMore from './zoomMore.jsx';
const axios = require('axios');
const endpoint = '/kix';

const Header = styled.div`

`;
const Banner = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;
const LogoDiv = styled.div`
  padding-left: 20px;
`;
const Body = styled.div`
  display: flex;
`;
const AppDiv = styled.div`
  border-right: 1px solid black;
  flex: 3;
`;
const SideBar = styled.div`
  flex: 1;
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
      options: [],
      highLights: { img: [], cap: [] },
      details: '',
      story: []
    };
    this.fetchDefaultData = this.fetchDefaultData.bind(this);
    this.clickColorOption = this.clickColorOption.bind(this);
    this.clickThumbnail = this.clickThumbnail.bind(this);
    this.changeStyle = this.changeStyle.bind(this);
    this.zoom = this.zoom.bind(this);
    this.exitZoom = this.exitZoom.bind(this);
    this.zoomMore = this.zoomMore.bind(this);
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
  exitZoom() {
    this.setState({
      page: 0,
      imgSlides: [],
      options: [],
      highLights: { img: [], cap: [] },
      description: [],
      details: '',
      story: []
    });
  }

  zoom() {
    this.setState({
      page: 1,
      imgSlides: [],
      options: [],
      highLights: { img: [], cap: [] },
      details: '',
      story: []
    });
  }
  zoomMore() {
    this.setState({
      page: 2,
      imgSlides: [],
      options: [],
      highLights: { img: [], cap: [] },
      details: '',
      story: []
    });
  }

  render() {
    return (
      <div>
        {this.state.page === 0 ? <Header>
          <LogoDiv>
            {this.state.page === 0 ? <Logo className="logo" src="adidaslogo.png" /> : null}
          </LogoDiv>
          {this.state.page === 0 ? <Banner></Banner> : null}
        </Header> : null}
        <Body>
          <AppDiv className="app">
            <div>
              {this.state.page === 0 ? <ImageSlide zoom={this.zoom} right={this.scrollRight} left={this.scrollLeft} /> : null}
            </div>
            <div>
              {this.state.page === 0 ? <Options /> : null}
            </div>
            <div>
              {this.state.page === 0 ? <NavBar /> : null}
            </div>
            <div>
              {this.state.page === 0 ? <HighLights /> : null}
            </div>
            <div>
              {this.state.page === 0 ? <Description /> : null}
            </div>
            <div>
              {this.state.page === 0 ? <Details /> : null}
            </div>
          </AppDiv>
          <SideBar></SideBar>
        </Body>
        { this.state.page === 1 ? <Zoom zoomIn={this.zoomMore} exOut={this.exitZoom} /> : null }
        { this.state.page === 2 ? <ZoomMore zoomLess={this.zoom} exitZoom={this.exitZoom} /> : null }
      </div>
    );
  }
}

export default App;

