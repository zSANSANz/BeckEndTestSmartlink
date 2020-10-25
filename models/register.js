'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class register extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  register.init({
    nama: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    telepon: DataTypes.STRING
  }, {
    timestamps: true,
    tableName: 'tb_register',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'register',
  });
  return register;
};