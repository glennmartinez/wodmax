
const express = require('express')
require('babel-register');

const app = express()

app.use(express.static('public'))



app.get('/', function (req, res) {
  console.log('test it out');
  res.send('Hello World!');

})

app.get('/test', function (req, res) {
  console.log('test get route');
  res.send('testing the routing');

})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
