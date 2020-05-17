import React from 'react';
import Stars from './Stars';
import Bricks from './Bricks';
import styles from '../../public/styles.css';

const Ratings = ({ rating }) => (
  <div>
    <div className={styles.overallRating}>
      <span className={styles.overallHead}>
        Overall Rating
        <a className={styles.writeReview} target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=EyoutEHpPAU">Write a Review</a>
      </span>

      <div>
        <div className={styles.testHeader}>
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

    <div className={styles.gridWrapper}>

      <div className={styles.separator}>
        <div className={styles.overallTitle}>
          Rating
        </div>

        <div className={styles.reviewBar}>
          <div>5 stars</div>
          <div className={styles.ratingBar}>
            <div style={{ width: `${(rating.five / rating.totalReviews) * 100}%` }} />
          </div>
          <div>
            {`${rating.five} Reviews`}
          </div>
        </div>
        <br />

        <div className={styles.reviewBar}>
          4 stars
          <div className={styles.ratingBar}>
            <div style={{ width: `${(rating.four / rating.totalReviews) * 100}%` }} />
          </div>
          {`${rating.four} Reviews`}
        </div>
        <br />

        <div className={styles.reviewBar}>
          3 stars
          <div className={styles.ratingBar}>
            <div style={{ width: `${(rating.three / rating.totalReviews) * 100}%` }} />
          </div>
          {`${rating.three} Reviews`}
        </div>
        <br />

        <div className={styles.reviewBar}>
          2 stars
          <div className={styles.ratingBar}>
            <div style={{ width: `${(rating.two / rating.totalReviews) * 100}%` }} />
          </div>
          {`${rating.two} Reviews`}
        </div>
        <br />

        <div className={styles.reviewBar}>
          1 stars
          <div className={styles.ratingBar}>
            <div style={{ width: `${(rating.one / rating.totalReviews) * 100}%` }} />
          </div>
          {`${rating.one} Reviews`}
        </div>
        <br />

      </div>

      <div className={styles.overallExp}>
        <div className={`${styles.overallTitle}`.concat(` ${styles.soverall}`)}>
          Overall Experience
        </div>

        <div className={styles.expBar}>
          Play Experience
        </div>
        <div className={styles.brickWrapper}>
          <div className={styles.brick}>
            <Bricks
              bricks={rating.play / 4}
            />
          </div>
          <div className={styles.expRating}>
            {`${Number.parseFloat(rating.play / 4).toFixed(1)}`}
          </div>
        </div>

        <div className={styles.expBar}>
          Level of Difficulty
        </div>
        <div className={styles.brickWrapper}>
          <div className={styles.brick}>
            <Bricks
              bricks={rating.difficulty / 4}
            />
          </div>
          <div className={styles.expRating}>
            {`${Number.parseFloat(rating.difficulty / 4).toFixed(1)}`}
          </div>
        </div>

        <div className={styles.expBar}>
          Value for Money
        </div>
        <div className={styles.brickWrapper}>
          <div className={styles.brick}>
            <Bricks
              bricks={rating.value / 4}
            />
          </div>
          <div className={styles.expRating}>
            {`${Number.parseFloat(rating.value / 4).toFixed(1)}`}
          </div>
        </div>
      </div>

    </div>
  </div>
);

export default Ratings;
