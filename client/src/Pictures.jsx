import React from 'react';
import Modal from './Modal';


const Pictures = ({ pictures }) => (
  <div className="picture">
    {(pictures)
      && (
      <div>
        {Object.values(pictures).map((pic, id) => (
          <Modal
            key={id}
            picture={pic}
          />
        ))}
      </div>
      )}
  </div>
);

export default Pictures;
