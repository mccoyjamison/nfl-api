require('dotenv').config()

module.exports = {
  development: {
    database: process.env.DB_SCHEMA_NAME,
    dialect: process.env.DB_DIALECT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST_NAME
  }
}