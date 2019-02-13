var express = require('express');
var bodyParser = require('body-parser');

var { mongoose } = require('./db/mongoose');
var { Location } = require('./location-model');

var app = express();

app.use(bodyParser.json());

app.post('/locations', (req, res) => {
  var location = new Location({
    coords: req.body.coords,
    iconImage: req.body.iconImage,
    content: req.body.content
  });

  location.save().then(
    doc => {
      res.send(doc);
    },
    e => {
      res.send(e);
    }
  );
});

app.listen(3000, () => {
  console.log('Started on port 3000');
});
