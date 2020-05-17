import React from 'react';
import Modal from './Modal';
import styles from '../../public/styles.css';

const Pictures = ({ pictures }) => (
  <div className={styles.picture}>
    {pictures && (
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
