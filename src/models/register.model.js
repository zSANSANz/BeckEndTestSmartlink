'use strict';
var dbConn = require('./../../config/db.config');
//Register object create
var Register = function (register) {
  this.nama = register.nama;
  this.username = register.username;
  this.password = register.password;
  this.telepon = register.telepon;
  this.createdAt = new Date();
  this.updatedAt = new Date();
};
Register.create = function (newEmp, result) {
  dbConn.query("INSERT INTO registers set ?", newEmp, function (err, res) {
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
Register.findById = function (id, result) {
  dbConn.query("Select * from registers where id = ? ", id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    }
    else {
      result(null, res);
    }
  });
};
Register.findAll = function (result) {
  dbConn.query("Select * from registers", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    }
    else {
      console.log('registers : ', res);
      result(null, res);
    }
  });
};
Register.update = function (id, employee, result) {
  dbConn.query("UPDATE registers SET nama=?,username=?,password=?,telepon=?", [employee.first_name, employee.last_name, employee.email, employee.phone, employee.organization, employee.designation, employee.salary, id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};
Register.delete = function (id, result) {
  dbConn.query("DELETE FROM registers WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    }
    else {
      result(null, res);
    }
  });
};

module.exports = Register;