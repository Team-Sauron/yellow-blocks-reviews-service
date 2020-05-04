/* eslint-disable react/self-closing-comp */
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

const ReviewBar = styled.div`
  .bg {
    background-color: rgb(205, 205, 177);
    border-radius: 10px;
    width: 50%;
  }
  .bg>div {
    background-color: rgb(255,237,0);
    width: 50%;
    height: 20px;
    border-radius: 10px;
  }
`;

const Ratings = ({ rating }) => (
  <div>

    <div className="overallRating" style={underline}>
      <div>
        Overall Rating
      </div>
      <div>
        {`(${rating.totalReviews} Reviews)`}
      </div>
      <div>
        {`${rating.recommendPercent}% would recommend this product.`}
      </div>
    </div>
    <br />

    <Grid>
      <div className="Rating">
        Rating
        <div>
          <ReviewBar>

            <div>
              5 stars
              <div className="bg">
                <div></div>
              </div>
              {`${rating.five} Reviews`}
            </div>

          </ReviewBar>
          <p>
            4 stars:
            {' '}
            {`${rating.four} Reviews`}
          </p>
          <p>
            3 stars:
            {' '}
            {`${rating.three} Reviews`}
          </p>
          <p>
            2 stars:
            {' '}
            {`${rating.two} Reviews`}
          </p>
          <p>
            1 stars:
            {' '}
            {`${rating.one} Reviews`}
          </p>
        </div>
      </div>

      <div className="overallExp">
        Overall Experience
        <br />
        <div>
          <div>
            Play Experience
          </div>
          <div>
            {rating.play}
          </div>
        </div>

        <div>
          <div>
            Level of Difficulty
          </div>
          <div>
            {rating.difficulty}
          </div>
        </div>

        <div>
          <div>
            Value for Money
          </div>
          <div>
            {rating.value}
          </div>
        </div>

      </div>
    </Grid>

  </div>
);

export default Ratings;
