const faker = require('faker');
const db = require('./index.js');

const urlArr = [
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
  'https://fec-reviews-pics.s3-us-west-1.amazonaws.com/25.jpg',
];
let start = 0;

const urlGrab = () => {
  const limit = faker.random.number({ min: 1, max: 5 });
  const hasPics = faker.random.boolean();
  let pic = 1;
  const url = {};

  if (hasPics && start < urlArr.length) {
    for (let j = pic; j <= limit; j += 1) {
      for (let i = start; i < urlArr.length; i += 1) {
        url[`pic${pic}`] = urlArr[i];
        break;
      }
      start += 1;
      pic += 1;
    }
  } else if (start === urlArr.length || start >= urlArr.length) {
    start = 0;
  }
  return url;
};

const seed = () => {
  const reviewData = new db.Review({
    userdata: {
      name: faker.internet.userName(),
      age: faker.random.number({ min: 5, max: 75 }),
      experience: faker.lorem.word(),
    },
    review: {
      title: faker.lorem.words(),
      text: faker.random.boolean() ? faker.lorem.paragraphs(5) : faker.lorem.paragraphs(15),
      published: faker.date.past(),
      recommendation: faker.random.boolean(),
      purchased: faker.hacker.noun(),
      time: faker.random.number(30),
      play: faker.random.number({ min: 1, max: 5 }),
      difficulty: faker.random.number({ min: 1, max: 5 }),
      value: faker.random.number({ min: 1, max: 5 }),
      rating: faker.random.number({ min: 1, max: 5 }),
    },
    pictures: urlGrab(),
    overall: {
      recommendation: faker.random.number({ min: 1, max: 30 }),
      play: faker.random.number({ min: 1, max: 5 }),
      difficulty: faker.random.number({ min: 1, max: 5 }),
      value: faker.random.number({ min: 1, max: 5 }),
      five: faker.random.number(30),
      four: faker.random.number(30),
      three: faker.random.number(30),
      two: faker.random.number(30),
      one: faker.random.number(30),
    },
    helpful: {
      yes: faker.random.number(200),
      no: faker.random.number(50),
    },
  });
  return reviewData;
};

const dataGen = (num = 400) => {
  for (let i = 0; i < num; i += 1) {
    const data = seed();
    db.saveReviews(data);
  }
  return console.log('Seeded!');
};

dataGen();
