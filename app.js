require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false, limit: '1mb' }));
app.use(express.static('public'));

app.use(require('./route'));

app.listen(process.env.PORT || 3000, () => {
  console.log('SERVER UP');
})
module.exports = app