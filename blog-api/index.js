const express = require('express')
const router = require('./src/routes/blog_routes')
const activityLogger = require('./src/middleware/logger')
const app = express()
const port = process.env.PORT || 3000


// default middleware
app.use(express.json())

// use the custom middleware globally
app.use(activityLogger)

// using blogs routes
const blogsRoute = router
app.use('/blogs', blogsRoute)









app.get('/', (req, res) => {
  res.send('Blog server is running....!')
})


app.listen(port, () => {
  console.log(`Server is listening on port http://localhost:${port}`)
})