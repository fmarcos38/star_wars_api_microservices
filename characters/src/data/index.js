const axios = require('axios');

module.exports = {
    listCharacters: async () => { 
        const resp = await axios.get("http://dbstarwars:8004/characters");
        //console.log("resp: ", resp);
        return resp.data;
    },

    createCharacters: async () => {
        throw Error("error al creal perso");
    },
}