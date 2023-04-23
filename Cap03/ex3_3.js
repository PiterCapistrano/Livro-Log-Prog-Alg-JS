const prompt = require("prompt-sync")()
const funcionario = prompt("Funcionário: ")
const salario = Number(prompt("Salário Mensal R$: "))
const tempo = Number(prompt("Tempo de Serviço (Anos): "))
const salarioano = salario * 12
const anototal = salarioano * tempo
const quadrientos = Math.floor(tempo / 4)
<<<<<<< HEAD
const temporest = Number((tempo * 12) - (quadrientos * 48))
const acrecimo = salario * quadrientos / 100
console.log(`Funcionário: ${funcionario}`)
console.log(`Quadriênios: ${quadrientos}`)
console.log(`Salário Final R$: ${(salario+acrecimo).toFixed(2).replace(/\./g, ",")}`)
console.log(`Total Recebido R$: ${Number((anototal)+(acrecimo*temporest)).toFixed(2).replace(/\./g, ",")}`)
=======
const acrecimo = salarioano * quadrientos / 100
console.log(`Funcionário: ${funcionario}`)
console.log(`Quadriênios: ${quadrientos}`)
console.log(`Salário Final R$: ${(anototal+acrecimo).toFixed(2).replace(/\./g, ",")}`)
>>>>>>> 82daff0 (Update ex3_3.js)
