let numeroAMultiplicar=prompt("Ingrese el numero que va a multiplicar:");

let tabla=[];

let multiplicadores=[];

document.write(`La tabla del <b>${numeroAMultiplicar}</b> es:<br> `)

for(let i=0; i<=10;i++){

    tabla.push(numeroAMultiplicar*i);

    document.write(`<b>${tabla[i]}</b><br>`)

    multiplicadores.push(i);

}

document.write(`Los multiplicadores son: <b>${multiplicadores}</b>`);

console.log(tabla)
