const express = require('express')
const app = express()

app.use( express.static('public') );

app.get('/', function (req, res) {
  res.send('Hello World');
})
app.get('/elements', function (req, res) {
    res.sendFile(__dirname+'/public/elements.html');
  })

app.get('/hola-mundo', function (req, res) {
    res.send('Hello World from another controller');
})
app.get('*', function (req, res) {
    res.sendFile(__dirname+'/public/404.html');
})
app.listen(3000)