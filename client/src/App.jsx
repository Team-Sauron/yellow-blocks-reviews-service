import React, { Component } from 'react';
import styled from 'styled-components';

const Accordian = styled.div`
opacity: ${props => (props.isOpen ? "1" : "0")};
max-height: ${props => (props.isOpen ? "100%" : "0")};
padding: ${props => (props.isOpen ? "25px" : "0 25px")};
transition: all 0.2s;
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    }

    this.toggleAccordian = this.toggleAccordian.bind(this);
  }
  toggleAccordian() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <div>
          <button onClick={this.toggleAccordian}>click</button>
          <Accordian isOpen={this.state.isOpen}>
            <p>Overall Rating</p>
            <p>Review</p>
            <p>Review</p>
            <p>Review</p>
            <p>Review</p>
          </Accordian>
          hello from react
        </div>
      </div>
    )
  }
}

export default App;
