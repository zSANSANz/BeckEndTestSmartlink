'use strict';
var dbConn = require('./../../config/db.config');
//Register object create
var Register = function (register) {
    this.username = register.username;
    this.password = register.password;

};

Register.login = function (newEmp, result) {
    dbConn.query("select * from registers where username=? and password=?", [newEmp.username, newEmp.password], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        if (res && res.length) {
            console.log('user found :)');
            console.log(res.insertId);
            result(null, res);
        } else {
            console.log('user not found');
            result(null, res);
        } 

    });
};
module.exports = Register;