import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Ratings from './Ratings';
import ReviewsList from './ReviewsList';

const Accordian = styled.div`
  opacity: ${(props) => (props.isOpen ? '1' : '0')};
  max-height: ${(props) => (props.isOpen ? '100%' : '0')};
  padding: ${(props) => (props.isOpen ? '15px' : '0 15px')};
  transition: all 0.2s;
  p {
    font-family: Courier, 'Lucida Console', monospace;
  }
`;

const small = {
  fontSize: 'small',
  margin: '12px 0 12px 0',
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
          <button type="button" className={`navBar ${isOpen ? 'active' : null}`} onClick={this.toggleAccordian}>
            Customer Reviews
          </button>
          <Accordian isOpen={isOpen}>
            <Ratings
              rating={average}
            />
            <div style={small}>
              Please note that by submitting a helpfulness vote on a review your IP address is collected and stored by our trusted third party service provider for the sole purpose of preventing multiple entries from the same IP address. To see how to control your personal data, please see our
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" style={{ textDecoration: 'none' }}> Privacy policy</a>
              .
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
