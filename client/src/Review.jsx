import React from 'react';
import styled from 'styled-components';
import ReviewHeading from './ReviewHeading';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
  grid-gap: 10px;
  border-bottom: 1px solid rgb(205, 205, 177);

  div{
    padding: 0 0 10px 0;
  }
`;

const underline = {
  borderBottom: '1px solid rgb(205, 205, 177)',
};

const Review = ({
  review, thumbs, user,
}) => (
  <div style={underline}>
    <div>
      <ReviewHeading review={review} user={user} />
    </div>

    <Grid>
      <div className="rate">
        <div>
          <b>Recommendation: </b>
          {review.recommendation.toString()}
        </div>
        <div>
          <b>Purchased: </b>
          {review.purchased}
        </div>
        <div>
          <b>Text: </b>
          {review.text}
        </div>

        <div>
          <b>Thumbs Up: </b>
          {thumbs.yes}
        </div>
        <div>
          <b>Thumbs Down: </b>
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

export default Review;
