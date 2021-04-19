const express = require('express')
const port = process.env.PORT || 5000
const app = express()

const data = { name: "egco427-heroku-autorepo-test-review"}
app.get('/', (req, res) => {
  res.json(data)
})

app.listen(port, () => {
  console.log(`Listening on ${port }`)
})