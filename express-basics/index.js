const express = require('express')
const app = express()
const port = process.env.PORT || 3000



app.get('/', (req, res) => {
    console.log('Hello world')
})

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


app.listen(port, () => {
  console.log(`Server is listening on port http://localhost:${port}`)
})