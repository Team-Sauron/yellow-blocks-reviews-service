const express = require('express');

const app = express();
const path = require('path');
const db = require('../db');

const port = 3003;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());

const average = (arr) => {
  const count = {
    recommendation: 0,
    play: 0,
    difficulty: 0,
    value: 0,
    one: 0,
    two: 0,
    three: 0,
    four: 0,
    five: 0,
  };
  arr.forEach((item) => {
    count.recommendation += item.overall.recommendation;
    count.play += item.overall.play;
    count.difficulty += item.overall.difficulty;
    count.value += item.overall.value;

    count.one += item.overall.one;
    count.two += item.overall.two;
    count.three += item.overall.three;
    count.four += item.overall.four;
    count.five += item.overall.five;
  });
  count.totalReviews = count.one + count.two + count.three + count.four + count.five;
  count.recommendPercent = Math.round((count.recommendation / count.totalReviews) * 100);
  count.average = Number(((count.five * 5) + (count.four * 4) + (count.three * 3) + (count.two * 2) + (count.one * 1)) / count.totalReviews).toString().substring(0, 3);
  return count;
};

app.get('/api/reviews/:id', (req, res) => {
  let id = Number(path.basename(req.url));
  if (id < 1 || id > 100) {
    id = 1;
  }
  const reviewsNum = id * 4 - 4;

  const resultArr = [];

  return db.getAverage(reviewsNum)
    .then((overall) => average(overall))
    .then((total) => {
      resultArr.push(total);
    })
    .then(() => db.getReviews(reviewsNum)
      .then((results) => {
        resultArr.push(results);
        res.send(resultArr);
      })
      .catch((err) => {
        res.send(err);
      })
      .finally(() => {
        res.end();
      }));
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
