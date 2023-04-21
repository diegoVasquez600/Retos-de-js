let numeros=[]

for (let i = 1; i <= 20; i++) {
    let numero = window.prompt(`Ingrese el número ${i}:`);
    numeros.push(numero);
    
}

let numerosPositivos = numeros.filter(numero => numero > 0);
let numeroNegativos = numeros.filter(numero => numero < 0);
let numeroNeutros = numeros.filter(numero => numero == 0 || numero== 1);


alert("Los números positivos son: " + numerosPositivos.length);
alert("Los números Negativos son: " + numeroNegativos.length);
alert("Los números Neutros son: " + numeroNeutros.length);