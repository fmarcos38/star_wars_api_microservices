const server = require('./src/server');

const { Character, Film, Planet } = require('./src/database');
const id="64a30e530c012af2fd5067c6";

//Tipos de busqueda
//Character.get("1").then(res => { console.log(res); });
//Character.list().then(res => { console.log(res); });
//Insertar personaje
/* Character.insert({
    _id: "99",
    name: "pepe",
    hair_color: "green",
    skin_color: "yellow"
}); */

//Film.list().then(res => { console.log(res)});


server.listen(8004, () => {
    console.log("Database service on PORT 8004");
});