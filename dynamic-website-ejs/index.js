const express = require('express')
const app = express()
const path = require('path')

const port = process.env.PORT || 3000

// static files
app.use(express.static(path.join(process.cwd(), 'public')))

// configure template
app.set('view engine', 'ejs')
app.set('views', path.join(process.cwd(), 'views'))


const products = [
  {
    id: 1,
    name: "Dell Inspiron 15",
    description: "A reliable everyday laptop with Intel i5 processor and 8GB RAM.",
    price: 650
  },
  {
    id: 2,
    name: "HP Pavilion x360",
    description: "A sleek convertible laptop with touchscreen and SSD storage.",
    price: 720
  },
  {
    id: 3,
    name: "Apple MacBook Air M2",
    description: "Ultra-thin laptop with Apple M2 chip, 256GB SSD, and Retina display.",
    price: 1199
  },
  {
    id: 4,
    name: "Lenovo IdeaPad 3",
    description: "Budget-friendly laptop for students with AMD Ryzen 5 and 512GB SSD.",
    price: 580
  },
  {
    id: 5,
    name: "Asus ROG Strix G15",
    description: "High-performance gaming laptop with RTX 3060 GPU and RGB keyboard.",
    price: 1350
  }
];



app.get('/', (req, res) => {
  res.render('index', {title: 'Products List', products})
})

app.get('/product/:id', (req, res) => {
    const productId = req.params.id

    const product = products.find(product => product.id === parseInt(productId))
    if(!product){
        res.status(404).send('Product not found!')
    }
    res.render('product', {title : 'Product details', product})
})


app.listen(port, () => {
  console.log(`Server is listening on port http://localhost:${port}`)
})


