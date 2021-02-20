const express = require('express');
const mongoose =  require('mongoose');
const keys = require('./config/keys');

require('./services/passport');


const MongoClient = require('mongodb').MongoClient;
const uri = keys.mongoURI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

const app = express();

require('./routes/authRoutes') (app); // immediately calls app


const PORT = process.env.PORT || 5000;
app.listen(process.env.PORT || 5000);
