import React from 'react';
import styled from 'styled-components';

const StarRating = styled.div`
  --rating: ${(props) => (props.stars)};
`;

const Stars = ({ stars }) => (
  <div className="reviewStars">
    <StarRating stars={stars}>
      <div className="Stars" aria-label="starRating" />
    </StarRating>
  </div>
);

export default Stars;
