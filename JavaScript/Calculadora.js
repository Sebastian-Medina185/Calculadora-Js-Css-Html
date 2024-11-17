let pantalla = document.getElementById('pantalla')
let operacion = ''
let numActual = '0'
let numAnterior = ''
let resultado

function agregarNumero(num) {
    if (numActual === '0') {
        numActual = num
    } else {
        numActual += num
    }
    Actualizar();
}

function borrar() {
    numActual = numActual.length > 1 ? numActual.slice(0, -1) : '0';
    Actualizar()
}

function agregarOperacion(op) {
    if (numAnterior !== '') {
        igual()
    }
    operacion = op;
    numAnterior = numActual;
    numActual = '0'
}

function igual() {

    if (operacion === '+') {
        resultado = parseFloat(numAnterior) + parseFloat(numActual);
    } else if (operacion === '-') {
        resultado = parseFloat(numAnterior) - parseFloat(numActual);
    } else if (operacion === '*') {
        resultado = parseFloat(numAnterior) * parseFloat(numActual);
    } else if (operacion === '/') {
        resultado = parseFloat(numAnterior) / parseFloat(numActual);
    } else {
        return
    }

    numActual = resultado + ''
    operacion = ''
    numAnterior = ''
    Actualizar()
}

function limpiar() {
    numActual = '0'
    numAnterior = ''
    operacion = ''
    Actualizar()
}

function Actualizar() {
    pantalla.innerHTML = numActual
}