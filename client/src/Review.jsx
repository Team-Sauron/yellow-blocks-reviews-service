import React, { Component } from 'react';
import styled from 'styled-components';
import ReviewHeading from './ReviewHeading';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
  grid-gap: 10px;
  border-bottom: 1px solid rgb(205, 205, 177);

  div {
    padding: 0 0 10px 0;
  }
  span {
    padding-left: 15px;
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
          <div>
            <div>
              <b>Purchased for: </b>
              {review.purchased}
            </div>
            <div>
              {review.text}
            </div>

            <div>
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
          </div>

          <div className="side">
            <div>
              <b>Difficulty: </b>
              {review.difficulty}
            </div>
            <div>
              <b>Value: </b>
              {review.value}
            </div>
            <div>
              <b>Build Time: </b>
              {review.time}
            </div>
            <div>
              <b>Value: </b>
              {review.value}
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


// = ({ review, thumbs, user }) => (

// );

export default Review;
