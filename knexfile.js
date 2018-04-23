module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'authuser',
      password: 'letmepass',
      database: 'user_auth_dev'
    },
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
