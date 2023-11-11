'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Player extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Player.belongsToMany(models.Game, {
        through: models.GamePlayer,
        onDelete: 'CASCADE',
        onCreate: 'CASCADE',
      });
    }
  }
  Player.init({
    fullname: DataTypes.STRING,
    player_status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Player',
  });
  return Player;
};