const express = require('express')
const app = express()
const port = process.env.PORT || 3000


// get method
app.get('/', (req, res) => {
   res.send('Hello world')
})
// post method
app.post('/post-data', (req, res) => {
   res.send('Hello world')
})

// update method
app.put('/data-update/:id', (req, res) => {
   res.send('Hello world')
})
app.patch('/update/:id', (req, res) => {
   res.send('Hello world')
})
// deleted method
app.delete('/comments/:id', (req, res) => {
   res.send('Hello world')
})

// request object
app.get('/example', (req, res) => {
  console.log(req.params)
  console.log(req.query)
  console.log(req.body)
  console.log(req.headers)
  console.log(req.method)
  console.log(req.url)
  console.log(req.path)
  console.log(req.protocol)
  console.log(req.ip)
  console.log(req.cookies)


  res.send('Hello World!-')
})

// route parameters
app.get('/users/:id', (req, res) => {
    const userId = req.params.id

    res.send(`user Name: ${userId}`)
})

// query string parameters
app.get('/search', (req, res) => {
    const {category} = req.query
    console.log(category)
    res.send(`Search for ${category} on product page`)
})

app.listen(port, () => {
  console.log(`Server is listening on port http://localhost:${port}`)
})