import React from 'react';
import Review from './Review';

const ReviewsList = ({ reviews }) => (
  <div>
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
  </div>
);

export default ReviewsList;
