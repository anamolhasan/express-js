const express = require('express')
const app = express()
const port = process.env.PORT || 3000


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


app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Server is listening on port http://localhost:${port}`)
})