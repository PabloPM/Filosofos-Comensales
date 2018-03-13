function Filosofo (filosofo) {
  this.id = filosofo.id
  this.nombre = `Filósofo ${ (filosofo.id+1) }`
  this.prioridad = Math.floor(Math.random()*(2+1)+1)
  this.tiempo = Math.floor(Math.random()*(30+5))
  this.porcentaje = 0
  this.estado = 'normal'
  this.color = filosofo.color
  this.palillos = {
    I: filosofo.pIzquierdo,
    D: filosofo.pDerecho
  }
}
Filosofo.quantum = 0
Filosofo._palillos = [true, true, true, true, true]
Filosofo.ordenar = function (filosofos) {
  let orden = []
  for (let indice = 1; indice <= 3; indice++)
    filosofos.forEach(filosofo => {
      if (filosofo.prioridad === indice) orden.push(filosofo)
    })

  return orden
}
Filosofo.actualizarPalillos = function () { Filosofo._palillos = Filosofo._palillos.map( _ => true) }

Filosofo.prototype.cambiarEstado = function () {
  let estados     = ['normal', 'comiendo', 'pensando']
    , porcentaje  = this.porcentaje
  
  if (this.estado === 'esperando') {
    if (Filosofo._palillos[this.palillos.D] && Filosofo._palillos[this.palillos.I]) {
      this.estado = 'comiendo'
      Filosofo._palillos[this.palillos.I] = false
      Filosofo._palillos[this.palillos.D] = false
      porcentaje += (quantum*100)/this.tiempo
    }
  } else {
    this.estado = (Filosofo._palillos[this.palillos.I] && Filosofo._palillos[this.palillos.D])
                  ? estados[Math.floor(Math.random() * (2+1))] : 'esperando'
    
    if (this.estado === 'comiendo') {
     Filosofo._palillos[this.palillos.I] = false
     Filosofo._palillos[this.palillos.D] = false
     porcentaje += (Filosofo.quantum * 100) / this.tiempo 
    }
  }

  this.porcentaje = porcentaje >= 100 ? 100 : porcentaje

  if (this.porcentaje === 100) this.estado = 'sin comida'
  
  console.log(Filosofo._palillos)
}

Filosofo.prototype.actualizarUI = function () {
  let porcentaje  = document.querySelector(`#filo_${this.id} .porcentaje`)
    , estado      = document.querySelector(`#filo_${this.id} .estado`)
    , filosofoUI  = document.querySelector(`#f${this.id}`)
    , palilloIzq  = document.querySelector(`#palillo_${this.palillos.I}`)
    , palilloDer  = document.querySelector(`#palillo_${this.palillos.D}`)
    , colorEstado = ''  
  porcentaje.textContent = `Porcentaje: ${parseFloat(this.porcentaje).toFixed(2)}%`
  estado.textContent = `Estado: ${this.estado}`
  colorEstado = this.estado === 'normal'
      ? 'white'
      : this.estado === 'comiendo'
      ? 'green'
      : this.estado === 'pensando'
      ? 'blue'
      : this.estado === 'esperando'
      ? 'orange'
      : 'gray'
  estado.style.backgroundColor = colorEstado
  filosofoUI.style.backgroundColor = colorEstado

  if (this.estado === 'comiendo') {
    palilloIzq.style.display = 'none'
    palilloDer.style.display = 'none'
  }
}