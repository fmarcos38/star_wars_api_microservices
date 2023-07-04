const {Schema} = require("mongoose");

const characterSchema = new Schema({
    _id: String,
    name: String,
    height: String,
    mass: String,
    hair_color: String,
    skin_color: String,
    eye_color: String,
    birth_year: String,
    gender: String, //enum
    homeworld: {
        type: String,
        ref: "Planet"    //Referencia al ID del schema Planet
    }, 
    films: [{  //Referencia al ID del schema Peliculas d c/pelicula q actua el personaje, el type d films es un Array
        type: String, //este es el type de c/elemt del Array
        ref: "Film"
    }] 
});

characterSchema.statics.list = async function(){
    return await this.find()
        .populate("homeworld", ["_id", "name"])
        .populate("films", ["_id", "title"]);
};

characterSchema.statics.get = async function(_id){
    return await this.findById({_id:_id})
        .populate("homeworld", ["_id", "name"])
        .populate("films", ["_id", "title"]);
}
module.exports = characterSchema;