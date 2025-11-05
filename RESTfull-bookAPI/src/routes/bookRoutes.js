const express = require('express')

const router = express.Router()

let books = []

// get all books
router.get('/', (req, res) => {
    res.status(200).json(books)
})


module.exports = router