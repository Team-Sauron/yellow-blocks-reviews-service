import React from 'react';
import styled from 'styled-components';

const Image = styled.span`
  img {
    max-width: 100px;
    max-height: 100px;
    margin: 0 5px;
    cursor: pointer;
    overflow: hidden;
  }
`;

const Pictures = ({ pictures }) => (
  <div className="picture">
    {(pictures)
      && (
      <Image>
        <span>
          {Object.values(pictures).map((pic, id) => (
            <img
              key={id}
              src={pic}
              alt="IssaPicture"
            />
          ))}
        </span>
      </Image>
      )}
  </div>
);

export default Pictures;
