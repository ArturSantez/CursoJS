var botao = window.document.getElementById('button')
var resul = window.document.getElementById('resultado')

botao.addEventListener('click', contar)

function contar(){
    var ini = window.document.getElementById('inicio')
    var fim = window.document.getElementById('fim')
    var pas = window.document.getElementById('passo')

    if (ini.value.trim() == '' || fim.value.trim() == '' || pas.value.trim() == '') {
        window.alert('Por favor, insira os valores')
    } else if (Number(pas.value) <= 0){
        window.alert(`Passo inválido, será considerado passo 1`)
        resul.innerHTML = ''
        pas.value = 1
        for (var c = Number(ini.value); c <= Number(fim.value); c += Number(pas.value)) {
            resul.innerHTML += `${c} &#x1F449;`
        } 
        for (var c = Number(ini.value); c >= Number(fim.value); c -= Number(pas.value)) {
            resul.innerHTML +=  `${c} &#x1F449;`
        }
        resul.innerHTML += `&#x1F6A9`
    } else {
        resul.innerHTML = ''
        for (var c = Number(ini.value); c <= Number(fim.value); c += Number(pas.value)) {
            resul.innerHTML += `${c} &#x1F449;`
        } 
        for (var c = Number(ini.value); c >= Number(fim.value); c -= Number(pas.value)) {
            resul.innerHTML += `${c} &#x1F449;`
        }
        resul.innerHTML += `&#x1F6A9`
    }    
}