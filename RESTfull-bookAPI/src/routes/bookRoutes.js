const express = require('express')

const router = express.Router()

let books = [
  { id: 1, title: "The Alchemist", author: "Paulo Coelho" },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
  { id: 3, title: "1984", author: "George Orwell" },
  { id: 4, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { id: 5, title: "The Catcher in the Rye", author: "J.D. Salinger" }
];


// get all books
router.get('/', (req, res) => {
    const {search} = req.query

    const result = books

    // if(search){
    //     result = books.filter((book)=> {
    //         book.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || 
    //         book.author.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    //     })
    // }

    res.status(200).json(result)
})

// add a new book
router.post('/', (req, res) => {
    // const {title, author} = req.body
    // const newBook = {id: books.length + 1, title:title, author:author}
    const newBook = {id: books.length + 1, ...req.body}
    books.push(newBook)
    res.status(201).json(books)
})

// update a book
router.put('/:id', (req, res) => {
    const {id} = req.params

    const findBookIndex = books.findIndex(book => book.id === parseInt(id))
    if(findBookIndex !== -1) {
        books[findBookIndex] = {...books[findBookIndex], ...req.body}
        res.status(200).json(books[findBookIndex])
    } else {
        res.status(404).json({message: 'Book not found'})
    }
})

// deleted a book
router.delete('/:id', (req, res) => {
    const {id} = req.params
    books = books.filter(book => book.id !== parseInt(id))
    res.json({message: 'Book deleted successfully!'})
})


module.exports = router