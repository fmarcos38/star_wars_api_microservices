//los utils SON funciones más genericas Q las puedo utilizar en otros proyectos

//creo funcion para las respuestas de las peticiones
//esta función podría ya devolver un paginado
module.exports = (res, statusCode, data) => {
    res.status(statusCode).json({
        error: false,
        data  //no ac falta hacer data: data(ya q le paso el obj literal)
    })
};