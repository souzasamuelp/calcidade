function idade() {
    let nascimento = parseInt( window.prompt("Em que ano você nasceu?") )
    let agora = new Date
    let ano = agora.getFullYear()

    let idade = ano - nascimento

    let resultado = document.querySelector("section#resultado")
    resultado.innerHTML = `<p>Quem nasceu em ${nascimento} vai completar ${idade} anos em ${ano}</p>`
}