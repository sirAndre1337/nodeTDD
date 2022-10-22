module.exports = {
  test: {
    client: 'pg',
    version: '8.3.3',
    connection: {
      host: 'localhost',
      user: 'postgres',
      password: 'admin',
      database: 'barriga'
    },
    migrations: {
      directory: 'src/migations'
    }
  }
}
