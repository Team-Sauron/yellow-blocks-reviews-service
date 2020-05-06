import React from 'react';
import moment from 'moment';
import Stars from './Stars';

const ReviewHeader = ({ review, user }) => (
  <div>
    <div className="spaceOut">
      <div>
        {moment(review.published).format('MMMM Do, YYYY')}
      </div>

      <div className="reviewStar reviewHeading">
        <Stars
          stars={review.rating}
        />
        {review.rating}
      </div>

      <div>
        <b>{review.title}</b>
      </div>

      <div>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" style={{ textDecoration: 'none' }}>{user.name}</a>
        {' '}
        |
        {' '}
        {user.age}
      </div>

      <div className="rate">
        <div style={{ color: review.recommendation ? 'green' : 'red' }}>
          {(review.recommendation) ? 'I would recommend this to a friend!' : 'I would not recommend this to a friend!'}
        </div>
      </div>

      <div>
        <b>Purchased for: </b>
        {review.purchased}
      </div>

    </div>

  </div>
);

export default ReviewHeader;
