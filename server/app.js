const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/my-blog', { useMongoClient: true });
// mongoose.connect('mongodb://heroku_6drddcwl:opt28a9k1ov3u4vdfren627n2a@ds131432.mlab.com:31432/heroku_6drddcwl', { useMongoClient: true });
mongoose.Promise = Promise;

const app = express();
 app.use(bodyParser.json());

 app.get('/',(req, res) =>{
     res.status(200).send();
 })
 app.use('/api/users', require('./routes/users'));

 app.use('/api/blogs', require('./routes/blogs'));


 module.exports = app;
