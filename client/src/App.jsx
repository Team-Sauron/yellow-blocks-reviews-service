import React, { Component } from 'react';
import styled from 'styled-components';

const Accordian = styled.div`
  opacity: ${props => (props.isOpen ? '1' : '0')};
  max-height: ${props => (props.isOpen ? '100%' : '0')};
  padding: ${props => (props.isOpen ? '25px' : '0 25px')};
  transition: all 0.2s;
  p {
    font-family: Courier, 'Lucida Console', monospace;
  }
`;

const Title = styled.h3`
  border-top: 1px solid gray;
  background: whitesmoke;
  padding: 20px 0 20px 25px;
  cursor: pointer;
  content: ${props => (props.isOpen ? '-' : '+')};
  font-family: Courier, monospace;
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
          <Title onClick={this.toggleAccordian}>Customer Reviews
          </Title>
          <Accordian isOpen={this.state.isOpen}>
            <p>Overall Rating</p>
            <p>Review</p>
            <p>Review</p>
            <p>Review</p>
            <p>Review</p>
          </Accordian>
        </div>
      </div>
    )
  }
}

export default App;
