const express = require('express');
const app = express();
const path = require('path');
const db = require('../db')

const port = 3003;

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());

let page = 1;
let reviewsCount = 0;
console.log('page: ', page);

app.get(`/api/reviews/${page}`, (req,res) => {
  console.log('hellow')
  res.end('lul')
})


app.listen(port, () => {
  console.log(`listening on ${port}`)
});
