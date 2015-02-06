window.addEventListener("load", function(){
	DOM.quantum.focus();
	aleatorio();
	for(var cont=0; cont < DOM.filosofos.length; cont++){ 
		var palillos = "("+filosofo[cont].palillos.L + ","+filosofo[cont].palillos.R+")";
		DOM.filosofos[cont].innerHTML += "<label>Prioridad: "+filosofo[cont].prioridad+"</label></br><label>tiempo: "+filosofo[cont].tiempo+"</label></br><label class='porcentaje'>porcentaje: "+filosofo[cont].porcentaje+"%</label></br><label>Palillos: "+palillos+"</label></br><label class='estado'>Estado: "+filosofo[cont].estado;
	}	
});
function aleatorio(){
	for(var cont=0;cont<=4;cont++){
		filosofo[cont].prioridad = Math.floor(Math.random()*(2+1)+1);
		filosofo[cont].tiempo = Math.floor(Math.random()*(30+2));
	}
	prioridad();
}
function prioridad(){
	var orden = [];
	for(var x=1; x<=3;x++){
		for(var cont=0;cont<=4;cont++){
			if(filosofo[cont].prioridad === x){
				orden.push(cont);
			}
		}
	}
	prioridad = orden;
	console.log(orden);
	console.log(prioridad);
}

function mesayFilosofos(){
	var num = 5;
	var div = 360 / num;
	var radio = 200;
	var mesa = document.getElementById('mesa');
	var alinear = parseInt(mesa.offsetWidth / 2);
	var centrar = 40;
	var centrado = alinear - centrar;
	for (var i = 1; i <= num; ++i){
		var divFilosofo = document.createElement('div');
		divFilosofo.id = "f"+i;
		divFilosofo.className = 'filosofo';
		divFilosofo.style.position = 'absolute';
		var y = Math.sin((div * i) * (Math.PI / 180)) * radio;
		var x = Math.cos((div * i) * (Math.PI / 180)) * radio;
		divFilosofo.style.top = (y + centrado).toString() + "px";
		divFilosofo.style.left = (x + centrado).toString() + "px";
		mesa.appendChild(divFilosofo);
	}
	num = 10;
	div = 360 / num;
	radio = 110;
	for (var i = 1; i <= num; ++i){
		var divPlato = document.createElement('div');
		if(i%2===0){
			divPlato.id = "plato"+i;
		    divPlato.className = 'plato';
		}
		else{
			divPlato.id = "palillo"+i;
		    divPlato.className = 'palillo';
		}
		divPlato.style.position = 'absolute';
		var y = Math.sin((div * i) * (Math.PI / 180)) * radio;
		var x = Math.cos((div * i) * (Math.PI / 180)) * radio;
		divPlato.style.top = (y + centrado).toString() + "px";
		divPlato.style.left = (x + centrado).toString() + "px";
		mesa.appendChild(divPlato);
	}
}