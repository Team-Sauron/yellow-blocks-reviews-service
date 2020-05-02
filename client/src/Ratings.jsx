import React from 'react';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  border-bottom: 1px solid rgb(205, 205, 177);
`;

const underline = {
  borderBottom: '1px solid rgb(205, 205, 177)'
};

const Ratings = (props) => (
  <div>

    <div className="overallRating" style={underline}>
      <div>
        Overall Rating: {props.rating.rating}
      </div>
      <div>
        Recommended: {`${props.rating.recommendation} %`}
      </div>
    </div>
    <br />

    <Grid>
      <div className="Rating">
        Rating
        <div>
          <p>5 stars: {props.stars.five}</p>
          <p>4 stars: {props.stars.four}</p>
          <p>3 stars: {props.stars.three}</p>
          <p>2 stars: {props.stars.two}</p>
          <p>1 stars: {props.stars.one}</p>
        </div>
      </div>

      <div className="overallExp">
        Overall Experience
        <div>
          <br />
          Play: {props.rating.play}
        </div>
        <div>
          Difficulty: {props.rating.difficulty}
        </div>
        <div>
          Value: {props.rating.value}
        </div>
      </div>
    </Grid>

  </div>
)

export default Ratings;