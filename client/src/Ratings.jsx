import React from 'react';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  border-bottom: 1px solid rgb(205, 205, 177);
`;

const underline = {
  borderBottom: '1px solid rgb(205, 205, 177)',
};

const Ratings = ({ rating, stars }) => (
  <div>

    <div className="overallRating" style={underline}>
      <div>
        Overall Rating:
        {' '}
        {rating.rating}
      </div>
      <div>
        Recommended:
        {' '}
        {`${rating.recommendation} %`}
      </div>
    </div>
    <br />

    <Grid>
      <div className="Rating">
        Rating
        <div>
          <p>
            5 stars:
            {' '}
            {stars.five}
          </p>
          <p>
            4 stars:
            {' '}
            {stars.four}
          </p>
          <p>
            3 stars:
            {' '}
            {stars.three}
          </p>
          <p>
            2 stars:
            {' '}
            {stars.two}
          </p>
          <p>
            1 stars:
            {' '}
            {stars.one}
          </p>
        </div>
      </div>

      <div className="overallExp">
        Overall Experience
        <div>
          <br />
          Play:
          {' '}
          {rating.play}
        </div>
        <div>
          Difficulty:
          {' '}
          {rating.difficulty}
        </div>
        <div>
          Value:
          {' '}
          {rating.value}
        </div>
      </div>
    </Grid>

  </div>
);

export default Ratings;
