'use strict';
const Register = require('../models/login.model');
var dbConn = require('./../../config/db.config');
const jwt = require('jsonwebtoken');

exports.login = function (req, res) {
    var username = req.body.username;
    var password = req.body.password;

    dbConn.query('SELECT * FROM registers WHERE username = ?', [username], async function (error, results, fields) {
        if (error) {
            res.send({
                "code": 400,
                "failed": "error ocurred"
            })
        } else {
            if (results.length > 0) {

                if (password == results[0].password) {
                    let token = jwt.sign({ id: results[0].id, nama: results[0].nama }, "secret",     {
                        expiresIn: "24h"
                    });
                    res.send({
                        code: 200,
                        status: "success",
                        data: {
                            id: results[0].id,
                            nama: results[0].nama,
                            username: username,
                            token: token
                        }
                    })
                }

                else {
                    res.send({
                        "code": 204,
                        "success": "username and password does not match"
                    })
                }
            }
            else {
                res.send({
                    "code": 206,
                    "success": "Username does not exits"
                });
            }
        }
    });
};