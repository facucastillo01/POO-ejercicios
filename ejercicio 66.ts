while (true) {
    let a = Number(prompt("A:"));
    let b = Number(prompt("B:"));

    if (a % b === 0)
        console.log("A es múltiplo de B");
    else if (b % a === 0)
        console.log("B es múltiplo de A");
    else
        console.log("Ninguno es múltiplo");
}