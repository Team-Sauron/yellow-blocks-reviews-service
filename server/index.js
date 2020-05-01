const express = require('express');

const app = express();
const path = require('path');
const db = require('../db');

const port = 3003;

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());

app.get('/api/reviews/:id', (req, res) => {
  let id = Number(path.basename(req.url));
  if (id < 1 || id > 100) {
    id = 1;
  }
  const reviewsNum = id * 4 - 4;

  return db.getReviews(reviewsNum)
    .then((results) => {
      res.send(results).json();
      res.end();
    })
    .catch((err) => {
      res.send(`Got an error: ${err}`);
      res.end();
    });
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
