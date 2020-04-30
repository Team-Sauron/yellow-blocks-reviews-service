const db = require('./index.js');
const faker = require('faker');

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

let hasPics;

let picNoPic = function() {
  hasPics = faker.random.boolean();
}

let count = 0;

let urlGrab = function() {
  let limit = faker.random.number({min:0, max:25})
  let url;
  if (hasPics) {
    if (start <= urlArr.length -1) {
      for (var i = start; i < limit; i++) {
        url = urlArr[i];
        start++;
        break;
      }
    } else {
      start = 0;
    }
    return url;
  } else if (count === 5) {
    hasPics = false;
    count = 0;
  } else {
    count++;
  }
}

let seed = function(num) {

  let arr = [];

  while (num > 0) {
    num -= 1;
    let fakerTest = new db.Review({
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
      pictures: {
        constains: picNoPic(),
        pic1: urlGrab(),
        pic2: urlGrab(),
        pic3: urlGrab(),
        pic4: urlGrab(),
        pic5: urlGrab(),
      },
      helpful: {
        yes: faker.random.number(200),
        no: faker.random.number(50)
      }
    })
    arr.push(fakerTest)
  }
  return arr;
}

console.log(seed(6));
