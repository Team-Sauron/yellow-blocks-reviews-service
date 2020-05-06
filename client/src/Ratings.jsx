import React from 'react';

const Ratings = ({ rating }) => (
  <div>
    <div className="overallRating">
      <div className="overallTitle">
        Overall Rating
      </div>

      <div>
        <div className="reviewBar flexRating">
          <div className="bg" style={{ margin: '0 20px 15px 0' }}>
            <div className="overallRating" style={{ width: `${(rating.average * 20)}%` }} />
          </div>
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
          <div className="bg">
            <div style={{ width: `${(rating.play / 4) * 20}%` }} />
          </div>
          {`${(rating.play / 4)}`}
        </div>

        <div className="exp">
          Level of Difficulty
        </div>
        <div className="reviewBar flexRating">
          <div className="bg">
            <div style={{ width: `${(rating.difficulty / 4) * 20}%` }} />
          </div>
          {`${(rating.difficulty / 4)}`}
        </div>

        <div className="exp">
          Value for Money
        </div>
        <div className="reviewBar flexRating">
          <div className="bg">
            <div style={{ width: `${(rating.value / 4) * 20}%` }} />
          </div>
          {`${(rating.value / 4)}`}
        </div>
      </div>

    </div>
  </div>
);

export default Ratings;
