const planets = require("./planets.json");

module.exports = {
    listPlsnets: async () => { return planets },

    createPlanet: async () => {
        throw Error("error al creal planet");
    },

};