module.exports = (app) => {
  app.route('/users')
    .get(app.routes.users.findAll)
    .post(app.routes.users.create)

  app.route('/accounts')
    .post(app.routes.accounts.create)
    .get(app.routes.accounts.findAll)

  app.route('/accounts/:id')
    .get(app.routes.accounts.findById)
}
