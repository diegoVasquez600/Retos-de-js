let numeros = [];

for (let i = 1; i <= 10; i++) {
    let numero = window.prompt(`Ingrese el número ${i}:`);
    numeros.push(numero);
}

let numerosPositivos = numeros.filter(numero => numero >= 0);

window.prompt("Los números positivos son: " + numerosPositivos.join(", "));