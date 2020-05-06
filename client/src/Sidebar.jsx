import React from 'react';
import Bricks from './Bricks';

const Sidebar = ({ review, user }) => (
  <div className="spaceOut side">
    <div>
      Play Experience
      <div className="headingBG flexRating">
        <Bricks
          bricks={review.play}
        />
        {review.play}
        {' '}
        .0
      </div>
    </div>

    <div>
      Level of Difficulty
      <div className="headingBG flexRating">
        <Bricks
          bricks={review.difficulty}
        />
        {review.difficulty}
        {' '}
        .0
      </div>
    </div>

    <div>
      Value for Money
      <div className="headingBG flexRating">
        <Bricks
          bricks={review.value}
        />
        {review.value}
        {' '}
        .0
      </div>
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
