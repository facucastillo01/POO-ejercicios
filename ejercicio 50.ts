let num1 = Number(prompt("Ingrese el primer número:"));
let num2 = Number(prompt("Ingrese el segundo número:"));

if (num1 === num2) {
    console.log("Son iguales");
} else if (num1 > num2) {
    console.log("El mayor es:", num1);
} else {
    console.log("El mayor es:", num2);
}