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


//   send different types

// Send text
  res.send('Hello World!-')
//   Send JSON
  res.json({message:'Hello World!-'})
//   send with status code
  res.status(200).json({message:'Hello World!-'})
//   set header
  res.set('X-Custom-Header', 'value')
  res.header('Content-Type', "application/json")
//   Redirect
  res.redirect('/login')
  res.redirect(301, 'new-url')
//   send file
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
//   download file
  res.download('/path/to/file.pdf')
//   set cookies
  res.cookie('name', 'value', {maxAge:900000, httpOnly: true})
//   clear cookies
  res.clearCookie('name')
//   end response
res.end()
})


// sending response
app.get('/api/user', (req, res) => {
  const user = {
    id:1,
    name:'Anam',
  }
  res.status(200).send(user)
})


app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Server is listening on port http://localhost:${port}`)
})