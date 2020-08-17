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
import Coupon from './coupon.jsx';
import Popup from './popup.jsx';
const axios = require('axios');
const endpoint = '/kix';
// const endpoint2 = '/colorChoice';

const Header = styled.div`

`;
const Banner = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  border-top: 1px solid grey;
  border-bottom: 1px solid grey;
`;
const LogoDiv = styled.div`
  padding-left: 20px;
  padding-bottom: 20px;
`;
const Body = styled.div`
  display: flex;
`;
const AppDiv = styled.div`
  border-right: 1px solid grey;
  flex: 3;
`;
const SideBar = styled.div`
  flex: 1;
`;
const Logo = styled.img`
  height: 50px;
  width: auto;

`;
const PopUp = styled.div`
  background-color: grey;
  opacity: .5;
  width: 1000%;
  height: 1000%;
  overflow: hidden;
  position: absolute;
  top: 0%;
  left: 0%;

`;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      imgSlides: {},
      options: {},
      highLights: {},
      description: {},
      details: {},
      image: []
    };
    this.fetchDefaultData = this.fetchDefaultData.bind(this);
    this.clickColorOption = this.clickColorOption.bind(this);
    this.clickThumbnail = this.clickThumbnail.bind(this);
    this.changeStyle = this.changeStyle.bind(this);
    this.zoom = this.zoom.bind(this);
    this.exitZoom = this.exitZoom.bind(this);
    this.zoomMore = this.zoomMore.bind(this);
    this.scrollRight = this.scrollRight.bind(this);
    this.scrollLeft = this.scrollLeft.bind(this);

    // this.coupon = this.coupon.bind(this);

  }
  fetchDefaultData() {
    axios.get(endpoint)
      .then((response) => {
        this.setState({
          page: 0,
          imgSlides: response.data.gallery,
          options: response.data.options,
          highLights: response.data.highLights,
          description: response.data.description,
          details: response.data.details,
          image: [response.data.gallery[1], 1]
        });
      })
      .catch(console.log);
  }
  clickColorOption(shoe) {
    axios.post(endpoint, {
      main: shoe
    })
      .then((response) => {
        this.setState({
          page: 0,
          imgSlides: response.data.gallery,
          options: response.data.options,
          highLights: response.data.highlights,
          description: response.data.description,
          details: response.data.details,
          image: [response.data.gallery[1], 1]
        });
      })
      .catch(console.log);
  }
  clickThumbnail(thumbnail) {
    var img = this.state.imgSlides[thumbnail];
    var state = this.state;
    state.image = [img, thumbnail];
    this.setState(state);
  }
  changeStyle() {

  }
  scrollRight() {
    var img = this.state.image[1];
    if (img === 10) {
      img -= 9;
    } else {
      img++;
    }
    var slide = this.state.imgSlides[img];
    var state = this.state;
    state.image = [slide, img];
    this.setState(state);
  }
  scrollLeft() {
    var img = this.state.image[1];
    if (img === 1) {
      img += 9;
    } else {
      img--;
    }
    var slide = this.state.imgSlides[img];
    var state = this.state;
    state.image = [slide, img];
    this.setState(state);
  }
  // coupon() {
  //   this.setState({
  //     page: 3,
  //     imgSlides: {},
  //     options: {},
  //     highLights: {},
  //     details: {},

  //   });
  // }

  componentDidMount() {
    this.fetchDefaultData();
  }
  exitZoom() {
    var state = this.state;
    state.page = 0;
    this.setState(state);
  }

  zoom(img) {
    var state = this.state;
    state.page = 1;
    state.image = img;
    this.setState(state);
  }
  zoomMore() {
    console.log(this.state);
    var state = this.state;
    state.page++;
    this.setState(state);
  }


  render() {
    return (
      <div>
        {this.state.page === 0 ?
          <Header>
            <LogoDiv>
              {this.state.page === 0 ? <Logo className="logo" src="https://hr-front-end-capstone-adidas.s3-us-west-1.amazonaws.com/Carousel/adidas-seeklogo.com+2-0.png" /> : null}
            </LogoDiv>
            {this.state.page === 0 ? <Banner><Coupon coupon={this.coupon} /></Banner> : null}
          </Header>
          : null}
        <Body>
          {/* {this.state.page === 3 ? <Popup /> : null} */}
          <AppDiv className="app">
            <div>
              {this.state.page === 0 ? <ImageSlide clickThumbnail={this.clickThumbnail}image={this.state.image} data={this.state.imgSlides} z={this.zoom} right={this.scrollRight} left={this.scrollLeft} /> : null}
            </div>
            <div>
              {this.state.page === 0 ? <Options color={this.clickColorOption} data={this.state.options}/> : null}
            </div>
            <div>
              {this.state.page === 0 ? <NavBar /> : null}
            </div>
            {this.state.highLights !== undefined ? <div>
              {this.state.page === 0 ? <HighLights data={this.state.highLights} /> : null}
            </div> : null}
            <div>
              {this.state.page === 0 ? <Description data={this.state.description}/> : null}
            </div>
            <div>
              {this.state.page === 0 ? <Details data={this.state.details}/> : null}
            </div>
          </AppDiv>
          <SideBar></SideBar>
        </Body>
        {this.state.page === 1 ? <Zoom img={this.state.image}zoomIn={this.zoomMore} exOut={this.exitZoom} /> : null}
        {this.state.page === 2 ? <ZoomMore img={this.state.image}zoomLess={this.zoom} exitZoom={this.exitZoom} /> : null}
      </div>
    );
  }
}

export default App;

