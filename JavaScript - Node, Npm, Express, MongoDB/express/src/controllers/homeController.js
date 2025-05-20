exports.paginaInicial = (req, res) => {
    res.render('index', {
        titulo: 'Titulo da rota',
        numeros: [0, 1, 2, 3, 4, 5, 6]
    });
    return;
};
