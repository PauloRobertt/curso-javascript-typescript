const express = require('express');
const router = express.Router();

const homeController = require('./src/controllers/homeController.js');

const middleware = (req, res, next) => {
    console.log('Teste middleware')
    next()
}

router.get('/', middleware, homeController.paginaInicial)

module.exports = router;

