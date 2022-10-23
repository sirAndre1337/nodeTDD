module.exports = (app) => {

  const findAll = (filter = {}) => {
    return app.db('users').where(filter).select()
  }

  const save = async (user) => {
    if (!user.name) return { error: 'Nome e um atributo obrigatorio' }
    if (!user.mail) return { error: 'Email e um atributo obrigatorio' }
    if (!user.password) return { error: 'Senha e um atributo obrigatorio' }

    const hasEmail = await findAll({ mail: user.mail });

    if (hasEmail && hasEmail.length > 0) return { error: 'Email ja cadastrado!' }

    return app.db('users').insert(user, '*')
  }
  return { findAll, save }
}
