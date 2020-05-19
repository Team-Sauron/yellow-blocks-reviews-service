import React, { useState, useEffect, useRef } from 'react';
import styles from '../../public/styles.css';

const Modal = ({ picture }) => {
  const [popUp, setPopUp] = useState(false);
  const currentPic = useRef();

  const handleClick = (e) => {
    if (currentPic.current.contains(e.target)) {
      return;
    }
    setPopUp(false);
  };

  const enlarge = () => { setPopUp(!popUp); };

  useEffect(() => {
    const getClick = document.addEventListener('click', handleClick);

    return () => {
      getClick();
    };
  }, []);

  useEffect(() => {
    popUp && (document.body.style.overflow = 'hidden');
    !popUp && (document.body.style.overflow = '');
  }, [popUp]);

  return (
    <span>

      <img
        className={styles.reviewPicture}
        ref={currentPic}
        onClick={enlarge}
        onKeyDown={enlarge}
        src={`${picture}_small.webp`}
        alt="ReviewPicture"
      />

      {popUp ? (
        <div className={styles.backdrop}>
          <img
            className={styles.modal}
            src={`${picture}_medium.webp`}
            alt="pictureModal"
          />
          <button
            className={styles.modalBtn}
            type="button"
            label="close"
            onClick={enlarge}
            onKeyDown={enlarge}
          >
            X
          </button>
        </div>
      ) : null}

    </span>
  );
};
export default Modal;
