function calculate() {
    let answerElement1 = document.getElementById("answer1");
    let answerElement2 = document.getElementById("answer2");
    let answerElement3 = document.getElementById("answer3");

    let age = document.getElementById("ageText").value;

    //Evaluate if the age of the person is greater than 18
    let canDrink = age >= 18;
    if (canDrink) {
        answerElement1.textContent = "Puede beber alcohol!";
    } else {
        answerElement1.textContent = "Aun no puede beber, lo sentimos";
    }

    //Evaluate if the person is allowed to ENTER the party or not
    let canEnter = age >= 18 && age <= 30;
    if (canEnter) {
        answerElement2.textContent = "Puede ingresar a la fiesta!";
    } else {
        answerElement2.textContent = "Lo sentimos, no puede ingresar a la fiesta";
    }

    //Evaluate if the person gets a free entry (no cover)
    let freeEntry = age == 20 || age == 25;
    if (freeEntry) {
        answerElement3.textContent = "Felicidades, tiene entrada gratis!";
    } else {
        answerElement3.textContent = "Puede ingresar, pero deberá pagar su entrada";
    }
}