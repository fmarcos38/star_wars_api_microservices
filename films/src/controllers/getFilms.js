const films = require("../data");

module.exports = async (req, res) => {
    const allFilms = await films.listFilms();

    res.status(200).json(allFilms);
};