import React from 'react';
import Bricks from './Bricks';
import styles from '../../public/styles.css';

const Sidebar = ({ review, user }) => (
  <div className={`${styles.spaceOut}`.concat(` ${styles.side}`)}>

    <div>
      Play Experience
      <div className={styles.sideWrapper}>
        <div className={styles.sideBrick}>
          <Bricks
            bricks={review.play}
          />
        </div>
        <div className={styles.sideRating}>
          {Number.parseFloat(review.play).toFixed(1)}
        </div>
      </div>
    </div>

    <div>
      Level of Difficulty
      <div className={styles.sideWrapper}>
        <div className={styles.sideBrick}>
          <Bricks
            bricks={review.difficulty}
          />
        </div>
        <div className={styles.sideRating}>
          {Number.parseFloat(review.difficulty).toFixed(1)}
        </div>
      </div>
    </div>

    <div>
      Value for Money
      <div className={styles.sideWrapper}>
        <div className={styles.sideBrick}>
          <Bricks
            bricks={review.value}
          />
        </div>
        <div className={styles.sideRating}>
          {Number.parseFloat(review.value).toFixed(1)}
        </div>
      </div>
    </div>

    <div>
      <b>Build Time: </b>
      {review.time}
      {' '}
      hours
    </div>

    <div>
      <b>Building Experience: </b>
      {user.experience}
    </div>

  </div>
);

export default Sidebar;
