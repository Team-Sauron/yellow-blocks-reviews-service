/* eslint-disable react/self-closing-comp */
import React from 'react';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  border-bottom: 1px solid rgb(205, 205, 177);
  border-radius: 10px;
  .grid {
    border-right: 1px solid gray;
  }
`;

const underline = {
  borderBottom: '1px solid rgb(205, 205, 177)',
};

const ReviewBar = styled.div`
  display: flex;
  align-content: space-between;
  margin: 0 50px 0 0;
  .bg {
    background-color: rgb(205, 205, 177);
    border-radius: 10px;
    width: 50%;
    margin: 0 20px 0 20px;
  }
  .bg>div {
    background-color: rgb(255,237,0);
    height: 20px;
    border-radius: 10px;
  }
`;

const Ratings = ({ rating }) => (
  <div>

    <div className="overallRating" style={underline}>
      <div style={{ fontSize: 'large' }}>
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
      <div className="Rating grid" style={{ fontSize: 'large' }}>
        Rating
        <div>
          <br />
          <ReviewBar>
            <div>5 stars</div>
            <div className="bg">
              <div style={{ width: `${(rating.five / rating.totalReviews) * 100}%` }}></div>
            </div>
            <div>

              {`${rating.five} Reviews`}
            </div>
          </ReviewBar>
          <br />
          <ReviewBar>
            4 stars
            <div className="bg">
              <div style={{ width: `${(rating.four / rating.totalReviews) * 100}%` }}></div>
            </div>
            {`${rating.four} Reviews`}
          </ReviewBar>
          <br />
          <ReviewBar>
            3 stars
            <div className="bg">
              <div style={{ width: `${(rating.three / rating.totalReviews) * 100}%` }}></div>
            </div>
            {`${rating.three} Reviews`}
          </ReviewBar>
          <br />
          <ReviewBar>
            2 stars
            <div className="bg">
              <div style={{ width: `${(rating.two / rating.totalReviews) * 100}%` }}></div>
            </div>
            {`${rating.two} Reviews`}
          </ReviewBar>
          <br />
          <ReviewBar>
            1 stars
            <div className="bg">
              <div style={{ width: `${(rating.one / rating.totalReviews) * 100}%` }}></div>
            </div>
            {`${rating.one} Reviews`}
          </ReviewBar>
          <br />
        </div>
      </div>

      <div className="overallExp" style={{ fontSize: 'large' }}>
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
