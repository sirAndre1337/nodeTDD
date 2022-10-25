const ValidationError = require('../errors/validationError')

module.exports = (app) => {

  const findAll = (filter = {}) => {
    return app.db('users').where(filter).select()
  }

  const save = async (user) => {
    if (!user.name) throw new ValidationError('Nome e um atributo obrigatorio');
    if (!user.mail) throw new ValidationError('Email e um atributo obrigatorio');
    if (!user.password) throw new ValidationError('Senha e um atributo obrigatorio');

    const hasEmail = await findAll({ mail: user.mail });
    if (hasEmail && hasEmail.length > 0) throw new ValidationError('Email ja cadastrado!');

    return app.db('users').insert(user, '*')
  }
  return { findAll, save }
}
