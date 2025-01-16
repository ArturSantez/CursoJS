let botao = window.document.getElementById('bt')

botao.addEventListener('click', gerar)

function gerar(){
    let num = document.getElementById('n')
    let tab = document.getElementById('tabse')

    if (num.value.trim() == '') {
        alert('Por favor, digite um número')
    } else {
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${Number(num.value)} X ${c} = ${Number(num.value) * c}`
            tab.appendChild(item)
            ++c
        }
    }
}