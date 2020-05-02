const express = require('express');

const app = express();
const path = require('path');
const db = require('../db');

const port = 3003;

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());

const average = (arr) => {
  const count = {
    recommendation: 0,
    rating: 0,
    play: 0,
    difficulty: 0,
    value: 0,
    percentage: 0,
  };
  const stars = {
    one: 0,
    two: 0,
    three: 0,
    four: 0,
    five: 0,
  };
  arr.forEach((item) => {
    if (item.review.recommendation) {
      count.recommendation += 1;
    }
    if (item.review.rating === 1) {
      stars.one += 1;
    }
    if (item.review.rating === 2) {
      stars.two += 1;
    }
    if (item.review.rating === 3) {
      stars.three += 1;
    }
    if (item.review.rating === 4) {
      stars.four += 1;
    }
    if (item.review.rating === 5) {
      stars.five += 1;
    }
    count.rating += item.review.rating;
    count.play += item.review.play;
    count.difficulty += item.review.difficulty;
    count.value += item.review.value;
  });
  count.recommendation /= 400 / 100;
  count.rating /= 400;
  count.play /= 400;
  count.difficulty /= 400;
  count.value /= 400;
  return [count, stars];
};

app.get('/api/reviews/:id', (req, res) => {
  let id = Number(path.basename(req.url));
  if (id < 1 || id > 100) {
    id = 1;
  }
  const reviewsNum = id * 4 - 4;

  return db.getReviews(reviewsNum)
    .then((results) => {
      res.send(results);
    })
    .catch((err) => {
      res.send(err);
    })
    .finally(() => {
      res.end();
    });
});

app.get('/api/average', (req, res) => db.getAverage()
  .then((results) => average(results))
  .then((averages) => {
    res.send(averages);
  })
  .catch((err) => {
    res.send(err);
  })
  .finally(() => {
    res.end();
  }));


app.listen(port, () => {
  console.log(`listening on ${port}`);
});
