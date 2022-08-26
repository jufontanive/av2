peso = document.getElementById("Peso")
altura = document.getElementById("Altura")
IMC = document.getElementById("IMC")

function calcularIMC () {
    imc = peso.value / (altura.value ** 2)
    IMC.value = imc
    console.log(imc)
}