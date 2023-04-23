const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e) => {
    const produto = frm.inProduto.value
    const preco = Number(frm.inPreco.value)

    const promocao = (preco * 2) + (preco / 2)
    const terceiro = preco / 2
    resp1.innerText = `${produto} - Promoção: Leve 3 por R$: ${promocao.toFixed(2)}`
    resp2.innerText = `O 3º produto custa apenas RS: ${terceiro.toFixed(2)}`

    e.preventDefault()
})