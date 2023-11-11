'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Subject extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Subject.belongsToMany(models.Student, { through: models.StudentSubject,
        onDelete: 'CASCADE',
        onCreate: 'CASCADE',
      });

    }
  }
  Subject.init({
    namesubject: DataTypes.STRING,
    subject_status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Subject',
  });
  return Subject;
};