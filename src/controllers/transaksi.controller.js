'use strict';
const Transaksi = require('../models/transaksi.model');
const jwt = require('jsonwebtoken');

exports.create = function (req, res) {
    var decoded = " ";
    decoded = jwt.verify(
        req.headers["authorization"],
        "secret"
    );

    console.log(decoded)
    if (decoded !== null) {
        const new_transaksi = new Transaksi(req.body);
        //handles null error
        if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
            res.status(400).send({ error: true, message: 'Please provide all required field' });
        } else {
            Transaksi.create(new_transaksi, function (err, transaksi) {
                if (err)
                    res.send(err);
                res.json({
                    code: 200,
                    status: "success",
                    data: {
                        id: res.id,
                        nama: decoded.nama,
                        pelanggan: req.body.pelanggan,
                        qty: req.body.qty,
                        dison_persen: req.body.diskon_persen,
                        User_id: decoded.id,
                    }
                });


            });
        }

    } else {
        res.send('Kamu Tidak Bisa Menambah Layanan Tanpa Login')
    }


};

