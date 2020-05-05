import React from 'react';
import styled from 'styled-components';

const Image = styled.span`
  img {
    max-width: 100%;
    max-height: 100%;
    display: inline;
}
`;

const Pictures = ({ pictures }) => (
  <div className="picture">
    {(pictures)
      && (
      <Image>
        <span>
          {Object.values(pictures).map((pic) => (
            <img
              key={pictures.key}
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
