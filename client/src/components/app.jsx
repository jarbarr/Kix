import React from 'react';
import LeftArrow from './leftArrow.jsx';
import RightArrow from './rightArrow.jsx';
const axios = require('axios');
const endpoint = '/kix';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0
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
  componentDidMount() {
    this.fetchDefaultData();
  }
  render() {
    return (
      <div>
        <h1> Hello World! </h1>
        <LeftArrow/>
        <RightArrow />
      </div>
    );
  }
}

export default App;