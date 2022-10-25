const validationError = require("../errors/validationError")

module.exports = (app) => {
  const save = async (account) => {
    if (!account.name) throw new validationError('Nome e um atributo obrigatorio.')
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

  const remove = (id) => {
    return app.db('accounts').where({ id }).delete()
  }
  return { save, findAll, findById, update, remove }
}
