'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Student.belongsToMany(models.Subject, {
        through: models.StudentSubject,
        onDelete: 'CASCADE',
        onCreate: 'CASCADE',
      });

    }
  }
  Student.init({
    fullname: DataTypes.STRING,
    student_status: DataTypes.BOOLEAN,
    average: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Student',
  });
  return Student;
};




// "id",
// "fullname":",
// "student_status":",
// "average":",
// "createdAt":",
// "updatedA":"t

// "fullname":"Juan Perez",
// "student_status":true,
// "average":81.8,
