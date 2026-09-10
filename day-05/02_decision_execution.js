function evaluarCompra() {
    let elementoRespuesta = document.getElementById("decision");

    let precio = document.getElementById("textoPrecio").value;

    if (precio > 0 && precio <= 5) {
        elementoRespuesta.textContent = "Comprar 2 cartones de leche";
    } else {
        if (precio <= 8) {
            elementoRespuesta.textContent = "Comprar SOLO 1 cartón de leche";
        } else {
            elementoRespuesta.textContent = "No compres cartones de leche";
        }
    }
}