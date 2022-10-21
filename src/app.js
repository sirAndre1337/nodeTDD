const app = require('express')()
const consign = require('consign')

consign({ cwd: 'src', verbose: false })
  .include('./config/middlewares.js')
  .into(app)

app.get('/', (req, res) => {
  res.status(200).send()
})

app.get('/users', (req, res) => {
  const users = [{ name: 'John Doe', email: 'john@mail.com' }]

  res.status(200).json(users)
})

app.post('/users', (req, res) => {
  const user = req.body
  res.status(201).json(user)
})

module.exports = app