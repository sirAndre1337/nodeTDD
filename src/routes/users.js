module.exports = () => {
  const findAll = (req, res) => {
    const users = [{ name: 'John Doe', email: 'john@mail.com' }]

    res.status(200).json(users)
  }

  const create = (req, res) => {
    const user = req.body
    res.status(201).json(user)
  }

  return { findAll, create }
}
