// variables goblales
let filosofos = []
  , quantum   = 0
  , palillos  = [true, true, true, true, true]
  , ronda     = 0
  , DOM       = {
    ui: document.querySelector('#ui'),
    informacion: document.querySelector('#informacion'),
    configuracion: document.querySelector('#configuracion'),
    quantumInput: document.querySelector('#quantum')
  }

// listeners
window.addEventListener('DOMContentLoaded', main)
document.querySelector('#iniciar').addEventListener('click', iniciarSimulacion)

// funciones
function main () {
  DOM.quantumInput.focus()
  for (let indice = 0; indice < 5; indice++) {
    filosofos.push(new Filosofo({
      id: indice,
      pIzquierdo: indice,
      pDerecho: indice === 4 ? 0 : (indice+1),
      color: colorAleatorio()
    }))
  }
  filosofos.forEach(filosofo => DOM.informacion.appendChild(filosofoCard(filosofo)))
  renderUI(filosofos)
  filosofos = Filosofo.ordenar(filosofos)
}

function iniciarSimulacion () {
  if (Number(DOM.quantumInput.value) >= 1 && Number(DOM.quantumInput.value) <= 30) {
    quantum = Number(DOM.quantumInput.value)
    Filosofo.quantum = quantum
    DOM.configuracion.style.display = 'none'
    simulacion()

    let intervalo = setInterval(() => {
      if (filosofos.length > 0) simulacion()
      else {
        document.querySelector('#satisfechos').textContent = `Satisfechos: 5`      
        clearInterval(intervalo)
      }
    }, (quantum*500))
  }
}

function simulacion () {
  Filosofo.actualizarPalillos()

  document.querySelector('#ronda').textContent = `Ronda: ${ ronda++ }`
  document.querySelector('#satisfechos').textContent = `Satisfechos: ${ 5 - filosofos.length }`
  console.log(`Ronda: ${ ronda } ${Filosofo.quantum}`)
  
  filosofos.forEach(filosofo => {
    filosofo.cambiarEstado()
    filosofo.actualizarUI()
  })

  filosofos = filosofos.filter(filosofo => filosofo.porcentaje !== 100)
}