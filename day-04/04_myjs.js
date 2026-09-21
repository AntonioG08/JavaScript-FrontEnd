function calculateLiters(){
    var kmElement = document.getElementById("kmText");
    var kmAmount = Number(kmElement.value);

    var litersAmount = Math.round(kmAmount/13.5);

    var result = document.getElementById("fuelText");
    result.textContent = "Deberías cargar " + litersAmount + " litros de gasolina."
}