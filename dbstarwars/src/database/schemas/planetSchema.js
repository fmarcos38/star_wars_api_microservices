const {Schema} = require("mongoose");

const planetSchema = new Schema({
    _id: String,
    name: String,
    rotation_period: String,
    orbital_period: String,
    diameter: String,
    climate: String,
    gravity: String,
    terrain: String,
    surface_water: String,
    characters: [{
        type: String,
        ref: "characters"
    }],
    films: [{
        type: String,
        ref: "films"
    }]
});

//metodos
planetSchema.statics.list = async function(){
    return await this.find()
        .populate("characters", ["_id", "title"])
        .populate("films", ["_id", "title"]);
};

planetSchema.static.get = async function(id){
    return await this.findOne({id})
    .populate("characters", ["_id", "title"])
    .populate("films", ["_id", "title"]);
};

planetSchema.statics.insert = async function(film){
    return await this.create(film);
};
module.exports = planetSchema;