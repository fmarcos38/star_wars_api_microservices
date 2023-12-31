const express = require('express');
const morgan = require('morgan');

const server = express();

server.use(morgan("dev"));
server.use(express.json());

//import el index de las rutas
server.use("/films", require("./routes"));

//sino encuentra endpoint
server.use("*", (req, res) => {
    res.status(404).send("Not found");
});

//para poder sobreEscribir el manejador de errores de express
server.use((err, req, res, next) => {
    res.status(err.statusCode  || 500).send({
        error: true,
        message: err.message,
    });
});




module.exports = server;