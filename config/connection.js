require('dotenv').config();

const Sequelize = require('sequelize');

console.log(process.env.DB_NAME)
console.log(process.env.DB_USER)
console.log(process.env.DB_PASSWORD)

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
