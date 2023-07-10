const mongoose = require("mongoose");
const { MONGO_URI } = require("../config/envs");

const conn = mongoose.createConnection(MONGO_URI); //conexión con la DB

//esto es para prueba
/* 
const Character = conn.model("Character", require("./schemas/characterSchema")); //defino el modelo de Personajes
const Film = conn.model("Film", require("./schemas/filmSchema")); 
*/

//corroboro x consola si me trae la data
/* 
Character.find()
    .populate("films") //este films ES el nombre del modelo de EL popule Te trae todas las pelis 
    .popule("films", ["_id", "title"]) //acá elijo q datos/documentos quiera de la tabla/modelo/entidad Films
    .then((res) => console.log(res)); 
*/


//acá creo y exporto al mismo tiempo los modelos
module.exports = {
    characters: conn.model("characters", require("./schemas/characterSchema")),
    films: conn.model("films", require("./schemas/filmSchema")),
    planets: conn.model("planets", require("./schemas/planetSchema"))
}