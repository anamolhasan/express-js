const express  = require('express')

const app = express()
const port = process.env.PORT || 3000


// get route
app.get('/', (req, res)=>{

})



app.listen(port, ()=>{
    console.log(`server is running on port http://localhost:${port}`)
})