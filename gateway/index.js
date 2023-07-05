const express = require("express");
const morgan = require("morgan");
const {createProxyMiddleware} = require("http-proxy-middleware");

const app = express();
app.use(morgan("dev"));

//rutas para c/microservicio
app.use("/dbstarwars", createProxyMiddleware({
    target: "http://dbstarwars:8004",    //cambié de localhost a characters(q es el nombre de dicho doker).
    changeOrigin: true,
}));

app.use("/characters", createProxyMiddleware({
    target: "http://characters:8001",   //cambié de localhost a characters(q es el nombre de dicho doker).
    changeOrigin: true,
}));

app.use("/films", createProxyMiddleware({ 
    target: "http://films:8002",    //cambié de localhost a characters(q es el nombre de dicho doker).
    changeOrigin: true,
}));

app.use("/planets", createProxyMiddleware({
    target: "http://planets:8003",    //cambié de localhost a characters(q es el nombre de dicho doker).
    changeOrigin: true,
}));





app.listen(8000, () => {
    console.log("Gateway on port 8000");
});