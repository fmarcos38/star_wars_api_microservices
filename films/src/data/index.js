const axios = require("axios");

module.exports = {
    listFilms: async () => { 
        const resp = await axios.get("http://dbstarwars:8004/films");
        //console.log("resp: ", resp);
        return resp.data;
    },

    createFilm: async () => {
        throw Error("error al creal film");
    },
}