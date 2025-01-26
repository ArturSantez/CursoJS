let date = new Date()
let data = {dis: date.getDay(), 
    dta: date.getDate(), 
    mes: date.getMonth() + 1, 
    ano: date.getFullYear()}

if (data.dta < 10) {
    data.dta = '0' + data.dta
}

if (data.mes < 10) {
    data.mes = '0' + data.mes
}

switch (data.dis) {
    case 0:
        data.dis = 'Domingo'
        break
    case 1: 
        data.dis = 'Segunda-feira'
        break
    case 2:
        data.dis = 'Terça-feira'
        break
    case 3:
        data.dis = 'Quarta-feira'
        break
    case 4:
        data.dis = 'Quinta-feira'
        break
    case 5:
        data.dis = 'Sexta-feira'
        break
    case 6:
        data.dis = 'Sábado'
        break
}

let stx = window.document.querySelector('p#data')
let dtx = window.document.querySelector('p#semana')

stx.innerHTML = `${data.dta}/${data.mes}/${data.ano}`

dtx.innerHTML = `${data.dis}`