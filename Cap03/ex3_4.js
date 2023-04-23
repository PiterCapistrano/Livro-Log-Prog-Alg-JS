const prompt = require("prompt-sync")()
const racao = Number(prompt("Peso da Ração (kg): "))
const consumo = Number(prompt("Consumo diário (gr): "))
const pesogr = racao * 1000
const duracao = Math.floor(pesogr / consumo)
const sobra = pesogr - (consumo * duracao)
console.log(`Duração: ${duracao} dias`)
console.log(`Sobra: ${sobra}gr`)