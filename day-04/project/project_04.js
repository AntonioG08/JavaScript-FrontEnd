function showResult(result){
    /*Note: Since the element in the DOM is of an 'input' type, instead of 
            using 'textContent' as we would normally do, we use just '.value'
            and assign a value to it.*/ 
    document.getElementById("result").value = result;
}

function sumOperation(){
    let number1 = +document.getElementById("field1").value;
    let number2 = +document.getElementById("field2").value;
    showResult(number1 + number2);
}

function subtractOperation(){
    let number1 = +document.getElementById("field1").value;
    let number2 = +document.getElementById("field2").value;
    showResult(number1 - number2);
}

function multiplyOperation(){
    let number1 = +document.getElementById("field1").value;
    let number2 = +document.getElementById("field2").value;
    showResult(number1 * number2);
}

function divideOperation(){
    let number1 = +document.getElementById("field1").value;
    let number2 = +document.getElementById("field2").value;
    showResult(number1 / number2);
}

function rootOperation(){
    let number = +document.getElementById("field2").value;
    showResult(Math.sqrt(number));
}

function powOperation(){
    let number1 = +document.getElementById("field1").value;
    let number2 = +document.getElementById("field2").value;
    showResult(Math.pow(number1, number2));
}

function absOperation(){
    let number = +document.getElementById("field2").value;
    showResult(Math.abs(number));
}

function randomOperation(){
    let minimum = +document.getElementById("field1").value;
    let maximum = +document.getElementById("field2").value;
    maximum = maximum +1;
    showResult(Math.floor(Math.random() * (maximum - minimum) + minimum));
}

function roundOperation(){
    let result = +document.getElementById("result").value;
    showResult(Math.round(result));
}

function roundCeil(){
    let result = +document.getElementById("result").value;
    showResult(Math.ceil(result));
}

function roundFloor(){
    let result = +document.getElementById("result").value;
    showResult(Math.floor(result));
}