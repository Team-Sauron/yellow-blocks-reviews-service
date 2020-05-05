import React from 'react';
import styled from 'styled-components';

const Experience = styled.div`
  display: flex;
  align-content: space-between;
  margin: 5px 50px 5px 0;
  .bg {
    background-color: rgb(205, 205, 177);
    border-radius: 10px;
    width: 150px;
    margin: 0 20px 0 0;
    padding: 0 0 0 0;
  }
  .bg>div {
    background-color: rgb(255,237,0);
    height: 20px;
    border-radius: 10px 0 0 10px;
    margin: 0 20px 0 0;
    padding: 0 0 0 0;
  }
`;

const Sidebar = ({ review, user }) => (
  <div>
    <div>
      Play Experience
      <Experience>
        <div className="bg">
          <div style={{ width: `${(review.play) * 20}%` }} />
        </div>
        {review.play}
      </Experience>
    </div>

    <div>
      Level of Difficulty
      <Experience>
        <div className="bg">
          <div style={{ width: `${(review.difficulty) * 20}%` }} />
        </div>
        {review.difficulty}
      </Experience>
    </div>

    <div>
      Value for Money
      <Experience>
        <div className="bg">
          <div style={{ width: `${(review.value) * 20}%` }} />
        </div>
        {review.value}
      </Experience>
    </div>

    <div>
      <b>Build Time: </b>
      {review.time}
      {' '}
      hours
    </div>

    <div>
      <b>Building Experience: </b>
      {user.experience}
    </div>

  </div>
);

export default Sidebar;
