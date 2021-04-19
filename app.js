const express = require('express')
const port = process.env.PORT || 5000
const app = express()

const data = { name: "egci427"}
app.get('/', (req, res) => {
  res.json(data)
})

app.listen(port, () => {
  console.log(`Listening on ${port }`)
})