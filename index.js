const express = require('express')
const app = express()
const port = 3000

app.set('view engine','ejs')


//this will allow us to serve up static files, CSS, images & JS
app.use(express.static(__dirname));


app.get('/', (req, res) => {
  var title = "Home"
  var heading = "Victors Favorite Things"
  res.render('pages/index',{
    'title':title,
    'heading':heading
  })
})

app.get('/Soccer', (req, res) => {
  var title = "Victors Favorite soccer  team is  FC Barcelona"
  var heading = 'My Website'
  res.render('pages/soccer',{
    'title':title,
    'heading':heading
  })
})

app.get('/Games', (req, res) => {
  var title = "Best Game of 2022 is Warzone in my opinion"
  var heading = 'My Website'
  res.render('pages/games',{
    'title':title,
    'heading':heading
  })
})

app.get('/Players', (req, res) => {
  var title = "Best Soccer player ever is Lionel Messi"
  var heading = 'My Website'
  res.render('pages/players',{
    'title':title,
    'heading':heading
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})