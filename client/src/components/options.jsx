import React from 'react';
import styled from 'styled-components';

const Option = styled.nav`
  display: flex;
`;
const Pad = styled.div`
  flex: 1;
`;
const MainBody = styled.div`
  flex: 4;
  display: inline-flex;
  justify-content: center;
`;
const Span = styled.span`
  height:100px;
  width: auto;
  // display: flex;
  padding: 10px;
  margin-top: 15px;
  cursor: pointer;
  justify-content: flex-end;
  flex-direction: column;
`;
const P = styled.p`
  justify-content: flex-end;
  flex-direction: column;
  margin-bottom: 0px;
  padding-bottom: 0px;
  padding-top: 5px;
  margin-right: 5px;
  margin-top: 0px;
`;

const Img = styled.img`
  height: 70px;
  width: auto;
  display: inline-flex;
  padding-left: 0px;
  padding-right: 0px;
  margin-left: 10px;
  margin-right: 10px;
  padding-top: 10px;
  padding-bottom: 0px;
  border-left: 0px;
  border-right: 0px;
  cursor: pointer;
  border-left: 0px;
  border-right: 0px;
  &:hover {
    border-bottom: 4px solid black;
  }
`;
const Select = styled.img`
  height: 70px;
  width: auto;
  display: inline-flex;
  padding-left: 0px;
  padding-right: 0px;
  margin-left: 10px;
  margin-right: 10px;
  padding-top: 10px;
  padding-bottom: 0px;
  border-left: 0px;
  border-right: 0px;
  cursor: pointer;
  border-left: 0px;
  border-right: 0px;
  border-bottom: 4px solid black;
`;

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img1: 0,
      img2: 0,
      img3: 0,
      img4: 0,
      img5: 0
    };
    this.option1 = this.option1.bind(this);
    this.option2 = this.option2.bind(this);
    this.option3 = this.option3.bind(this);
    this.option4 = this.option4.bind(this);
    this.option5 = this.option5.bind(this);
  }
  option1(e) {
    e.preventDefault();
    this.setState({
      img1: 1,
      img2: 0,
      img3: 0,
      img4: 0,
      img5: 0
    });
  }
  option2(e) {
    e.preventDefault();
    this.setState({
      img1: 0,
      img2: 1,
      img3: 0,
      img4: 0,
      img5: 0
    });
  }
  option3(e) {
    e.preventDefault();
    this.setState({
      img1: 0,
      img2: 0,
      img3: 1,
      img4: 0,
      img5: 0
    });
  }
  option4(e) {
    e.preventDefault();
    this.setState({
      img1: 0,
      img2: 0,
      img3: 0,
      img4: 1,
      img5: 0
    });
  }
  option5(e) {
    e.preventDefault();
    this.setState({
      img1: 0,
      img2: 0,
      img3: 0,
      img4: 0,
      img5: 1
    });
  }
  render() {
    return (
      <Option>
        <Pad></Pad>
        <MainBody>
          <Span>
            <P>n COLORS</P>
            <P>AVAILABLE</P>
          </Span>
          {this.state.img1 === 0 ? <Img onClick={this.option1}src="o1.jpg"></Img> : <Select src="o1.jpg"></Select>}
          {this.state.img2 === 0 ? <Img onClick={this.option2} src="o2.jpg"></Img> : <Select src="o2.jpg"></Select>}
          {this.state.img3 === 0 ? <Img onClick={this.option3}src="o3.jpg"></Img> : <Select src="o3.jpg"></Select>}
          {this.state.img4 === 0 ? <Img onClick={this.option4}src="o4.jpg"></Img> : <Select src="o4.jpg"></Select>}
          {this.state.img5 === 0 ? <Img onClick={this.option5}src="imageSlide.jpg"></Img> : <Select src="imageSlide.jpg"></Select>}
        </MainBody>
        <Pad></Pad>
      </Option>
    );
  }
}

export default Options;