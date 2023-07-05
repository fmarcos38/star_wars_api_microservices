const axios = require("axios");

module.exports = {
    listPlsnets: async () => { 
        const resp = await axios.get("http://dbstarwars:8004/planets");
        //console.log("resp: ", resp);
        return resp.data;
    },

    createPlanet: async () => {
        throw Error("error al creal planet");
    },

};