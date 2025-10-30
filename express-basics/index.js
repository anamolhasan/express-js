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
  console.log(req.params)  // /:id = {id}
  console.log(req.query)  // /example?search=mobile  = {search:mobile}
  console.log(req.body)
  console.log(req.headers)
  console.log(req.method)  //get
  console.log(req.url) // /example
  console.log(req.path) //  /example
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


// single parameter
app.get('/users/:id', (req, res) => {
    const userId = req.params.id
    res.send(`User ID: ${userId}`)
})
// Multiple parameters
app.get('/users/:userId/posts/:postId', (req, res) => {
    const {userId, postId} = req.params
    res.json({userId, postId})
})
// optional parameters (express v5 '?' not avilable)
app.get('/posts/:year/:month', (req, res) => {
    const {year, month} = req.params
    res.json({year, month : month || 'all'})
})






app.listen(port, () => {
  console.log(`Server is listening on port http://localhost:${port}`)
})