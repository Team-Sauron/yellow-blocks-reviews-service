import React from 'react';
import Review from './Review.jsx';

const ReviewsList = (props) => (
  <div>
    <div>
      {props.reviews.map((review) => {
        return <Review key={review._id} user={review.userdata} review={review.review} pictures={review.pictures} thumbs={review.helpful} />
      })}
    </div>
  </div>
)

export default ReviewsList;