/**
 * users model
 */
// const { Sequelize, DataTypes } = require('sequelize');

module.exports = function(sequelize, DataTypes)
{
    let users = sequelize.define('users', {
        id: { type: DataTypes.NUMBER, primaryKey: true }, 
        user_name: { type: DataTypes.STRING },
        user_hash: DataTypes.STRING,
    }, {
      timestamps: false,
    })

    return users;
};