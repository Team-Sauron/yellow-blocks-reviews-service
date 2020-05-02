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

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      reviews: [],
      average: [],
      stars: {},
    };

    this.toggleAccordian = this.toggleAccordian.bind(this);
    this.getReviews = this.getReviews.bind(this);
    this.getAverage = this.getAverage.bind(this);
  }

  componentDidMount() {
    this.getReviews();
    this.getAverage();
  }

  getReviews() {
    let id = window.location.href;
    id = id.slice(id.indexOf('=') + 1);
    axios.get(`/api/reviews/${id}`)
      .then((reviews) => {
        this.setState({
          reviews: reviews.data,
        });
      })
      .catch((err) => console.log('Fetch Reviews Error', err));
  }

  getAverage() {
    axios.get('/api/average')
      .then((reviews) => {
        this.setState({
          average: reviews.data[0],
          stars: reviews.data[1],
        });
      })
      .catch((err) => err);
  }

  toggleAccordian() {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  }

  render() {
    const {
      isOpen, average, stars, reviews,
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
              stars={stars}
            />
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
