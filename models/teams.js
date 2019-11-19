const Sequelize = require('sequelize')

module.exports = (connection) => {
  return connection.define('teams', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    location: {
      type: Sequelize.STRING,
    },
    mascot: {
      type: Sequelize.STRING,
    },
    abbreviation: {
      type: Sequelize.STRING,
      unique: true
    },
    conference: {
      type: Sequelize.STRING,
    },
    division: {
      type: Sequelize.STRING,
    },
  })
}