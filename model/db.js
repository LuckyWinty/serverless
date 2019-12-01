const Sequelize = require('sequelize');

const sequelize = new Sequelize('blog', 'root', process.env.password, {
    host: '172.16.0.15',
    dialect: 'mysql'
});

const Model = Sequelize.Model;

module.exports = {
    Sequelize,
    sequelize,
    Model,
}