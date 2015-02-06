var express = require("express");
var nunjucks = require("nunjucks");
var bodyParser = require("body-parser");
var http = require("http");
var app = express();
var servidor = http.createServer(app);
servidor.listen(8080);
console.log("servidor funcionando en el puerto 8080");

app.use(bodyParser.urlencoded({
	extended : true
}));
console.log("body parser configurado");

app.use("/imagenes", express.static(__dirname + "/imagenes"));
app.use("/css", express.static(__dirname + "/css"));
app.use("/js", express.static(__dirname + "/js"));
app.use("/font", express.static(__dirname + "/font"));
console.log("rutas estaticas configuradas");

nunjucks.configure(__dirname + "/vistas", {
	express : app
});
console.log("sistemas de templates configurado");

app.get("/", function(req, res) {
	res.render("index.html");
	console.log("index enviado");
});
