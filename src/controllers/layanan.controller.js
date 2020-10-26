'use strict';
const Layanan = require('../models/layanan.model');
const jwt = require('jsonwebtoken');

exports.create = function (req, res) {
    var decoded = " ";
    decoded = jwt.verify(
        req.headers["authorization"],
        "secret"
    );

    console.log(decoded)
    if (decoded !== null) {
        const new_layanan = new Layanan(req.body);
        //handles null error
        if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
            res.status(400).send({ error: true, message: 'Please provide all required field' });
        } else {
            Layanan.create(new_layanan, function (err, layanan) {
                if (err)
                    res.send(err);
                res.json({
                    code: 200,
                    status: "success",
                    data: {
                        id: res.id,
                        nama: decoded.nama,
                        unit: req.body.unit,
                        harga: req.body.harga,
                        User_id: decoded.id,
                    }
                });


            });
        }

    } else {
        res.send('Kamu Tidak Bisa Menambah Layanan Tanpa Login')
    }


};

