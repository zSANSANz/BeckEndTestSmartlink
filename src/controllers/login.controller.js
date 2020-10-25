'use strict';
const Register = require('../models/login.model');

exports.login = function (req, res) {
    const new_login = new Register(req.body);
    //handles null error
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please pr ovide all required field' });
    } else {
        Register.login(new_login, function (err, register) {
            if (err) {
                res.send(err);
            } else {
                if (res>0) {
                    res.json({
                        code: 200,
                        status: "success",
                        data: {
                            id: "req.id",
                            nama: "req.nama",
                            username: "req.username",
                            token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ"
                        }
                    });

                } else {
                    res.json({
                        code: 200,
                        status: "failed",
                        data: {
                            id: "req.id",
                            nama: "req.nama",
                            username: "req.username",
                            token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ"
                        }
                    });
                }
            }

        });
    }

};