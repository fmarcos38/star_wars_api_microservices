const films = require("./films.json");

module.exports = {
    listFilms: async () => { return films },

    createFilm: async () => {
        throw Error("error al creal film");
    },
}