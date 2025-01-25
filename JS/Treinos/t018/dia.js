let date = new Date()
let data = {dis: date.getDay(), dta: date.getDate(), mes: date.getMonth(), ano: date.getFullYear()}

let stx = window.document.querySelector('p#data')
let dtx = window.document.querySelector('p#semana')

switch (data.mes) {
    case 0:
        data.mes = 1
        break
    case 1:
        date.mes = 2
        break
    case 2:
        date.mes = 3
        break
    case 3: 
        date.mes = 4
        break
    case 4:
        date.mes = 5
        break
    case 5:
        date.mes = 6
        break
    case 6:
        date.mes = 7
        break
    case 7:
        date.mes = 8
        break
    case 8:
        date.mes = 9
        break
    case 9:
        date.mes = 10
        break
    case 10:
        date.mes = 11
        break
    case 11:
        date.mes = 12
        break
}

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

stx.innerHTML = `${data.dta}/${data.mes}/${data.ano}`

dtx.innerHTML = `${data.dis}`