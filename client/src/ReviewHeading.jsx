import React from 'react';
import styled from 'styled-components';

const ReviewHeader = ({ review, user }) => (
  <div>
    <div>
      <b>Published: </b>
      {review.published.slice(0, 10)}
    </div>

    <div>
      <b>Rating: </b>
      {review.rating}
    </div>

    <div>
      <b>Title: </b>
      {review.title}
    </div>

    <div>
      {user.name}
      {' '}
      |
      {' '}
      {user.age}
    </div>
  </div>
);

export default ReviewHeader;
