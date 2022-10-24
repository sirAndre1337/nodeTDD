module.exports = (app) => {
  const save = (account) => {
    return app.db('accounts').insert(account, '*')
  }

  const findAll = () => {
    return app.db('accounts').select();
  }

  const findById = (filter = {}) => {
    return app.db('accounts').where(filter).first()
  }

  const update = (id, account) => {
    return app.db('accounts').where({ id }).update(account, '*')
  }

  return { save, findAll, findById, update }
}
