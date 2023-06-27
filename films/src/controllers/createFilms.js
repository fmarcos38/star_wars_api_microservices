const film =require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
    const newFilms = await film.createFilm();
    response(res, 201, newFilms);
};