import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const Image = styled.span`
  img {
    max-width: 100px;
    max-height: 100px;
    margin: 0 5px;
    cursor: pointer;
    overflow: hidden;
  }
  .enlarge {
    max-width: 200px;
    max-height: 200px;
  }
  .modal {
    background: gray;
    opacity: 0.5;
  }
`;
const Modal = ({ picture }) => {
  const [popUp, setPopUp] = useState(false);
  const [className, setClassName] = useState(null);
  const outside = useRef();

  const handleClick = (e) => {
    if (outside.current.contains(e.target)) {
      return;
    }
    setPopUp(false);
  };

  const enlarge = () => {
    setPopUp(!popUp);
    return popUp ? setClassName('enlarge') : setClassName(null);
  };

  useEffect(() => {
    const getClick = document.addEventListener('click', handleClick);
    return () => {
      getClick();
    };
  }, []);

  return (
    <Image>
      <span>
        <img
          ref={outside}
          className={className}
          onClick={enlarge}
          onKeyDown={enlarge}
          src={picture}
          alt="IssaPicture"
        />
      </span>
    </Image>
  );
};
export default Modal;
