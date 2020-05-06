import React from 'react';
import Bricks from './Bricks';

const Sidebar = ({ review, user }) => (
  <div className="spaceOut">
    <div>
      Play Experience
      <div className="headingBG flexRating">
        <Bricks
          bricks={review.play}
        />
        {review.play}
      </div>
    </div>

    <div>
      Level of Difficulty
      <div className="headingBG flexRating">
        <Bricks
          bricks={review.difficulty}
        />
        {review.difficulty}
      </div>
    </div>

    <div>
      Value for Money
      <div className="headingBG flexRating">
        <Bricks
          bricks={review.value}
        />
        {review.value}
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
