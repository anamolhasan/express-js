const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const port = process.env.PORT || 3000

app.use(express.json())
app.use(cors())


// routes
const bookRoutes = require('./src/routes/bookRoutes')
app.use('/books', bookRoutes)



app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Server is listening on port http://localhost:${port}`)
})