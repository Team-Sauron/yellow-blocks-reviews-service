import React, { useState, useEffect, useRef } from 'react';

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
        className="reviewPicture"
        ref={currentPic}
        onClick={enlarge}
        onKeyDown={enlarge}
        src={`${picture}.webp`}
        alt="ReviewPicture"
        srcSet={`${picture}_small.webp 100w, ${picture}_medium.webp 400w`}
      />

      {popUp ? (
        <div className="backdrop">
          <img
            className="modal"
            src={picture}
            alt="pictureModal"
            srcSet={`${picture}_small.webp 100w, ${picture}_medium.webp 400w`}
          />
          <button
            className="modalBtn"
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
