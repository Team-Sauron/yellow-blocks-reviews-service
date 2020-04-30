const db = require('./index.js');
const faker = require('faker');
const fs = require('fs');

let urlArr = [
'https://fec-reviews-pics.s3-us-west-1.amazonaws.com/01.jpg',
'https://fec-reviews-pics.s3-us-west-1.amazonaws.com/02.jpg',
'https://fec-reviews-pics.s3-us-west-1.amazonaws.com/03.jpg',
'https://fec-reviews-pics.s3-us-west-1.amazonaws.com/04.jpg',
'https://fec-reviews-pics.s3-us-west-1.amazonaws.com/05.jpg',
'https://fec-reviews-pics.s3-us-west-1.amazonaws.com/06.jpg',
'https://fec-reviews-pics.s3-us-west-1.amazonaws.com/07.jpg',
'https://fec-reviews-pics.s3-us-west-1.amazonaws.com/08.jpg',
'https://fec-reviews-pics.s3-us-west-1.amazonaws.com/09.jpg',
'https://fec-reviews-pics.s3-us-west-1.amazonaws.com/10.jpg',
'https://fec-reviews-pics.s3-us-west-1.amazonaws.com/11.jpg',
'https://fec-reviews-pics.s3-us-west-1.amazonaws.com/12.jpg',
'https://fec-reviews-pics.s3-us-west-1.amazonaws.com/13.jpg',
'https://fec-reviews-pics.s3-us-west-1.amazonaws.com/14.jpg',
'https://fec-reviews-pics.s3-us-west-1.amazonaws.com/15.jpg',
'https://fec-reviews-pics.s3-us-west-1.amazonaws.com/16.jpg',
'https://fec-reviews-pics.s3-us-west-1.amazonaws.com/17.jpg',
'https://fec-reviews-pics.s3-us-west-1.amazonaws.com/18.jpg',
'https://fec-reviews-pics.s3-us-west-1.amazonaws.com/19.jpg',
'https://fec-reviews-pics.s3-us-west-1.amazonaws.com/20.jpg',
'https://fec-reviews-pics.s3-us-west-1.amazonaws.com/21.jpg',
'https://fec-reviews-pics.s3-us-west-1.amazonaws.com/22.jpg',
'https://fec-reviews-pics.s3-us-west-1.amazonaws.com/23.jpg',
'https://fec-reviews-pics.s3-us-west-1.amazonaws.com/24.jpg',
'https://fec-reviews-pics.s3-us-west-1.amazonaws.com/25.jpg'
];
let start = 0;


let urlGrab = function() {
  let limit = faker.random.number({min:1, max:5});
  let hasPics = faker.random.boolean()
  let pic = 1;
  let url = {};

  if (hasPics && start < urlArr.length) {
    for (var j = pic; j <= limit; j++) {
      for (var i = start; i < urlArr.length; i++) {
        url[`pic${pic}`] = urlArr[i];
        break;
      }
      start++;
      pic++;
    }
  } else if (start === urlArr.length|| start >= urlArr.length) {
    start = 0;
  }
  return url;
}

let seed = function() {

  let reviewData = new db.Review({
    userdata: {
      name: faker.internet.userName(),
      age: faker.random.number({ min: 5, max: 75 }),
      experience: faker.lorem.word()
    },
    review: {
      title: faker.lorem.words(),
      text: faker.lorem.paragraphs(),
      published: faker.date.past(),
      recommendation: faker.random.boolean(),
      purchased: faker.hacker.noun(),
      time: faker.random.number(30),
      difficulty: faker.random.number(5),
      value: faker.random.number(5),
      rating: faker.random.number(5)
    },
    pictures: urlGrab(),
    helpful: {
      yes: faker.random.number(200),
      no: faker.random.number(50)
    }
  })
  return reviewData;
}

let dataGen = (num = 400) => {
  for (var i = 0; i < num; i++) {
    let data = seed();
    db.saveReviews(data);
  }
}
dataGen();
