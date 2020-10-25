'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class layanan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  layanan.init({
    nama: DataTypes.STRING,
    unit: DataTypes.STRING,
    harga: DataTypes.INTEGER
  }, {
    timestamps: true,
    tableName: 'tb_layanan',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'layanan',
  });
  return layanan;
};