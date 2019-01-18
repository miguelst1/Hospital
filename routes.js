const express = require('express');
const {Altas, Bajas, Medicos} = require('./models');
const router = express.Router();

router.get('/altas', (req, res) => {
    Altas.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });
});

router.get('/altas/:id', (req, res) => {  
    Altas.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });
});

router.delete('/altas/:id', (req, res) => {  
    Altas.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });
});

router.put('/altas/:id', (req, res) => {  
    Altas.findOneAndUpdate({ _id: req.params.id },
        {$set: { dni: req.body.dni, nombre: req.body.nombre, apellidos : req.body.apellidos,
         fechaAlta: req.body.fechaAlta}},
        (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });
});

router.post('/altas', (req, res) => {
    const alta = new Altas({
                          dni: req.body.dni,
                          nombre: req.body.nombre, 
                          apellidos: req.body.apellidos,
                          fechaAlta: req.body.fechaAlta });
    alta.save((err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });
});

router.get('/bajas', (req, res) => {
    Bajas.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });
});

router.get('/bajas/:id', (req, res) => {  
    Bajas.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });
});

router.delete('/bajas/:id', (req, res) => {  
    Bajas.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });
});

router.put('/bajas/:id', (req, res) => {  
    Altas.findOneAndUpdate({ _id: req.params.id },
        {$set: { dni: req.body.dni, nombre: req.body.nombre, apellidos : req.body.apellidos,
         fechaBaja: req.body.fechaBaja}},
        (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });
});

router.post('/bajas', (req, res) => {
    const baja = new Bajas({
                          dni: req.body.dni,
                          nombre: req.body.nombre, 
                          apellidos: req.body.apellidos,
                          fechaBaja: req.body.fechaBaja });
    baja.save((err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });
});

router.get('/medicos', (req, res) => {
    Medicos.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });
});

router.get('/medicos/:id', (req, res) => {  
    Medicos.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });
});

router.delete('/medicos/:id', (req, res) => {  
    Medicos.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });
});

router.put('/medicos/:id', (req, res) => {  
    Altas.findOneAndUpdate({ _id: req.params.id },
        {$set: { nombre: req.body.nombre, apellidos : req.body.apellidos, especialidad: req.body.especialidad}},
        (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });
});

router.post('/medicos', (req, res) => {
    const medico = new Medicos({
                          nombre: req.body.nombre, 
                          apellidos: req.body.apellidos,
                          especialidad: req.body.especialidad });
    medico.save((err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });
});

module.exports = router;