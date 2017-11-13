const express    = require('express');
const bodyParser = require('body-parser');
const morgan     = require('morgan')
const api      = require('./routers/usersRouter')


const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(morgan('dev'))
app.use('/api', api)

app.get('/', function (req, res) {
  res.send('Hello World!');
  // console.log(process.env.SECRET_KEY);
})
app.listen(3000, function () {
  console.log('IT WORKS!');
})