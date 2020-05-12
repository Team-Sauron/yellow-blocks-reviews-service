import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { BsPlusCircle } from 'react-icons/bs';
import { AiOutlineMinusCircle } from 'react-icons/ai';

import Ratings from './Ratings';
import ReviewsList from './ReviewsList';

const Accordian = styled.div`
  opacity: ${(props) => (props.isOpen ? '1' : '0')};
  max-height: ${(props) => (props.isOpen ? '100%' : '0')};
  padding: ${(props) => (props.isOpen ? '15px' : '0 15px')};
  transition: all 0.2s;
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
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
    if (id === 'http://localhost:3003/') {
      id = 1;
    }
    axios.get(`http://localhost:3003/api/reviews/${id}`)
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
      <div className="customerReviewsWrapper">

        <div className="customerReviewsAccordion">
          <button type="button" className={`navBar ${isOpen ? 'isOpen' : null}`} onClick={this.toggleAccordian}>
            Customer Reviews
            <div className="openClose">{isOpen ? <AiOutlineMinusCircle /> : <BsPlusCircle /> }</div>
          </button>
        </div>

        <div className="customerReviews">
          <Accordian isOpen={isOpen}>

            <Ratings rating={average} />

            <div className="disclaimer">
              Please note that by submitting a helpfulness vote on a review your IP address is collected and stored by our trusted third party service provider for the sole purpose of preventing multiple entries from the same IP address. To see how to control your personal data, please see our
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}> Privacy policy</a>
              .
            </div>
            <br />

            <div className="overallTitle review">
              <div>
                <b>Reviews</b>
              </div>
              <select className="sortBy selectBar" defaultValue="Relevant">
                <option value="newestFirst">Date - Newest First</option>
                <option value="oldestFirst">Date - Oldest First</option>
                <option value="highToLow">Rating - High to Low</option>
                <option value="lowToHigh">Rating - Low to High</option>
                <option value="Helpfulness">Helpfulness</option>
                <option value="Relevant">Most Relevant</option>
              </select>
            </div>

            <ReviewsList reviews={reviews} />

          </Accordian>
        </div>

      </div>
    );
  }
}

export default App;
