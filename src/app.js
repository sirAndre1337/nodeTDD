const app = require('express')()
const consign = require('consign')
const knex = require('knex')
const knexfile = require('../knexfile')
// const knexLogger = require('knex-logger')

// TODO criar chaveamento dinamico
app.db = knex(knexfile.test)

// app.use(knexLogger(app.db))   // mudar o verbose para false para ver os logs

consign({ cwd: 'src', verbose: false })
  .include('./config/middlewares.js')
  .then('./services')
  .then('./routes')
  .then('./config/routes.js')
  .into(app)

app.get('/', (req, res) => {
  res.status(200).send()
})


module.exports = app
