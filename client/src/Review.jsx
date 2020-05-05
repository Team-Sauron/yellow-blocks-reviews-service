import React, { Component } from 'react';
import styled from 'styled-components';
import ReviewHeading from './ReviewHeading';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 10px;
  border-bottom: 1px solid rgb(205, 205, 177);
  grid-template-areas:
    "a a a a b b b b"
    "a a a a b b b b"
    "c c c c d d d d"
    "c c c c d d d d";

  div {
    padding: 0 0 10px 0;
  }
  span {
    padding-left: 15px;
  }
  .one {
    grid-area: a;
    align-self: start
  }
  .two {
    grid-area: b;
    align-self: start;
  }
  .helpful {
    grid-area: c;
    align-self: end;
  }
`;

const ReviewBar = styled.div`
  display: flex;
  align-content: space-between;
  margin: 5px 50px 5px 0;
  .bg {
    background-color: rgb(205, 205, 177);
    border-radius: 10px;
    width: 150px;
    margin: 0 20px 0 0;
    padding: 0 0 0 0;
  }
  .bg>div {
    background-color: rgb(255,237,0);
    height: 20px;
    border-radius: 10px 0 0 10px;
    margin: 0 20px 0 0;
    padding: 0 0 0 0;
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
    };

    this.handleThumbs = this.handleThumbs.bind(this);
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

  render() {
    const { review, thumbs, user } = this.props;
    return (
      <div style={underline}>
        <div>
          <ReviewHeading review={review} user={user} />
        </div>

        <Grid>
          <div className="one">
            <div>
              <b>Purchased for: </b>
              {review.purchased}
            </div>
            <div>
              {review.text}
            </div>

          </div>
          <div className="helpful">
            <div>Was this helpful?</div>

            <span role="presentation" aria-label="thumbup" onClick={this.handleThumbs} onKeyDown={this.handleThumbs}>
              👍
            </span>
            {thumbs.yes}
            <span role="presentation" aria-label="thumbdown" onClick={this.handleThumbs} onKeyDown={this.handleThumbs}>
              👎
            </span>
            {thumbs.no}
          </div>

          <div className="side">

            <div>
              Play Experience
              <ReviewBar>
                <div className="bg">
                  <div style={{ width: `${(review.play) * 20}%` }} />
                </div>
                {review.play}
              </ReviewBar>
            </div>

            <div>
              Level of Difficulty
              <ReviewBar>
                <div className="bg">
                  <div style={{ width: `${(review.difficulty) * 20}%` }} />
                </div>
                {review.difficulty}
              </ReviewBar>
            </div>
            <div>
              Value for Money
              <ReviewBar>
                <div className="bg">
                  <div style={{ width: `${(review.value) * 20}%` }} />
                </div>
                {review.value}
              </ReviewBar>
            </div>

            <div>
              <b>Build Time: </b>
              {review.time}
              {' '}
              hours
            </div>

            <div>
              <b>Building Experience: </b>
              {user.experience}
            </div>
          </div>

        </Grid>

      </div>
    );
  }
}

export default Review;
