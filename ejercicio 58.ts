let c = prompt("Ingrese un carácter:");

if (c !== null) {
    switch (c) {
        case ".": case ",": case ";": case ":":
            console.log("Signo de puntuación");
            break;
        default:
            if (c >= '0' && c <= '9')
                console.log("Cifra numérica");
            else
                console.log("Otro carácter");
    }
}