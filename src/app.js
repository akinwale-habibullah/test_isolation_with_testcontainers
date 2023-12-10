require('dotenv').config({ path: `${process.env.NODE_ENV}.env` })
const express = require('express')
const mongoose = require('mongoose')
const Cat = require('./cat.js')

const app = express()
let { MONGODB_URI, NODE_ENV, JEST_WORKER_ID } = process.env
if (NODE_ENV === 'test') {
  MONGODB_URI = `${MONGODB_URI}_${JEST_WORKER_ID}`
}
let connection
try {
  mongoose.connect(MONGODB_URI, { useNewUrlParser: true })
  connection = mongoose.connection
} catch (error) {
  console.log('Error connecting to MongoDB: ', error.message)
}

app.get('/', async (req, res) => {
  const kitty = new Cat({ name: 'Zildjian' });
  try {
    await kitty.save();
  } catch (err) {
    console.error(err.message)
    return res.status(500).json({ message: err.message })
  }
  
  res.json(kitty.toJSON())
})

const server = app.listen(3001, () => {
  return 'Example app listening on port 3001!'
})

module.exports = {
  connection,
  server
};
