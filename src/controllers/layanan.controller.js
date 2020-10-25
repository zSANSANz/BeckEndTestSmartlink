'use strict';
const Layanan = require('../models/layanan.model');
const jwt = require('jsonwebtoken');

exports.create = function (req, res) {

    var token = req.body.token || req.headers['token'];
    console.log(token);
    if (token) {
        jwt.verify(token, "secret", function (err, ress) {
            if (err) {
                res.status(500).send('Gagal masukan data');
            } else {
                const new_layanan = new Layanan(req.body);
                //handles null error
                if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
                    res.status(400).send({ error: true, message: 'Please provide all required field' });
                } else {
                    Layanan.create(new_layanan, function (err, register) {
                        if (err)
                            res.send(err);
                        res.json({
                            code: 200,
                            status: "success",
                            data: {
                                id: "req.body.id",
                                nama: req.body.nama,
                                unit: req.body.unit,
                                harga: req.body.harga,
                                "User_id": "USR001",
                            }
                        });

                    });
                }
            }
        })
    } else {
        res.send('Kamu Tidak Bisa Menambah Layanan Tanpa Login')
    }


};

