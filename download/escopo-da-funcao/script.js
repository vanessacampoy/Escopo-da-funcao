//Escopo da função
function mostraCarro() {
var carro = "Fusca"
console.log(carro)
}
mostraCarro()


function plantas() {
  var planta = "Peperomia"
  console.log(planta)
}
plantas()


var tempo = "chover"
function previsaoTempo() {
  var previsao = `Será que vai ${tempo}`
  console.log(previsao)
}
previsaoTempo()


var rua = "Paulista"
function cidadeSaoPaulo() {
  var frase = `A avenida ${rua} é a mais importante da cidade São Paulo`
  console.log(frase)
}
cidadeSaoPaulo()


//Escopo de bloco
if(true) {
var estante = "madeira"
console.log(estante)
}


let temperatura = "frio"
if(false) {
console.log(temperatura)
} else {
  console.log("Verão")
}

