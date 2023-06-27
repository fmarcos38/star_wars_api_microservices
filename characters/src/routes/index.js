const {Router}= require('express');
const controllers = require("../controllers");

const router = Router();

//rutas
router.get('/', controllers.getCharacters);

router.post('/', controllers.createCharacter);

module.exports = router;
