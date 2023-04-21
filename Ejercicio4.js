let media=0;



const materia=[{

    nombre: "Jaime",

    nota:5

},{

    nombre: "Oscar",

    nota:5

},{

    nombre: "Jorge",

    nota:5

},{

    nombre: "Diego",

    nota:5

},{

    nombre: "Raul",

    nota:5

}]

let calificacionBaja=5;

let vago=null;

let pos=0;

for(let i=0;i<materia.length;i++){

    materia[i].nota=Math.round(Math.random()*5);

    document.write(`El estudiante <b>${materia[i].nombre}</b> tiene una calificacion de: <b>${materia[i].nota}</b><br>`)

    

    media=media+materia[i].nota/materia.length;

    if(calificacionBaja>materia[i].nota){

        vago=materia[i].nombre;

        calificacionBaja=materia[i].nota;

        

    }

    

}





document.write(`La calificacion mas baja es de <b>${vago}</b> y su nota fue: <b>${calificacionBaja}</b>`);

document.write(`<br> La media es: <b>${media}</b>`);