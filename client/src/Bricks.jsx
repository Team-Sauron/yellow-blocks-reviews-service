import React from 'react';
import styled from 'styled-components';

const Rate = styled.div`
  --rating: ${(props) => (props.bricks)};
  `;

const Bricks = ({ bricks }) => (
  <div className="bricks">
    <Rate bricks={bricks}>
      <div className="Bricks" aria-label="starRating" />
    </Rate>
  </div>
);

export default Bricks;
