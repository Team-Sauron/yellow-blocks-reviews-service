import React from 'react';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
  grid-gap: 10px;
  border-bottom: 1px solid rgb(205, 205, 177);

  div{
    padding: 0 0 10px 0;
  }
`;

// const main = {
//   gridArea: 'main',
//   whiteSpace: 'unset'
// }
// const side = {
//   gridArea: 'footer'
// }

const underline = {
  borderBottom: '1px solid rgb(205, 205, 177)'
};

const Review = (props) => (
  <div style={underline}>
    <div><b>Published: </b>
      {props.review.published.slice(0, 10)}
    </div>
    <div><b>Rating: </b>
      {props.review.rating}
    </div>
    <div><b>Title: </b>
      {props.review.title}
    </div>

    <div>
      <div>
        {props.user.name}
      </div>
      <div>
        {props.user.age}
      </div>
    </div>

    <Grid>
      <div className="rate">
        <div><b>Recommendation: </b>
          {props.review.recommendation.toString()}
        </div>
        <div><b>Purchased: </b>
          {props.review.purchased}
        </div>
        <div><b>Text: </b>
          {props.review.text}
        </div>

        <div><b>Thumbs Up: </b>
          {props.thumbs.yes}
        </div>
        <div><b>Thumbs Down: </b>
          {props.thumbs.no}
        </div>
      </div>

      <div className="side">
        <div><b>Difficulty: </b>
          {props.review.difficulty}
        </div>
        <div><b>Value: </b>
          {props.review.value}
        </div>
        <div><b>Build Time: </b>
          {props.review.time}
        </div>
        <div><b>Value: </b>
          {props.review.value}
        </div>
        <div><b>Building Experience: </b>
          {props.user.experience}
        </div>
      </div>

    </Grid>
  </div>
)

export default Review;