function calcular (){
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    let operador = document.getElementById('operador').value.trim();
    let resultado;

    if (operador === "+") {
        resultado = num1 + num2;
    } else if (operador === "-") {
        resultado = num1 - num2;
    } else if (operador === "*") {
        resultado = num1 * num2;
    } else if (operador === "/") {
        if (num2 !== 0) {  // Evitar la división por cero
            resultado = num1 / num2;
        } else {
            resultado = "Error: División por 0 no permitida";
        }
    } else {
        resultado = "Operador no válido"; // Si el operador no es válido
    }
    
    document.getElementById('resultado').innerText = "Resultado: " + resultado;
}