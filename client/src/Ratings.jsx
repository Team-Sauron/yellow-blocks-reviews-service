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
  .exp {
    margin: 10px 20px 0 20px;
  }
`;

const ReviewBar = styled.div`
  display: flex;
  align-content: space-between;
  margin: 0 50px 0 0;
  .bg {
    background-color: rgb(205, 205, 177);
    border-radius: 10px;
    width: 150px;
    margin: 0 20px 0 20px;
  }
  .bg>div {
    background-color: rgb(255,237,0);
    height: 20px;
    border-radius: 10px 0 0 10px;
  }
`;

const Ratings = ({ rating }) => (
  <div>

    <div className="overallRating">
      <div style={{ fontSize: 'large' }}>
        Overall Rating
      </div>
      <div>
        <ReviewBar>
          <div className="bg" style={{ margin: '0 20px 15px 0' }}>
            <div style={{ width: `${(rating.average * 20)}%` }}></div>
          </div>
          {`${rating.average} (${rating.totalReviews} Reviews)`}
        </ReviewBar>
      </div>
      <div style={{ color: 'green' }}>
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
        <div className="exp">
          Overall Experience
        </div>

        <div className="exp">
          Play Experience
        </div>
        <ReviewBar>
          <div className="bg">
            <div style={{ width: `${(rating.play / 4) * 20}%` }}></div>
          </div>
          {`${(rating.play / 4)}`}
        </ReviewBar>

        <div className="exp">
          Level of Difficulty
        </div>
        <ReviewBar>
          <div className="bg">
            <div style={{ width: `${(rating.difficulty / 4) * 20}%` }}></div>
          </div>
          {`${(rating.difficulty / 4)}`}
        </ReviewBar>

        <div className="exp">
          Value for Money
        </div>
        <ReviewBar>
          <div className="bg">
            <div style={{ width: `${(rating.value / 4) * 20}%` }}></div>
          </div>
          {`${(rating.value / 4)}`}
        </ReviewBar>

      </div>
    </Grid>

  </div>
);

export default Ratings;
