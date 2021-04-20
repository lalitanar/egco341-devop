const express = require('express')
const port = process.env.PORT || 5000
const app = express()

const data = { name: "egco341-heroku-autorepo-test-review-in SE Lecture"}
app.get('/', (req, res) => {
  res.json(data)
})

app.listen(port, () => {
  console.log(`Listening on ${port }`)
})