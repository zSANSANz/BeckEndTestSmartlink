'use strict';
const Register = require('../models/register.model');
exports.findAll = function (req, res) {
    Register.findAll(function (err, register) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', register);
        res.send(register);
    });
};
exports.create = function (req, res) {
    const new_register = new Register(req.body);
    //handles null error
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        Register.create(new_register, function (err, register) {
            if (err)
                res.send(err);
            res.json({ code: 200, status: "success", message: "berhasil terdaftar" });
            
        });
    }
};
exports.findById = function (req, res) {
    Register.findById(req.params.id, function (err, register) {
        if (err)
            res.send(err);
        res.json(register);
    });
};
exports.update = function (req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        Register.update(req.params.id, new Register(req.body), function (err, register) {
            if (err)
                res.send(err);
            res.json({ error: false, message: 'Register successfully updated' });
        });
    }
};
exports.delete = function (req, res) {
    Register.delete(req.params.id, function (err, register) {
        if (err)
            res.send(err);
        res.json({ error: false, message: 'Register successfully deleted' });
    });
};