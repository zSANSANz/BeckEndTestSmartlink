'use strict';
var dbConn = require('./../../config/db.config');
//Transaksi object create
var Transaksi = function (transaksi) {
  this.pelanggan = transaksi.pelanggan;
  this.layanan_id = transaksi.layanan_id;
  this.qty = transaksi.qty;
  this.diskon_persen = transaksi.diskon_persen;
  this.createdAt = new Date();
  this.updatedAt = new Date();
};
Transaksi.create = function (newEmp, result) {
  dbConn.query("INSERT INTO transaksis set ?", newEmp, function (err, res) {
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

module.exports = Transaksi;