// Requerir el archivo de configuración global
require('./config/config');

// Declarar los paquetes
const express = require('express');
const app = express();


const bodyParser = require('body-parser');

// Configuración de body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/usuario', function(req, res) {
    res.json('get usuario')
});

app.post('/usuario', function(req, res) {

    // Obtener la información enviada desde la aplicacion
    let body = req.body;

    if (body.nombre === undefined) {

        res.status(400).json({
            ok: false
        });

    } else {

        res.json({
            persona: body
        });

    }

});

app.put('/usuario/:id', function(req, res) {

    // Obtener le valor del parametro
    let id = req.params.id;

    res.json({
        id
    });
});

app.delete('/usuario', function(req, res) {

    res.json('delete usuario');

});

app.listen(process.env.PORT, () => {

    console.log('Escuchando el puerto: ', process.env.PORT);

});