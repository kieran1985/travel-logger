const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/LocationApp', (err, client) => {
  if (err) {
    return console.log('Error');
  }
  console.log('Connected');
  const db = client.db('LocationApp');

  db.collection('Locations')
    .find()
    .toArray();
  client.close();
});
