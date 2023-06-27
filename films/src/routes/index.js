const {Router} = require('express');
const controllers = require("../controllers");
const middlewares = require("../middlewares");

const router = Router();

//rutas
router.get("/", controllers.getFilms);

router.post("/", middlewares.characterValidation, controllers.createFilms);


module.exports = router;