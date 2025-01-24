let date = new Date()
let hrs = date.getHours()
let min = date.getMinutes()

if (hrs < 10) {
    hrs = '0' + hrs
}
if (min < 10) {
    min = '0' + min
}

var section = window.document.getElementsByTagName('section')[0]

var mgs = window.document.getElementsByTagName('h1')[0]
var tmp = window.document.getElementsByTagName('p')[0]

tmp.innerHTML = `${hrs}:${min}`

if (hrs > 3 && hrs <= 12) {
    mgs.innerHTML = 'Bom dia!'

    document.body.style.backgroundImage = 'linear-gradient(#728EA6, #F2EA77)'
    document.body.style.color = '#ffffff'
    section.style.backgroundImage = 'linear-gradient(#F2D3AC,#F2A477)'
    section.style.borderColor = '#F2D3AC'
} else if (hrs >= 13 && hrs < 18) {
    mgs.innerHTML = 'Boa tarde!'

    document.body.style.backgroundImage = 'linear-gradient(#2B3453, #D98566)'
    document.body.style.color = '#f09777'
    section.style.backgroundImage = 'linear-gradient(#8A565F,#D98566)'
    section.style.borderColor = '#8A565F'
} else if (hrs >= 18) {
    mgs.innerHTML = 'Boa noite!'

    document.body.style.backgroundImage = 'linear-gradient(#030917,#202D3F)'
    document.body.style.color = '#293950'
    section.style.backgroundImage = 'linear-gradient(#000000, #0E1E2E)'
    section.style.borderColor = '#081525'
} else {
    mgs.innerHTML = 'Boa madrugada!'

    document.body.style.backgroundImage = 'linear-gradient(#050226, #110880)'
    section.style.backgroundImage = 'linear-gradient(#070333, #281259)'
    section.style.borderColor = '#070333'
}