var mongoose = require('mongoose');

var Location = mongoose.model('Location', {
  coords: {
    type: Object,
    required: true
  },
  iconimage: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
});

module.exports = { Location };
