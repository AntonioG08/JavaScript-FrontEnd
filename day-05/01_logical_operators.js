function calcular() {
    let elementoRespuesta1 = document.getElementById("respuesta1");
    let elementoRespuesta2 = document.getElementById("respuesta2");
    let elementoRespuesta3 = document.getElementById("respuesta3");

    let edad = document.getElementById("textoEdad").value;

    //Evaluate if the age of the person is greater than 18
    let puedeBeber = edad >= 18;
    if (puedeBeber) {
        elementoRespuesta1.textContent = "Puede beber alcohol!";
    } else {
        elementoRespuesta1.textContent = "Aun no puede beber, lo sentimos";
    }

    //Evaluate if the person is allowed to ENTER the party or not
    let puedeIngresar = edad >= 18 && edad <= 30;
    if (puedeIngresar) {
        elementoRespuesta2.textContent = "Puede ingresar a la fiesta!";
    } else {
        elementoRespuesta2.textContent = "Lo sentimos, no puede ingresar a la fiesta";
    }

    //Evaluate if the person gets a free entry (no cover)
    let entradaGratis = edad == 20 || edad == 25;
    if (entradaGratis) {
        elementoRespuesta3.textContent = "Felicidades, tiene entrada gratis!";
    } else {
        elementoRespuesta3.textContent = "Puede ingresar, pero deberá pagar su entrada";
    }
}