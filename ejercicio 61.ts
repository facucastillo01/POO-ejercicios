let j = prompt("Ingrese un carácter:");

if (j !== null) {
    if (j === "." || j === "," || j === ";" || j === ":") {
        console.log("Puntuación");
    } else if (j >= '0' && j <= '9') {
        console.log("Número");
    } else {
        console.log("Otro");
    }
}