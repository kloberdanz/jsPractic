// const pregunta = prompt('¿Cuánto es 2 + 2?');
// const respuesta = pregunta;

// const como = ()=> pregunta == 4 ? document.getElementById('r').innerHTML= "con todo" : console.warn("confuso");

// function Otra(respuesta){
//     if(pregunta == 4) console.log("felicidades, sumas al nivel de un perro, los perros no suman.")
//     else console.warn("apestas, tu intelecto es aun peor que el de un insecto," + respuesta + " , no es 4");
// }
// como();
// Otra(respuesta);

let arr = ["pero", "la", "coso", "masCoso"];

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

