const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const morgan = require('morgan');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb://localhost:27017/hospital', { useNewUrlParser: true })
.then(db   => console.log ('Conexión correcta a la BD'))
.catch(err => console.log ('Error en la conexión a la BD'));

app.use(express.static(path.join(__dirname , 'public')));
app.use(morgan('dev'));
app.use(express.json());
app.use('/api', routes);

app.listen (3000, 
            () => console.log('Servidor iniciado en puerto ${config.port}'));
