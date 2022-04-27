const {Sequelize} = require ('sequelize');
require ('dotenv').config();

const config ={
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    port: process.env.PGPORT
}

const sequelize = new Sequelize (config.database, config.user, config.password, {
    host: 'localhost',
    dialect:'postgres'
});

module.exports = sequelize;