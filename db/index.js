const mongoose = require('mongoose');
const faker = require('faker');

mongoose.connect('mongodb://localhost/reviews', { useNewUrlParser: true, useUnifiedTopology
: true });

let reviewSchema = new mongoose.Schema({
  userdata: {
    name: {type: String, unique: true},
    age: Number,
    experience: String
  },
  review: {
    title: String,
    text: String,
    published: Date,
    recommendation: Boolean,
    purchased: String,
    time: Number,
    difficulty: {type: Number, min: 1, max: 5},
    value: {type: Number, min: 1, max: 5},
    rating: {type: Number, min: 1, max: 5}
  },
  pictures: {
    contains: Boolean,
    pic1: String,
    pic2: String,
    pic3: String,
    pic4: String,
    pic5: String,
  },
  helpful: {
    yes: Number,
    no: Number
  }
});

let Review = mongoose.model('Review', reviewSchema);

module.exports = {
  Review
}