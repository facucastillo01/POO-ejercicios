let secreto = Math.floor(Math.random() * 10) + 1;
let intentos = 3;

while (intentos > 0) {
    let num = Number(prompt("Adivine (1-10):"));

    if (num === secreto) {
        console.log("Ganaste!");
        break;
    }

    intentos--;
}

if (intentos === 0)
    console.log("Perdiste. Era:", secreto);