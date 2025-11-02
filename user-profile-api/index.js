const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const path = require('path')

const port = process.env.PORT || 3000


app.use(cookieParser())

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
    res.cookie('customCookie', '34532dfg866hff',{
        maxAge:60000,
        httpOnly:true,
        secure:true
    })

    res.send(`Cookie set successfully `)
})

// get cookie
app.get('/get-custom-cookie', (req, res) => {
    const cookie = req.cookies.customCookie
    console.log(cookie)

    res.send(`Your custom cookie ${cookie}`)
})
// delete cookie
app.get('/delete-custom-cookie', (req, res) => {
    res.clearCookie('customCookie')
    res.send(`Cookie deleted successfully!`)
})


// user profile
app.get('/profile', (req, res) => {
        const cookie = req.cookies.customCookie
        if(!cookie){
            return res.status(401).json({message:'Authorized access!'})
        }
    const filePath = path.join(process.cwd(), 'public', 'index.html')
    console.log(filePath)
    res.sendFile(filePath)
})


app.get('/', (req, res) => {
  res.send('user profile api...!')
})


app.listen(port, () => {
  console.log(`Server is listening on port http://localhost:${port}`)
})