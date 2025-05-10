const express = require('express');
const routes = require('./routes.js');
const path = require('path');
const app = express();

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs')

app.use(routes);

app.listen(3000, () => {
    console.log('http://localhost:3000')
    console.log('Servidor iniciado na porta: ', 3000);
})
