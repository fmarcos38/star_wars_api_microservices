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
        ref: "planets"
    },
    films: [{
        type: String,
        ref: "films"
    }] 
});

characterSchema.statics.list = async function(){
    return await this.find()
        .populate("homeworld", ["_id", "name"])
        .populate("films", ["_id", "title"]);
};

characterSchema.statics.get = async function(id){
    return await this.findOne({id:id})
        .populate("homeworld", ["_id", "name"])
        .populate("films", ["_id", "title"]);
};

//creacion de un personaje
characterSchema.statics.insert = async function(character){
    return await this.create(character);
};


module.exports = characterSchema;