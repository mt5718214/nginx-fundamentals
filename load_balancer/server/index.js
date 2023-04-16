const express = require('express')
const app = express()
const PORT = 7777

app.get('/', (req, res) => {
  res.send("I am a endpoint")
})

app.listen(PORT, () => {
  console.log(`server is start on port ${PORT}`)
})