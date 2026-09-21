function evaluatePurchase() {
    let answerElement = document.getElementById("decision");

    let price = document.getElementById("priceText").value;

    if (price > 0 && price <= 5) {
        answerElement.textContent = "Comprar 2 cartones de leche";
    } else {
        if (price <= 8) {
            answerElement.textContent = "Comprar SOLO 1 cartón de leche";
        } else {
            answerElement.textContent = "No compres cartones de leche";
        }
    }
}