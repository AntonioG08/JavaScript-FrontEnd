function mostrarResultado(resultado){
    /*Note: Since the element in the DOM is of an 'input' type, instead of 
            using 'textContent' as we would normally do, we use just '.value'
            and assign a value to it.*/ 
    document.getElementById("resultado").value = resultado;
}

function sumOperation(){
    let number1 = +document.getElementById("campo1").value;
    let number2 = +document.getElementById("campo2").value;
    mostrarResultado(number1 + number2);
}

function substractOperation(){
    let number1 = +document.getElementById("campo1").value;
    let number2 = +document.getElementById("campo2").value;
    mostrarResultado(number1 - number2);
}

function multiplyOperation(){
    let number1 = +document.getElementById("campo1").value;
    let number2 = +document.getElementById("campo2").value;
    mostrarResultado(number1 * number2);
}

function divideOperation(){
    let number1 = +document.getElementById("campo1").value;
    let number2 = +document.getElementById("campo2").value;
    mostrarResultado(number1 / number2);
}

function rootOperation(){
    let number = +document.getElementById("campo2").value;
    mostrarResultado(Math.sqrt(number));
}

function powOperation(){
    let number1 = +document.getElementById("campo1").value;
    let number2 = +document.getElementById("campo2").value;
    mostrarResultado(Math.pow(number1, number2));
}

function absOperation(){
    let number = +document.getElementById("campo2").value;
    mostrarResultado(Math.abs(number));
}

function randomOperation(){
    let minimum = +document.getElementById("campo1").value;
    let maximum = +document.getElementById("campo2").value;
    maximum = maximum +1;
    mostrarResultado(Math.floor(Math.random() * (maximum - minimum) + minimum));
}

function roundOperation(){
    let resultado = +document.getElementById("resultado").value;
    mostrarResultado(Math.round(resultado));
}

function roundCeil(){
    let resultado = +document.getElementById("resultado").value;
    mostrarResultado(Math.ceil(resultado));
}

function roundFloor(){
    let resultado = +document.getElementById("resultado").value;
    mostrarResultado(Math.floor(resultado));
}