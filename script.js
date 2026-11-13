function calcular () {
let numero1 = Number(document.getElementById("numero1").value);
let numero2 = Number(document.getElementById("numero2").value);

let area = numero1 * numero2;
let perimetro = 2 * (numero1 * numero2);

document.getElementById("area").innerHTML = "El area es: "+ area;
document.getElementById("perimetro").innerHTML = "El perimetro es: "+ perimetro;
}