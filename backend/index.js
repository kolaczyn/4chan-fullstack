const express = require('express')
const mongoose = require('mongoose')

const app = express()
require('dotenv').config();

app.get('/', (req,res) => {
  res.send('hello');
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT}`)
})