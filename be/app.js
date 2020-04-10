const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res
  .set('Access-Control-Allow-Origin', '*')
  .send(
  {
    "items": [
      { "id": 1, "name": "Apples",  "price": "$2" },
      { "id": 2, "name": "Peaches", "price": "$5" },
      { "id": 3, "name": "Sbrubles", "price": "$1" }
    ] 
  }    
))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))