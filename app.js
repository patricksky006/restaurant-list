const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.redirect('/restaurant-list')
})

app.get('/restaurant-list', (req,res) => {
  res.send('restaurant-list test')
})

app.get('/restaurant-list/:id', (req,res) => {
  const id = req.params.id
  res.send(`read restaurant-list: ${id}`)
})

app.listen(port, () => {
  console.log(`express server is running on http://localhost:${port}`)
})