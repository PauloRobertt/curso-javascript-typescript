const express = require('express');
const routes = require('./routes.js');
const app = express();

const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.STRING_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4
})
    .then(() => {
        app.emit('conectado');
    })
    .catch((error) => { console.log('Ocorreu um erro: ', error) })

const path = require('path');
app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs')

app.use(routes);

app.on('conectado', () => {
    app.listen(3000, () => {
        console.log('http://localhost:3000')
        console.log('Servidor iniciado na porta:', 3000);
    })
})
