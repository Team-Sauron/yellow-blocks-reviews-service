const faker = require('faker');
const db = require('./index.js');

const urlArr = [];
let start = 0;

for (let i = 1; i < 26; i += 1) {
  urlArr.push(`https://fec-reviews-pics.s3-us-west-1.amazonaws.com/WebP/${(`0${i}`).slice(-2)}`);
}

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
      text: faker.lorem.paragraphs(faker.random.number({ min: 2, max: 15 })),
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
      four: faker.random.number(5),
      three: faker.random.number(5),
      two: faker.random.number(5),
      one: faker.random.number(5),
    },
    helpful: {
      yes: faker.random.number(100),
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
