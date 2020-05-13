import React, { Component } from 'react';
import styled from 'styled-components';
import { MdThumbUp, MdThumbDown } from 'react-icons/md';
import ReviewHeading from './ReviewHeading';
import Sidebar from './Sidebar';
import Pictures from './Pictures';

const Accordian = styled.div`
  padding: ${(props) => (props.isOpen ? '1em 0' : '0')};
  height: ${(props) => (props.isOpen ? 'auto' : '4em')};
  transition: all 0.5s ease-in-out;
  overflow: hidden;
  line-height: 1em;
`;

class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      upvote: false,
      downvote: false,
      isOpen: false,
    };

    this.handleThumbs = this.handleThumbs.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
  }

  handleThumbs(e, str) {
    const { upvote, downvote } = this.state;
    const { thumbs } = this.props;
    e.preventDefault();
    if (str === 'up') {
      if (!upvote) {
        thumbs.yes += 1;
      } else {
        thumbs.yes -= 1;
      }
      this.setState((prevState) => ({ upvote: !prevState.upvote }));
    } else if (str === 'down') {
      if (!downvote) {
        thumbs.no += 1;
      } else {
        thumbs.no -= 1;
      }
      this.setState((prevState) => ({ downvote: !prevState.downvote }));
    }
  }

  toggleShow() {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  }

  render() {
    const {
      review, thumbs, user, pictures,
    } = this.props;
    const { isOpen, upvote, downvote } = this.state;
    return (
      <div className="review">
        <div>
          <ReviewHeading review={review} user={user} />
        </div>

        <div className="reviewWrapper">

          <div className="reviewText">
            <Accordian isOpen={isOpen}>
              <div>
                {review.text}
              </div>
            </Accordian>
            <button className="showMore" type="submit" onClick={this.toggleShow}>
              {isOpen ? 'Show Less' : 'Show More'}
            </button>
          </div>

          <div className="pic">
            <Pictures pictures={pictures} />
          </div>

          <div className="helpful">
            <div>Was this helpful?</div>

            <div>
              <span className="up" role="presentation" aria-label="thumbup" onClick={(up) => this.handleThumbs(up, 'up')} onKeyDown={this.handleThumbs}>
                <MdThumbUp style={{ color: `${upvote ? '#006db7' : '#cacaca'}` }} size={25} />
              </span>
              {thumbs.yes}

              <span className="down" role="presentation" aria-label="thumbdown" onClick={(down) => this.handleThumbs(down, 'down')} onKeyDown={this.handleThumbs}>
                <MdThumbDown style={{ color: `${downvote ? 'red' : '#cacaca'}` }} size={25} />
              </span>
              {thumbs.no}
            </div>

          </div>

          <div className="reviewRating">
            <Sidebar review={review} user={user} />
          </div>

        </div>
      </div>

    );
  }
}

export default Review;
