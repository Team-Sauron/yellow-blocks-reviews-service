import React from 'react';
import styled from 'styled-components';

const ReviewHeader = (props) => (
  <div>
    <div>
      <b>Published: </b>
      {props.review.published.slice(0, 10)}
    </div>

    <div>
      <b>Rating: </b>
      {props.review.rating}
    </div>

    <div>
      <b>Title: </b>
      {props.review.title}
    </div>

    <div>
      {props.user.name} | {props.user.age}
    </div>
  </div>
)

export default ReviewHeader;