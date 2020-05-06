import React from 'react';
import Stars from './Stars';

const Ratings = ({ rating }) => (
  <div>
    <div className="overallRating">
      <div className="overallHead">
        Overall Rating
      </div>

      <div>
        <div className="reviewBar flexRating testHeader">
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

        <div className="reviewBar flexRating">
          <div>5 stars</div>
          <div className="bg">
            <div style={{ width: `${(rating.five / rating.totalReviews) * 100}%` }} />
          </div>
          <div>
            {`${rating.five} Reviews`}
          </div>
        </div>
        <br />

        <div className="reviewBar flexRating">
          4 stars
          <div className="bg">
            <div style={{ width: `${(rating.four / rating.totalReviews) * 100}%` }} />
          </div>
          {`${rating.four} Reviews`}
        </div>
        <br />

        <div className="reviewBar flexRating">
          3 stars
          <div className="bg">
            <div style={{ width: `${(rating.three / rating.totalReviews) * 100}%` }} />
          </div>
          {`${rating.three} Reviews`}
        </div>
        <br />

        <div className="reviewBar flexRating">
          2 stars
          <div className="bg">
            <div style={{ width: `${(rating.two / rating.totalReviews) * 100}%` }} />
          </div>
          {`${rating.two} Reviews`}
        </div>
        <br />

        <div className="reviewBar flexRating">
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
        <div className="reviewBar flexRating">
          <Stars
            stars={rating.play / 4}
          />
          {`${(rating.play / 4)}`}
        </div>

        <div className="exp">
          Level of Difficulty
        </div>
        <div className="reviewBar flexRating">
          <Stars
            stars={rating.difficulty / 4}
          />
          {`${(rating.difficulty / 4)}`}
        </div>

        <div className="exp">
          Value for Money
        </div>
        <div className="reviewBar flexRating">
          <Stars
            stars={rating.value / 4}
          />
          {`${(rating.value / 4)}`}
        </div>
      </div>

    </div>
  </div>
);

export default Ratings;
