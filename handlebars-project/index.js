const express = require('express')
const app = express()
const expressHandlebars = require('express-handlebars')
const port = process.env.PORT || 3000


// configuration
app.engine('hbs', expressHandlebars.engine({extname:'hbs', defaultLayout:false}))
app.set('view engine', 'hbs')
app.set('views', './views')




app.get('/', (req, res) => {
  const userData = {
    name:'Anam', 
    email:'anamolhasan.job@gmail.com',
    isAdmin:true, 
    hobbies:['coding', 'sleep', 'reading']
  }

  res.render('profile', userData)
})


app.listen(port, () => {
  console.log(`Server is listening on port http://localhost:${port}`)
})
