import React from 'react';
import styled from 'styled-components';
import styles from '../../public/styles.css';

const StarRating = styled.div`
  --rating: ${(props) => (props.stars)};
`;

const Stars = ({ stars }) => (
  <div className={styles.reviewStars}>
    <StarRating stars={stars}>
      <div className={styles.Stars} aria-label="starRating" />
    </StarRating>
  </div>
);

export default Stars;
