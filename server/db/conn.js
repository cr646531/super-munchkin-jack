const Sequelize = require('sequelize');
const conn = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres'
});

module.exports = conn;