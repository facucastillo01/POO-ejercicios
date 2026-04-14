let m = prompt("Ingrese un carácter:")?.toLowerCase() ?? "";

if ("aeiou".includes(m)) {
    console.log("Vocal");
} else if (m >= '0' && m <= '9') {
    console.log("Número");
} else {
    console.log("Consonante");
}