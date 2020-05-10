import React from 'react';
import Stars from './Stars';
import Bricks from './Bricks';

const Ratings = ({ rating }) => (
  <div>
    <div className="overallRating">
      <span className="overallHead">
        Overall Rating
        <a className="writeReview" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=EyoutEHpPAU">Write a Review</a>
      </span>

      <div>
        <div className="testHeader">
          <Stars
            stars={rating.average}
          />
          {`${rating.average} (${rating.totalReviews} Reviews)`}
        </div>
      </div>

      <div style={{ color: 'green' }}>
        {`${rating.recommendPercent}% would recommend this product.`}
      </div>
    </div>
    <br />

    <div className="gridWrapper">

      <div className="separator">
        <div className="overallTitle">
          Rating
        </div>

        <div className="reviewBar">
          <div>5 stars</div>
          <div className="bg">
            <div style={{ width: `${(rating.five / rating.totalReviews) * 100}%` }} />
          </div>
          <div>
            {`${rating.five} Reviews`}
          </div>
        </div>
        <br />

        <div className="reviewBar">
          4 stars
          <div className="bg">
            <div style={{ width: `${(rating.four / rating.totalReviews) * 100}%` }} />
          </div>
          {`${rating.four} Reviews`}
        </div>
        <br />

        <div className="reviewBar">
          3 stars
          <div className="bg">
            <div style={{ width: `${(rating.three / rating.totalReviews) * 100}%` }} />
          </div>
          {`${rating.three} Reviews`}
        </div>
        <br />

        <div className="reviewBar">
          2 stars
          <div className="bg">
            <div style={{ width: `${(rating.two / rating.totalReviews) * 100}%` }} />
          </div>
          {`${rating.two} Reviews`}
        </div>
        <br />

        <div className="reviewBar">
          1 stars
          <div className="bg">
            <div style={{ width: `${(rating.one / rating.totalReviews) * 100}%` }} />
          </div>
          {`${rating.one} Reviews`}
        </div>
        <br />

      </div>

      <div className="overallExp">
        <div className="overallTitle overall">
          Overall Experience
        </div>

        <div className="exp">
          Play Experience
        </div>
        <div className="overallStar">
          <Bricks
            bricks={rating.play / 4}
          />
          <div className="expRating">
            {`${(rating.play / 4)}`}
          </div>
        </div>

        <div className="exp">
          Level of Difficulty
        </div>
        <div className="overallStar ">
          <Bricks
            bricks={rating.difficulty / 4}
          />
          <div className="expRating">
            {`${(rating.difficulty / 4)}`}
          </div>
        </div>

        <div className="exp">
          Value for Money
        </div>
        <div className="overallStar ">
          <Bricks
            bricks={rating.value / 4}
          />
          <div className="expRating">
            {`${(rating.value / 4)}`}
          </div>
        </div>
      </div>

    </div>
  </div>
);

export default Ratings;
