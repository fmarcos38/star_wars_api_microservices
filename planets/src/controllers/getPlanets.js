const planets = require("../data");

module.exports = async (req, res) => {
    const allPlanets = await planets.listPlsnets();

    res.status(200).json(allPlanets);
};