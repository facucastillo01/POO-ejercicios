const d = prompt("Ingrese un carácter:");

if (d !== null) {
    switch (d.toLowerCase()) {
        case "a": case "e": case "i": case "o": case "u":
            console.log("Vocal");
            break;
        default:
            if (d >= '0' && d <= '9')
                console.log("Número");
            else
                console.log("Consonante");
    }
}