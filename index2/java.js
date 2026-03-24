var lado = parseFloat(prompt("Digite o lado do quadrado: "))
var area_quad
area_quad = lado * lado
console.log("A área do quadrado é igual a: ", area_quad)
var altura = parseFloat(prompt("Digite a altura do retângulo: "))
var base = parseFloat(prompt("Digite a base do retângulo: "))
var area_retangulo
area_retangulo = altura * base
console.log("A área do retângulo é igual a: ", area_retangulo)
var altura = parseFloat(prompt("Digite a altura do triângulo: "))
var base = parseFloat(prompt("Digite a base do triângulo: "))
var area_triangulo
area_triangulo = altura * base / 2
console.log("A área do triângulo é igual a: ", area_triangulo)
var raio = parseFloat(prompt("Digite o raio do círculo: "))
var area_circulo
area_circulo = 3.14 * (raio * raio)
console.log("A área do círculo é igual a: ", area_circulo)