let numeros = [];

let numerosDados=prompt("Ingrese el valor de numeros que desea agregar:");

let numeroMayor=0;

document.write(`Dado los numeros: <br><br>`)

for(let i=0;i<numerosDados;i++){

    numeros.push(Math.round(Math.random()*100));

    document.write(`<b>${numeros[i]}</b><br>`)

    if(numeroMayor<numeros[i]){

        numeroMayor=numeros[i];

        

    }

}

document.write(`<br>El numero Mayor es: <b>${numeroMayor}</b>`)