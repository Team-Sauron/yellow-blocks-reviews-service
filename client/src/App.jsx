import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Ratings from './Ratings.jsx';
import Reviews from './Reviews.jsx';

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
  border-top: 1px solid rgb(205, 205, 177);
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
      pageID: 1,
      reviews: [],
      average: [],
      stars: {}
    }

    this.toggleAccordian = this.toggleAccordian.bind(this);
    this.getReviews = this.getReviews.bind(this);
    this.getAverage = this.getAverage.bind(this);
  }
  componentDidMount() {
    this.getReviews();
    this.getAverage();
  }

  getReviews() {
    const id = this.state.pageID;
    axios.get(`/api/reviews/${id}`)
      .then((reviews) => {
        this.setState({
          reviews: reviews.data,
          pageID: this.state.pageID +=1
        })
      })
      .catch((err) => {
        return console.log('Fetch Reviews Error', err)
      })
  }
  getAverage() {
    axios.get('/api/average')
      .then((reviews) => {
        this.setState({
          average: reviews.data[0],
          stars: reviews.data[1]
        })
      })
      .catch((err) => {
        return err
      })
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
            <Ratings
              rating={this.state.average}
              stars={this.state.stars}
            />
            <Reviews />
          </Accordian>
        </div>
      </div>
    )
  }
}

export default App;
