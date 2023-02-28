// const pregunta = prompt('¿Cuánto es 2 + 2?');
// const respuesta = pregunta;

// const como = ()=> pregunta == 4 ? document.getElementById('r').innerHTML= "chota" : console.warn("confuso");

// function Orto(respuesta){
//     if(pregunta == 4) console.log("felicidades, sumas al nivel de un perro")
//     else console.warn("apestas, tu intelecto es aun peor que el de un insecto," + respuesta + " , no es 4");
// }
// como();
// Orto(respuesta);

let arr = ["pero", "la", "puta", "madre"];

// function print(arr){
//     console.log(arr[2]);
// }
// print(arr);
let cosa = (arr) =>{
for(let i = 0; arr.length > i; i++){
    document.getElementById('r').innerHTML = (arr[i]);
}
}
cosa(arr);

