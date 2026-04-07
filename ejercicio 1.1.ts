function saludar(): void {
  let nombre = (document.getElementById("nombre") as HTMLInputElement).value;
  document.getElementById("resultado")!.innerText = "Hola, " + nombre;
}