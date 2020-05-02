import React from 'react';
import styled from 'styled-components';

const underline = {
  borderBottom: '1px solid rgb(205, 205, 177)'
};

const Review = (props) => (
  <div style={underline}>
    <div>Published:
      {props.review.published.slice(0, 10)}
    </div>
    <div>Rating:
      {props.review.rating}
    </div>
    <div>Title:
      {props.review.title}
    </div>

    <div>
      <div>
        {props.user.name}
      </div>
      <div>
        {props.user.age}
      </div>
    </div>

    <div>Rating:
      {props.review.rating}
    </div>
    <div>Recommendation:
      {props.review.recommendation.toString()}
    </div>
    <div>Purchased:
      {props.review.purchased}
    </div>
    <div>Text:
      {props.review.text}
    </div>
    <div>Helpful:
      {props.thumbs.yes}
    </div>
    <div>Difficulty:
      {props.review.difficulty}
    </div>
    <div>Value:
      {props.review.value}
    </div>
    <div>Build Time:
      {props.review.time}
    </div>
    <div>Value:
      {props.review.value}
    </div>
    <div>Experience:
      {props.user.experience}
    </div>
  </div>
)

export default Review;