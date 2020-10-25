'use strict';
var dbConn = require('./../../config/db.config');
//Layanan object create
var Layanan = function (layanan) {
  this.nama = layanan.nama;
  this.unit = layanan.unit;
  this.harga = layanan.harga;
  this.createdAt = new Date();
  this.updatedAt = new Date();
};
Layanan.create = function (newEmp, result) {
  dbConn.query("INSERT INTO layanans set ?", newEmp, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    }
    else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

module.exports = Layanan;