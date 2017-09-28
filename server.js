
const express = require('express')
require('babel-register');

const app = express()

app.use(express.static('public'))
app.set('view engine', 'html');
app.use(express.static(__dirname + '/public'));

app.listen(4000);
// // Handles all routes so you do not get a not found error
// app.get('*', function (request, response){
//     response.sendFile('public/index.html' , { root : __dirname});


// })

app.get('/', function (req, res) {
  console.log('test it out');
   res.send('Hello World!');
  // res.render('index', { title: 'Express' });
  

})

app.get('/test', function (req, res) {
  console.log('test get route');
  res.send('testing the routing');

})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
