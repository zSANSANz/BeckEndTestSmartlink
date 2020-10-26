'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transaksi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  transaksi.init({
    pelanggan: DataTypes.STRING,
    layanan_id: DataTypes.INTEGER,
    qty: DataTypes.INTEGER,
    diskon_persen: DataTypes.INTEGER
  }, {
    timestamps: true,
    tableName: 'tb_transaksi',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize,
    modelName: 'transaksi',
  });
  return transaksi;
};