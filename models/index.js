const Sequelize = require("sequelize");
const allConfigs = require("../config/sequelize");
const TeamsModel = require('./teams')
//equivelent to writing all SQL code

//drilling dow for the development /db configuration (username, pass etc..)
const config = allConfigs['development']

//create a connection
const connection = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
})
//export an instance of the team model

const Teams = TeamsModel(connection, Sequelize)

exports.TeamModel = require('./teams')

connection.authenticate()