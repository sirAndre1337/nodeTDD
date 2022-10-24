const request = require('supertest')
const app = require('../../src/app')

const MAIN_ROUTE = '/accounts';
let user;

beforeAll(async () => {
  const result = await app.services.user.save({ name: 'User account', mail: `${Date.now()}@mail.com`, password: '123account' })
  user = { ...result[0] }
})

test('Deve inserir uma conta com sucesso', () => {
  const name = Date.now();

  return request(app).post(MAIN_ROUTE)
    .send({ name: `Acc ${name}`, user_id: user.id })
    .then(res => {
      expect(res.status).toBe(201)
      expect(res.body.name).toBe(`Acc ${name}`)
    })
})

test('Deve listar todas as contas', () => {
  return app.db('accounts')
    .insert({ name: 'Acc list', user_id: user.id })
    .then(() => request(app).get(MAIN_ROUTE))
    .then(res => {
      expect(res.status).toBe(200)
      expect(res.body.length).toBeGreaterThan(0)
    })
})

test('Deve retornar conta por id', () => {
  return app.db('accounts')
    .insert({ name: 'Acc id', user_id: user.id }, ['id'])
    .then(acc => request(app).get(`${MAIN_ROUTE}/${acc[0].id}`))
    .then(res => {
      expect(res.status).toBe(200)
      expect(res.body.name).toBe('Acc id')
      expect(res.body.user_id).toBe(user.id)
    })
})

test('Deve alterar uma conta', () => {
  return app.db('accounts')
    .insert({ name: 'Acc update', user_id: user.id }, '*')
    .then(acc => request(app).put(`${MAIN_ROUTE}/${acc[0].id}`)
      .send({ name: 'Acc update put' }))
    .then(res => {
      expect(res.status).toBe(200)
      expect(res.body.name).toBe('Acc update put')
      expect(res.body.user_id).toBe(user.id)
    })
})
