//Percurso em vetores 
/*
let valores = [8, 1, 7, 3, 6, 9]

console.log(valores)
for (let pos = 0; pos < valores.length ; ++pos) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

let valores = [8, 1, 7, 3, 6, 9]
valores.sort()

for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

