let numero = window.document.getElementById('num')
var add = window.document.getElementById('b1')
var fin = window.document.getElementById('b2')
let vetor = []
var res = window.document.getElementById('result')

add.addEventListener('click', adicionar)
fin.addEventListener('click', finalizar)

function isNaN(n) {
    if (Number(n) < 1 || Number(n) > 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) == -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    let valores = window.document.getElementsByTagName('select')[0]
    if (isNaN(numero.value) || !inLista(numero.value, vetor)) {
        window.alert('Número inválido ou já inserido na lista')
    } else {
        vetor.push(Number(numero.value))
        var item = document.createElement('option')
        item.text = `Valor ${numero.value} adicionado`
        valores.appendChild(item)
        res.innerHTML = ''
    }
    numero.value = ''
    numero.focus()
}

function finalizar() {
    if (vetor.length == 0) {
        window.alert('Adicione valores antes de finalizar')
    } else {
        let maior = vetor[0]
        let menor = vetor[0]
        let soma = 0
        let media = 0

        for (let pos in vetor) {
            soma += vetor[pos]
            if (vetor[pos] > maior) {
                maior = vetor[pos]
            }
            if(vetor[pos] < menor) {
                menor = vetor[pos]
            }
        }

        media = soma / vetor.length

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${vetor.length} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`
        res.innerHTML += `<p>A média de todos os valores é ${media.toFixed(2)}`
    }  
}

