import React from 'react';
import Review from './Review';

const ReviewsList = ({ reviews }) => (
  <div>

    {reviews.map((review) => (
      <Review
        key={review._id}
        user={review.userdata}
        review={review.review}
        pictures={review.pictures}
        thumbs={review.helpful}
      />
    ))}

  </div>
);

export default ReviewsList;
