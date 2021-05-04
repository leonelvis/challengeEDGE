const {Model, DataTypes} = require('sequelize');
const sequelize = require('../db.js')

class Movie extends Model{}

Movie.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    director: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lead_actor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
}, {
    sequelize,
    modelName: 'movies'
})

module.exports = Movie;
