const server = require('./src/server');

const { Character, Film, Planet } = require('./src/database');
const id="64a30e530c012af2fd5067c6";
Character.get(id).then(res => {
    console.log(res);
});

//Film.find().then(res => { console.log(res)});


server.listen(8004, () => {
    console.log("Database service on PORT 8004");
});