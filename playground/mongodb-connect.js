const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/LocationApp', (err, client) => {
  if (err) {
    return console.log('Error');
  }
  console.log('Connected');
  const db = client.db('LocationApp');

  db.collection('Locations').insertOne(
    {
      coords: { lat: -33.890542, lng: 151.274856 },
      iconImage:
        'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
      content: '<h1>Bondi Beach</h1>'
    },
    (err, result) => {
      if (err) {
        return console.log('Unable to insert todo', err);
      }

      console.log(JSON.stringify(result.ops, undefined, 2));
    }
  );
  client.close();
});
