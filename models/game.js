'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Game.belongsToMany(models.Player, {
        through: models.GamePlayer,
        onDelete: 'CASCADE',
        onCreate: 'CASCADE',
      });
    }
  }
  Game.init({
    count_games: DataTypes.INTEGER,
    game_wons: DataTypes.INTEGER,
    acumulated: DataTypes.INTEGER,
    game_status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Game',
  });
  return Game;
};