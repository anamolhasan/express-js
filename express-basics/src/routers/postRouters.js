const express = require('express')

const router = express.Router()

// get method
router.get('/', (req, res) => {
   res.send('Hello world')
})
// post method
router.post('/post-data', (req, res) => {
   res.send('Hello world')
})

// update method
router.put('/data-update/:id', (req, res) => {
   res.send('Hello world')
})
router.patch('/update/:id', (req, res) => {
   res.send('Hello world')
})
// deleted method
router.delete('/comments/:id', (req, res) => {
   res.send('Hello world')
})


module.exports = router