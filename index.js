const express = require('express')
const app = express()
const port = 3000

//app.use(express.static(__dirname + 'extra'))
app.set('view engine', 'jade');
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.render('home')
})
app.get('/about', (req, res) => {
  res.render('contact')
})
app.get('/info', (req, res) => {
  res.render('info')
})

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})
