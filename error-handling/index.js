const express = require('express')
const app = express()
const fs = require('fs')
// const path = require('path')
const port = process.env.PORT || 3000


app.get('/', (req, res, next) => {
    const error = new Error('something went wrong!')
    error.status = 500
    next(error)
})

const errorMiddleware = (err, req, res, next) => {
    res.status(err.status || 500).json({
        success:false, 
        message: err.message || "Internal Server Error"
    })
}

app.use(errorMiddleware())

// app.get('/', (err, req, res, next) => {
//   fs.readFile('example.txt', (err, data) => {
//     if(err) {
//         console.log(err)
//     } else {
//         console.log(data.toString())
//     }
//   })
// })
// app.get('/', (req, res) => {
//   throw new Error('Something went wrong!')
// })


app.listen(port, () => {
  console.log(`Server is listening on port http://localhost:${port}`)
})
