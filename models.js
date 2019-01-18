const mongoose = require('mongoose');

const Altas = mongoose.model('Altas', {
                                    dni: String,
                                    nombre: String, 
                                    apellidos: String,
                                    fechaAlta: String });

const Bajas = mongoose.model('Bajas', { 
                                    dni: String,
                                    nombre: String, 
                                    apellidos: String,
                                    fechaBaja: String });

const Medicos = mongoose.model('Medicos', { 
                                    nombre: String, 
                                    apellidos: String,
                                    especialidad: String });                                    
module.exports =  {
    Altas,
    Bajas,
    Medicos
}
