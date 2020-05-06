import React from 'react';

const Sidebar = ({ review, user }) => (
  <div className="spaceOut">
    <div>
      Play Experience
      <div className="headingBG flexRating">
        <div className="bg">
          <div style={{ width: `${(review.play) * 20}%` }} />
        </div>
        {review.play}
      </div>
    </div>

    <div>
      Level of Difficulty
      <div className="headingBG flexRating">
        <div className="bg">
          <div style={{ width: `${(review.difficulty) * 20}%` }} />
        </div>
        {review.difficulty}
      </div>
    </div>

    <div>
      Value for Money
      <div className="headingBG flexRating">
        <div className="bg">
          <div style={{ width: `${(review.value) * 20}%` }} />
        </div>
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
