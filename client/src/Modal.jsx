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
  .backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgb(0, 0, 0, 0.3);
  padding: 50px;
  }
  .modal {
  display: block;
  position: absolute;
  border-radius: 5px;
  max-width: 500px;
  min-height: 300px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  }
  .modalBtn {
  border: solid white;
  background: white;
  padding: 8px 16px;
  text-align: center;
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 0
  }
`;

const Modal = ({ picture }) => {
  const [popUp, setPopUp] = useState(false);
  const outside = useRef();

  const handleClick = (e) => {
    if (outside.current.contains(e.target)) {
      console.log('e.target: ', e.target);
      return;
    }
    setPopUp(false);
  };

  const enlarge = () => {
    setPopUp(!popUp);
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
          onClick={enlarge}
          onKeyDown={enlarge}
          src={picture}
          alt="IssaPicture"
        />
        {popUp ? (
          <div className="backdrop">
            <img
              className="modal"
              src={picture}
              alt="IssaModal"
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
    </Image>

  );
};
export default Modal;
