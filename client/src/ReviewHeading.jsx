import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const Space = styled.div`
  div {
    margin: 10px 0 10px 0;
  }
`;

const ReviewBar = styled.div`
  display: flex;
  align-content: space-between;
  margin: 10px 50px 10px 0;
  .bg {
    background-color: rgb(205, 205, 177);
    border-radius: 10px;
    width: 150px;
    margin: 0 20px 0 0;
  }
  .bg>div {
    background-color: rgb(255,237,0);
    height: 20px;
    border-radius: 10px 0 0 10px;
    margin: 0 20px 0 0;
  }
`;

const ReviewHeader = ({ review, user }) => (
  <div>
    <Space>
      <div>
        {moment(review.published).format('MMMM Do, YYYY')}
      </div>

      <div>
        <ReviewBar>
          <div className="bg">
            <div style={{ width: `${(review.rating) * 20}%` }} />
          </div>
          {review.rating}
        </ReviewBar>
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

    </Space>

  </div>
);

export default ReviewHeader;
