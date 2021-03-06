import React from 'react';
import moment from 'moment';
import Stars from './Stars';
import styles from '../../public/styles.css';

const ReviewHeader = ({ review, user }) => (
  <div className={styles.spaceOut}>

    <div>
      {moment(review.published).format('MMMM Do, YYYY')}
    </div>

    <div className={`${styles.reviewStar}`.concat(` ${styles.reviewHeading}`)}>
      <Stars
        stars={review.rating}
      />
      {Number.parseFloat(review.rating).toFixed(1)}
    </div>

    <div>
      <b>{review.title}</b>
    </div>

    <div>
      <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" style={{ textDecoration: 'none' }}>{user.name}</a>
      {' '}
      |
      {' '}
      {user.age}
    </div>

    <div className={styles.rate}>
      <div style={{ color: review.recommendation ? 'green' : 'red' }}>
        {(review.recommendation) ? 'I would recommend this to a friend!' : 'I would not recommend this to a friend!'}
      </div>
    </div>

    <div>
      <b>Purchased for: </b>
      {review.purchased}
    </div>

  </div>
);

export default ReviewHeader;
