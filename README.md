# Express project 

```bash 
const express = require('express')
const app = express()
const port = process.env.PORT || 3000



app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Server is listening on port http://localhost:${port}`)
})
```

```package.json``
```bash 
"start": "nodemon index.js",
or
"start": "node index.js",
or
(1)"start:dev":"nodemon index.js / node index.js"
```

```run```
```bash
nodemon index.js
or 
npm run start
or
(1)npm run start:dev
```

