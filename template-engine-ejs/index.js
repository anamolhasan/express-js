const express = require('express')
const app = express()
const path = require('path')
// const { title } = require('process')

const port = process.env.PORT || 3000

// set EJS the template engine
app.set('view engine', 'ejs')

app.set('views', path.join(process.cwd(), 'views'))


app.get('/', (req, res) => {
  res.render('index', {title: "Home Page", message:'Welcome to EJS'})
})


app.listen(port, () => {
  console.log(`Server is listening on port http://localhost:${port}`)
})