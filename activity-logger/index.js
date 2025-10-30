const express = require('express')
const activityLogger = require('./src/middleware/logger')
const app = express()
const port = process.env.PORT || 3000


app.use(activityLogger)

app.get('/about', (req, res) => {
    res.send('Activity Logger Application!')
})
app.get('/contact', (req, res) => {
    res.send('Activity Logger Application!')
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Server is listening on port http://localhost:${port}`)
})