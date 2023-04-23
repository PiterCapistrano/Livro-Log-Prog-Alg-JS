const prompt = require("prompt-sync")()
const funcionario = prompt("Funcionário: ")
const salario = Number(prompt("Salário Mensal R$: "))
const tempo = Number(prompt("Tempo de Serviço (Anos): "))
const ano = salario * 12
const anototal = ano * tempo
const quadrientos = Math.floor(tempo / 4)
const acrecimo = ano * quadrientos / 100
console.log(`Funcionário: ${funcionario}`)
console.log(`Quadriênios: ${quadrientos}`)
console.log(`Salário Final R$: ${(anototal+acrecimo).toFixed(2).replace(/\./g, ",")}`)