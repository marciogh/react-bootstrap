const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/my_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
 
const Item = new Schema({
  id: { type: ObjectId },
  name: { type: String },
  price: { type: Number }
});
const ItemModel = mongoose.model('ItemsModel', Item);


const bodyParser = require('body-parser')
app.use(bodyParser.json())

app.get('/item', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*')
  ItemModel.find({}, (err, items) => {
    if (err) {
      res.send('Error with mongo')
    }
    res.send(items);
  })
})

app.post('/item', (req, res) => {
  let item = new ItemModel(req.body)
  item.save((err, user) => {
    if (err) {
      res.send('Error with mongo');
    }
    res.json(item);
  })
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))