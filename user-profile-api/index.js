
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/api/profile', (req, res) => {
    const user = [
        {
        id:1,
        name:'anam',
        email:'anamolhasan.job@gmail.com',
        phone: '01950029'
    },
        {
        id:2,
        name:'hasan',
        email:'anamolhasan.job@gmail.com',
        phone: '01950029'
    },
        {
        id:3,
        name:'shakil',
        email:'anamolhasan.job@gmail.com',
        phone: '01950029'
    },
    ]


    res.status(201).json(user)
})

// set cookies
app.get('/set-custom-cookie', (req, res) => {
    res.cookie('custom-cookie', '34532dfg866hff',{
        maxAge:60000,
        httpOnly:true
    })

    res.send(`Cookie set successfully `)
})


app.get('/', (req, res) => {
  res.send('user profile api...!')
})


app.listen(port, () => {
  console.log(`Server is listening on port http://localhost:${port}`)
})