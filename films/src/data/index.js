const films = require("./films.json");

module.exports = {
    listFilms: async () => { return films },
}