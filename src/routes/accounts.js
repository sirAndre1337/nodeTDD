module.exports = (app) => {

  const create = (req, res) => {
    app.services.account.save(req.body)
      .then(result => {
        return res.status(201).json(result[0])
      })
  }

  const findAll = (req, res) => {
    app.services.account.findAll()
      .then(result => {
        return res.status(200).json(result)
      })
  }

  return { create, findAll }
}
