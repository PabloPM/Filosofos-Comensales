function colorAleatorio () {
  let valores = '0123456789ABCDEF'
    , color   = '#'
  for (let indice = 0; indice < 6; indice++)
    color += valores[Math.floor(Math.random() * 16)]
  return color
}

function filosofoCard (filosofo) {
  let container   = document.createElement('div')
    , nombre      = document.createElement('h3')
    , prioridad   = document.createElement('p')
    , tiempo      = document.createElement('p')
    , porcentaje  = document.createElement('p')
    , estado      = document.createElement('p')
    , palillos    = document.createElement('p')

  container.className = 'filosofo-card'
  container.id = `filo_${filosofo.id}`
  container.style.borderBottom = `solid 10px ${filosofo.color}`

  nombre.className = 'nombre'
  nombre.textContent = filosofo.nombre

  prioridad.className = 'prioridad'
  prioridad.textContent = `Prioridad: ${filosofo.prioridad}`

  tiempo.className = 'tiempo'
  tiempo.textContent = `Tiempo: ${filosofo.tiempo}`

  porcentaje.className = 'porcentaje'
  porcentaje.textContent = `Porcentaje: ${filosofo.porcentaje}`

  estado.className = 'estado'
  estado.textContent = `Estado: ${filosofo.estado}`

  palillos.className = 'palillos'
  palillos.textContent = `Palillos: (${filosofo.palillos.I+1},${filosofo.palillos.D+1})`

  container.appendChild(nombre)
  container.appendChild(prioridad)
  container.appendChild(tiempo)
  container.appendChild(porcentaje)
  container.appendChild(estado)
  container.appendChild(palillos)

  return container
}

function renderUI (filosofos) {
  let mesa            = document.querySelector('#mesa')
    , elementos       = 5
    , divisiones      = 360 / elementos
    , alinear         = parseInt(mesa.offsetWidth / 2)
    , radioFilosofo   = parseInt(mesa.offsetWidth / 2) + 40
    , radioElemento   = parseInt(mesa.offsetWidth / 2) - 40
    , centrar         = 30
    , centrado        = alinear - centrar

  for (let filosofo of filosofos) {
    let filosofoDiv = document.createElement('div')
      , ejeX        = Math.sin((divisiones * (filosofo.id +1)) * (Math.PI/180)) * radioFilosofo
      , ejeY        = Math.cos((divisiones * (filosofo.id +1)) * (Math.PI/180)) * radioFilosofo
    
    filosofoDiv.id = `f${filosofo.id}`
    filosofoDiv.className = 'filosofo'
    filosofoDiv.style.position = 'absolute'
    filosofoDiv.style.top = `${(ejeY + centrado)}px`
    filosofoDiv.style.left = `${ejeX + centrado}px`
    filosofoDiv.style.backgroundColor = '#555'
    filosofoDiv.style.border = `solid 5px ${filosofo.color}`

    mesa.appendChild(filosofoDiv)
  }

  elementos = 10
  divisiones = 360 / elementos

  for (let indice = 1; indice <= 10; indice++) {
    let elementoDiv = document.createElement('div')
      , ejeX        = Math.sin((divisiones * indice) * (Math.PI/180)) * radioElemento
      , ejeY        = Math.cos((divisiones * indice) * (Math.PI/180)) * radioElemento
    
    if (indice%2 === 1) elementoDiv.style.transform = `rotate(${45*indice}deg)`

    elementoDiv.className = (indice%2 === 0) ? 'plato' : 'palillo'
    elementoDiv.id  = (indice%2 === 0) ? `plato_${Math.floor(indice/2)}` : `palillo_${Math.floor(indice/2)}`
    elementoDiv.style.position = 'absolute'
    elementoDiv.style.top = `${(ejeY + centrado)}px`
    elementoDiv.style.left = `${(ejeX + centrado)}px`

    mesa.appendChild(elementoDiv)
  }
}