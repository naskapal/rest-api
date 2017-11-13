const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const morgan = require('morgan')
const Users = require('./routers/usersRouter')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(morgan('dev'))
app.use('/users', Users)

app.get('/', function (req, res) {
  res.send('Hello World!');
})
app.listen(3000, function () {
  console.log('IT WORKS!');
})