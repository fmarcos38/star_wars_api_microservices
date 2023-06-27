const {Router} = require('express');
const controllers = require("../controllers");
const middlewares = require("../middlewares");

const router = Router();

//rutas
router.get("/", controllers.getPlanets);

router.post("/",  middlewares.characterValidation, controllers.createPlanet);


module.exports = router;