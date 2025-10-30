const express = require('express')
const router = require('./src/routes/blog_routes')
const activityLogger = require('./src/middleware/logger')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const port = process.env.PORT || 3000


// default middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('src/public'))

// third party middleware 
app.use(morgan('combined'))
app.use(cors())

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