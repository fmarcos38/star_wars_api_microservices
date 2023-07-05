const { Router } = require('express');
const store = require('../database'); //en ete arch q import Tengo los modelos
const { validateModel } = require('../middlewares');

const router = Router();

//rutas
//voy a recibir por param el modelo al q le pega la ruta ----> Character, Film, Planet <------
router.get("/:model", validateModel ,async(req, res) => {    
    const { model } = req.params;
    console.log("model: ", model);
    const response = await store[model].list(); //model --> indica el modelo al q ac referencia(Character, Film, Planet)    
    res.status(200).json(response);
});

//ruta para traer por ID (para cualq modelo)
router.get("/:model/:id", validateModel, async(req, res) => {
    const { model, id } = req.params;
    const response = await store[model].get(id);
    res.status(200).json(response);
});

module.exports = router;
