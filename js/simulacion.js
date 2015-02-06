function iniciar(){
	if(DOM.quantum.value != ''){
		Quantum = DOM.quantum.value;
		DOM.informacion.style.display ="inline-block";
		DOM.simulacion.style.display ="inline-block";	
		mesayFilosofos();
		DOM.quantumForm.style.display = "none";
	}
	principal();
}
function principal(){
	if(centinela != 5){
		estados();
		recursos();
		render();
		setTimeout("quantum();",3000);
		setTimeout("principal();",1000);
	}
	else{
		alert("todos contentos");
		document.location.reload();
	}
}
function estados(){
	var estado = ["normal","espera","pensando"];
	var control = 0;
	for(var cont=0;cont<=4;cont++){
		if(filosofo[cont].estado === "normal" || filosofo[cont].estado === "pensando"){
			if(filosofo[cont].porcentaje < 100)
				filosofo[cont].estado = estado[Math.floor(Math.random()*(2+1))];
			else
				control = control+1;
		}
		console.log(cont+"="+filosofo[cont].estado);
	}
	centinela = control;
}
function recursos(){
	for(var cont=0;cont<=4;cont++){
		if(filosofo[prioridad[cont]].estado === "espera"){
			console.log("--->"+prioridad[cont]);
			if(palillos[filosofo[prioridad[cont]].palillos.L-1]&&palillos[filosofo[prioridad[cont]].palillos.R-1]){
				filosofo[prioridad[cont]].estado = "comiendo";
				palillos[filosofo[prioridad[cont]].palillos.L-1] = false;
				palillos[filosofo[prioridad[cont]].palillos.R-1] = false;
			}
		}
		console.log("-------->"+cont+"="+filosofo[prioridad[cont]].estado);
	}
	console.log(palillos);
}
function render(){
	for(var cont=0;cont<=4;cont++){
		DOM.estado[cont].innerHTML = "Estado: "+filosofo[cont].estado;
		if(palillos[cont]===false){
			DOM.palillo[cont].style.display = "none";
		}
		if(palillos[cont]===true){
			DOM.palillo[cont].style.display = "block";
		}
		if(filosofo[prioridad[cont]].estado === "comiendo"){
			console.log("------------------------------------------>"+cont);
			DOM.filoImg[prioridad[cont]].style.backgroundColor = "red";
			DOM.filosofos[prioridad[cont]].style.borderColor = "red";
		}
		if(filosofo[prioridad[cont]].estado === "espera"){
			console.log("------------------------------------------>"+cont);
			DOM.filoImg[prioridad[cont]].style.backgroundColor = "yellow";
			DOM.filosofos[prioridad[cont]].style.borderColor = "yellow";
		}
		if(filosofo[prioridad[cont]].estado === "pensando"){
			console.log("------------------------------------------>"+cont);
			DOM.filoImg[prioridad[cont]].style.backgroundColor = "blue";
			DOM.filosofos[prioridad[cont]].style.borderColor = "blue";
		}
		if(filosofo[prioridad[cont]].estado === "normal"){
			console.log("------------------------------------------>"+cont);
			DOM.filoImg[prioridad[cont]].style.backgroundColor = "#DDD";
			DOM.filosofos[prioridad[cont]].style.borderColor = "#DDD";
		}
		if(filosofo[prioridad[cont]].porcentaje === 100){
			console.log("------------------------------------------>"+cont);
			DOM.filoImg[prioridad[cont]].style.backgroundColor = "green";
			DOM.filosofos[prioridad[cont]].style.backgroundColor = "green";
		}
	}
}
function quantum(){
	for(var cont=0; cont<=4; cont++){
		if(filosofo[prioridad[cont]].estado === "comiendo"){
			filosofo[prioridad[cont]].estado = "normal";
			palillos[filosofo[prioridad[cont]].palillos.L-1] = true;
			palillos[filosofo[prioridad[cont]].palillos.R-1] = true;
			filosofo[prioridad[cont]].porcentaje = ((Quantum*100)/filosofo[prioridad[cont]].tiempo)+filosofo[prioridad[cont]].porcentaje;
			if(filosofo[prioridad[cont]].porcentaje > 100)
				filosofo[prioridad[cont]].porcentaje = 100;
				
		}
		DOM.porcentaje[prioridad[cont]].innerHTML = "Porcentaje: "+ filosofo[prioridad[cont]].porcentaje+"%";
	}
	render();
}
