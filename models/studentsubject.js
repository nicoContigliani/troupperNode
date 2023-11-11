'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StudentSubject extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  StudentSubject.init({
    StudentId: DataTypes.BIGINT,
    SubjectId: DataTypes.BIGINT,
    student_subject_status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'StudentSubject',
  });
  return StudentSubject;
};