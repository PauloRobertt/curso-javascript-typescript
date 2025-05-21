exports.middlewarGlobal = (req, res, next) => {
    res.locals.variavelLocal = 'Exemplo de valor do titulo';
    next();
};

exports.checkCsrfError = (err, req, res) => {
    if(err && err.code == 'EBADCSRFTOKEN'){
        return res.send('BAD CSRF');
    }
}

exports.csrfMiddleware = (req, res, next) =>{
    res.locals.csrfToken = req.csrfToken();
    next();
}