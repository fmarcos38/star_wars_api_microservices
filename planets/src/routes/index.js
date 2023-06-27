const {Router} = require('express');
const controllers = require("../controllers");

const router = Router();

//rutas
router.get("/", controllers.getPlanets);

router.post("/", controllers.createPlanet);


module.exports = router;