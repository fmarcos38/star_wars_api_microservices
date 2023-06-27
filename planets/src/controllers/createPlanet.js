const planet =require("../data");
const { response } = require("../utils");


module.exports = async (req, res) => {
    const newPlanet = await planet.createPlanet();
    response(res, 201, newPlanet);
};