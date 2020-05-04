import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Ratings from './Ratings';
import ReviewsList from './ReviewsList';

const Accordian = styled.div`
  opacity: ${(props) => (props.isOpen ? '1' : '0')};
  max-height: ${(props) => (props.isOpen ? '100%' : '0')};
  padding: ${(props) => (props.isOpen ? '25px' : '0 25px')};
  transition: all 0.2s;
  p {
    font-family: Courier, 'Lucida Console', monospace;
  }
`;

const Title = styled.h3`
  border-top: 1px solid rgb(205, 205, 177);
  background: whitesmoke;
  padding: 20px 0 20px 25px;
  cursor: pointer;
  content: ${(props) => (props.isOpen ? '-' : '+')};
  font-family: Courier, monospace;
`;

const small = {
  border: '25px 25px 20px 25px',
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: true,
      reviews: [],
      average: [],
    };

    this.toggleAccordian = this.toggleAccordian.bind(this);
    this.getReviews = this.getReviews.bind(this);
  }

  componentDidMount() {
    this.getReviews();
  }

  getReviews() {
    let id = window.location.href;
    id = id.slice(id.indexOf('=') + 1);
    axios.get(`/api/reviews/${id}`)
      .then((reviews) => {
        this.setState({
          average: reviews.data[0],
          reviews: reviews.data[1],
        });
      })
      .catch((err) => console.log('Fetch Reviews Error', err));
  }

  toggleAccordian() {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  }

  render() {
    const {
      isOpen, average, reviews,
    } = this.state;
    return (
      <div>
        <div>
          <Title onClick={this.toggleAccordian}>
            Customer Reviews
          </Title>
          <Accordian isOpen={isOpen}>
            <Ratings
              rating={average}
            />
            <div style={small}>
              <small>
                Please note that by submitting a helpfulness vote on a review your IP address is collected and stored by our trusted third party service provider for the sole purpose of preventing multiple entries from the same IP address. To see how to control your personal data, please see our Privacy policy.
              </small>
            </div>
            <br />
            <ReviewsList
              reviews={reviews}
            />
          </Accordian>
        </div>
      </div>
    );
  }
}

export default App;
