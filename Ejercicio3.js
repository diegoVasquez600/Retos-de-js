const arrayNegativo = [];

const arrayPositivo = [];

let numero = 0;
let suma=0;
for(let i=0;i<15;i++){

    arrayNegativo.push(Math.round(Math.random()*-50));

    arrayPositivo.push(arrayNegativo[i]*(-1));

    suma += arrayPositivo[i];
}

document.write(`<b>Array Negativo:</b> ${arrayNegativo}<br>`);

document.write(`<b>Array Positivo:</b> ${arrayPositivo}<br>`);

document.write(`<b>La suma de los números es: </b> ${suma}`);