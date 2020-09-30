const config = require('./config');
const { Sequelize,DataTypes } = require('sequelize');

const sequelize = new Sequelize({
    database: config.database,
    username: config.username,
    password: config.password,
    dialect: config.dialect
})

const db = Object.freeze({
    sequelize,
    DataTypes
})

module.exports.db = db;
