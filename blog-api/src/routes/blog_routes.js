const express = require('express')

const router = express.Router()


const blogs = [
    {
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    "id": 3,
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  },
  {
    "id": 4,
    "title": "eum et est occaecati",
    "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
  },
]

// get all blogs
router.get('/', (req, res) => {
    res.send(blogs)
})

// get a single blog by id
router.get('/:id', (req, res) => {
    const {id} = req.params
    const UserBlog = blogs.find(blog => blog.id === parseInt(id))

    if(!UserBlog){
        res.status(404).json({message:'No blog found'})
    }
  res.status(200).send(UserBlog)
})

// add a new blog
router.post('/add-post', (req, res) => {
    const {title, body} = req.body

    const newBlog = {id: blogs.length + 1, title, body}
    blogs.push(newBlog)
    res.status(200).json({
        message:'New blog added successfully!',
        blogs: newBlog
    })
})


module.exports = router