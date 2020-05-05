import React, { Component } from 'react';
import styled from 'styled-components';
import ReviewHeading from './ReviewHeading';
import Sidebar from './Sidebar';
import Pictures from './Pictures';

const Grid = styled.div`
  .wrapper {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 10px;
    border-bottom: 1px solid rgb(205, 205, 177);
    grid-template-areas:
      "a a a a b b b b"
      "a a a a b b b b"
      "c c c c d d d d"
      "e e e e d d d d";
  }

  div {
    font-size: 18px;
    padding: 0 0 10px 0;
  }
  .text {
    grid-area: a;
    align-self: start
  }
  .rating {
    grid-area: b;
  }
  .pic {
    grid-area: c;
  }
  .helpful {
    grid-area: e;
  }
  button {
    background: none;
    border: none;
    margin: 0;
    padding: 0;
    color: blue;
    font-weight: bold;
    cursor: pointer;
`;


const Thumbs = styled.span`
span {
  padding-left: 15px;
  color: transparent;
  transition: all 0.2s;
}
.up {
  text-shadow: ${(props) => (props.upvote ? '0 0 0 dodgerBlue' : '0 0 0 gray')};
  cursor: pointer;
}
.down {
  text-shadow: ${(props) => (props.downvote ? '0 0 0 red' : '0 0 0 gray')};
  cursor: pointer;
}
`;

const underline = {
  borderBottom: '1px solid rgb(205, 205, 177)',
};

class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      upvote: false,
      downvote: false,
      isOpen: false,
    };

    this.handleThumbs = this.handleThumbs.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
  }

  handleThumbs(e) {
    const { upvote, downvote } = this.state;
    const { thumbs } = this.props;
    e.preventDefault();
    if (e.target.ariaLabel === 'thumbup') {
      if (!upvote) {
        thumbs.yes += 1;
      } else {
        thumbs.yes -= 1;
      }
      this.setState((prevState) => ({ upvote: !prevState.upvote }));
    } else {
      if (!downvote) {
        thumbs.no += 1;
      } else {
        thumbs.no -= 1;
      }
      this.setState((prevState) => ({ downvote: !prevState.downvote }));
    }
  }

  handleShow() {
    const { isOpen } = this.state;
    const { review } = this.props;
    const text = review.text.split('.');
    if (isOpen) {
      return [text.join('. ')];
    }
    return [text.splice(0, 10).join('. ')];
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
      <div style={underline}>
        <div>
          <ReviewHeading review={review} user={user} />
        </div>

        <Grid>
          <div className="wrapper">

            <div className="text">
              {this.handleShow().map((str, id) => (
                <div key={id}>{str}</div>
              ))}
              {(review.text.split('.').length > 10)
              && (
              <button type="submit" onClick={this.toggleShow}>
                {isOpen ? 'Show Less' : 'Show More'}
              </button>
              )}
            </div>

            <div className="pic">
              <Pictures pictures={pictures} />
            </div>


            <div className="helpful">
              <div>Was this helpful?</div>

              <Thumbs upvote={upvote}>
                <span className="up" role="presentation" aria-label="thumbup" onClick={this.handleThumbs} onKeyDown={this.handleThumbs}>
                  👍
                </span>
                {thumbs.yes}
              </Thumbs>

              <Thumbs downvote={downvote}>
                <span className="down" role="presentation" aria-label="thumbdown" onClick={this.handleThumbs} onKeyDown={this.handleThumbs}>
                  👎
                </span>
                {thumbs.no}
              </Thumbs>
            </div>

            <div className="rating">
              <Sidebar review={review} user={user} />
            </div>

          </div>
        </Grid>

      </div>
    );
  }
}

export default Review;
