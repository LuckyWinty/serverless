const { Sequelize, sequelize, Model } = require('./db');

class Blog extends Model { }

Blog.init({
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    content: {
        type: Sequelize.TEXT('medium'),
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'blog'
});

module.exports = {
    Blog,
}