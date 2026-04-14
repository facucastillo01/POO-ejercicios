let numeritoo = Number(prompt("Ingrese un número positivo:"));
let contador = 0;

while (numeritoo > 0) {
    numeritoo = Math.floor(numeritoo / 10);
    contador++;
}

console.log("Cantidad de cifras:", contador);