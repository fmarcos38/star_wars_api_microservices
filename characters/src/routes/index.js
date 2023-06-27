const {Router}= require('express');
const controllers = require("../controllers");
const middlewares = require("../middlewares");

const router = Router();

//rutas
router.get('/', controllers.getCharacters);

router.post('/', middlewares.characterValidation, controllers.createCharacter);

module.exports = router;
