// cria referência ao form e elemento onde será exibida a resposta
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

// "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    e.preventDefault()                          // evita envio do form

    const nome = frm.inNome.value               // obtém valores do form
    const masculino = frm.inMasculino.checked
    const altura = Number(frm.inAltura.value)

   const peso = masculino ? 22 * Math.pow(altura, 2) : 21 * Math.pow(altura, 2) // alternativa para if... else

    // apresenta a resposta (altera o conteúdo do elemento h3 da página)
    resp.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(3).replace(/\./g, ",")} kg`
})
frm.addEventListener("reset", () => {
resp.innerText = ""                             // limpa o conteúdo do elemento h3 que exibe a resposta
})