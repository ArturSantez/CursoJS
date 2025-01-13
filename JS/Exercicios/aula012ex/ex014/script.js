function carregar (){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var date = new Date()
    var hora = date.getHours()
    var minutos = date.getMinutes()

    msg.innerHTML = `Agora são ${hora}:${minutos} horas`

    if (hora >= 0 && hora <= 12) {
        img.src = 'imagens/manha.png'
        document.body.style.backgroundColor = '#FCD59E'
    } else if (hora > 12 && hora < 18) {
        img.src = 'imagens/tarde.png'
        document.body.style.backgroundColor = '#F4A185'
    } else {
        img.src = 'imagens/noite.png'
        document.body.style.backgroundColor = '#020C0D'
    }
}
