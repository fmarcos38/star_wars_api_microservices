const characters = require("../data");

//como solo exporto una función no hace falta ponerle nombre
module.exports = async (req, res) => {
    const allCharacters = await characters.listCharacters();

    res.status(200).json(allCharacters);
};