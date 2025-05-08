const express = require('express');
const routes = require('./routes.js');
const app = express();

app.use(routes);

app.listen(3000, () => {
    console.log('http://localhost:3000')
    console.log('Servidor iniciado na porta: ', 3000);
})
