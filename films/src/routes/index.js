const {Router} = require('express');
const controllers = require("../controllers");

const router = Router();

//rutas
router.get("/", controllers.getFilms);

router.post("/", controllers.createFilms);


module.exports = router;