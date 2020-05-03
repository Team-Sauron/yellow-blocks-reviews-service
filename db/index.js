const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/sauron', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('useCreateIndex', true);


const reviewSchema = new mongoose.Schema({
  userdata: {
    name: { type: String, unique: true },
    age: Number,
    experience: String,
  },
  review: {
    title: String,
    text: String,
    published: Date,
    recommendation: Boolean,
    purchased: String,
    time: Number,
    play: { type: Number, min: 1, max: 5 },
    difficulty: { type: Number, min: 1, max: 5 },
    value: { type: Number, min: 1, max: 5 },
    rating: { type: Number, min: 1, max: 5 },
  },
  pictures: {
    pic1: String,
    pic2: String,
    pic3: String,
    pic4: String,
    pic5: String,
  },
  overall: {
    recommendation: Number,
    five: Number,
    four: Number,
    three: Number,
    two: Number,
    one: Number,
    play: { type: Number, min: 1, max: 5 },
    difficulty: { type: Number, min: 1, max: 5 },
    value: { type: Number, min: 1, max: 5 },
  },
  helpful: {
    yes: Number,
    no: Number,
  },
});

const Review = mongoose.model('Review', reviewSchema);

const saveReviews = (data) => {
  data.save((err, doc) => {
    if (err) {
      return (err, null);
    }
    return (null, doc);
  });
};

const getReviews = (number) => Review.find().limit(4).skip(number);

const getAverage = (number) => Review.find({}, 'overall').limit(4).skip(number);

module.exports = {
  Review,
  saveReviews,
  getReviews,
  getAverage,
};
