const express = require('express');
require('dotenv').config();
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

const session = require('express-session');
const MongoStore = require('connect-mongo');
const connectFlash = require('connect-flash');
const helmet = require('helmet');

const path = require('path');
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(helmet());

const sessionOptions = session({
    secret: process.env.KEY_SECRET,
    store: MongoStore.create({
        mongoUrl: process.env.STRING_CONNECTION,
    }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
})

app.use(sessionOptions);
app.use(connectFlash())

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs')

const { middlewarGlobal, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware.js');

app.use(middlewarGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(routes);

app.on('conectado', () => {
    app.listen(3000, () => {
        console.log('http://localhost:3000')
        console.log('Servidor iniciado na porta:', 3000);
    })
})
