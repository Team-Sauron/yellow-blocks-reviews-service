import React from 'react';
import styled from 'styled-components';

const Rate = styled.div`
  --rating: ${(props) => (props.stars)};
  `;

const Stars = ({ stars }) => (
  <div className="reviewStars">
    <Rate stars={stars}>
      <div className="Stars" aria-label="starRating" />
    </Rate>
  </div>
);

export default Stars;
