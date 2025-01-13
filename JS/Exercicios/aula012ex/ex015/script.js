function verificar() {
    var date = new Date()
    var ano = date.getFullYear()
    var fano = document.getElementById('iano')
    var res = document.getElementById('res')
    var img = document.createElement('img')

    img.setAttribute('id','foto')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('sex')
        var idade = ano - Number(fano.value)
        var genero = ''

        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 13) {
                img.setAttribute('src', 'imagens/homemcrianca.png')
            } else if (idade > 12 && idade < 18) {
                img.setAttribute('src', 'imagens/homemjovem.png')
            } else if (idade >= 18 && idade < 60) {
                img.setAttribute('src','imagens/homemadulto.png')
            } else {
                img.setAttribute('src','imagens/homemidoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 13) {
                img.setAttribute('src', 'imagens/mulhercrinca.png')
            } else if (idade > 12 && idade < 18) {
                img.setAttribute('src','imagens/mulherjovem.png')
            } else if (idade >= 18 && idade < 60) {
                img.setAttribute('src','imagens/mulheradulta.png')
            } else {
                img.setAttribute('src','imagens/mulheridosa.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Dectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}

