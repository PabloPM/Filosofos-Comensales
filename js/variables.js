var filosofo = [
	{
		prioridad : 0,
		tiempo : 0,
		porcentaje : 0,
		estado : "normal",
		palillos : {
			L: 1,
			R : 2
		} 
	},
	{
		prioridad : 0,
		tiempo : 0,
		porcentaje : 0,
		estado : "normal",
		palillos : {
			L: 2,
			R : 3
		} 
	},
	{
		prioridad : 0,
		tiempo : 0,
		porcentaje : 0,
		estado : "normal",
		palillos : {
			L: 3,
			R : 4
		} 
	},
	{
		prioridad : 0,
		tiempo : 0,
		porcentaje : 0,
		estado : "normal",
		palillos : {
			L: 4,
			R : 5
		} 
	},
	{
		prioridad : 0,
		tiempo : 0,
		porcentaje : 0,
		estado : "normal",
		palillos : {
			L: 5,
			R : 1
		} 
	}
];
var palillos = [true,true,true,true,true];
var DOM = {
	filosofos : document.getElementsByClassName("datos"),
	informacion : document.getElementById("informacion"),
	simulacion : document.getElementById("simulacion"),
	quantum : document.getElementById("quantum"),
	quantumForm : document.getElementById("quantumForm"),
	palillo : document.getElementsByClassName("palillo"),
	filoImg : document.getElementsByClassName("filosofo"),
	estado : document.getElementsByClassName("estado"),
	porcentaje : document.getElementsByClassName("porcentaje")
};
var Quantum = 0;
var prioridad = [];
var centinela = 0;
