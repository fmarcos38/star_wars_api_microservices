const characters = require("./characters.json");

module.exports = {
    listCharacters: async () => { return characters },

    createCharacters: async () => {
        throw Error("error al creal perso");
    },
}