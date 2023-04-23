const  prompt = require("prompt-sync")()        // adiciona pacote para entrada de dados
const veiculo = prompt("Veículo: ")                // lê os dados de entrada
const preco = Number(prompt("Preço R$: "))
const entrada = preco * 0.5                     // calcula valor de entrado
const parcela = (preco * 0.5) /12               // calcula valor das parcelas
console.log(`Promoção: ${veiculo}`)
console.log(`Entrada de R$: ${entrada.toFixed(2)}`)
console.log(`+12x de R$ ${parcela.toFixed(2)}`)