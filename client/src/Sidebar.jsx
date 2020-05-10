import React from 'react';
import Bricks from './Bricks';

const Sidebar = ({ review, user }) => (
  <div className="spaceOut side">
    <div>
      Play Experience
      <div className="sideWrapper">
        <div className="sideBrick">
          <Bricks
            bricks={review.play}
          />
        </div>
        <div className="sideRating">
          {Number.parseFloat(review.play).toFixed(1)}
        </div>
      </div>
    </div>

    <div>
      Level of Difficulty
      <div className="sideWrapper">
        <div className="sideBrick">
          <Bricks
            bricks={review.difficulty}
          />
        </div>
        <div className="sideRating">
          {Number.parseFloat(review.difficulty).toFixed(1)}
        </div>
      </div>
    </div>

    <div>
      Value for Money
      <div className="sideWrapper">
        <div className="sideBrick">
          <Bricks
            bricks={review.value}
          />
        </div>
        <div className="sideRating">
          {Number.parseFloat(review.value).toFixed(1)}
        </div>
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
