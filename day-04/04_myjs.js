function calcularLitros(){
    var elementoKm = document.getElementById("textoKm");
    var cantidadKm = Number(elementoKm.value);

    var cantidadLitros = Math.round(cantidadKm/13.5);

    var resultado = document.getElementById("textoCombustible");
    resultado.textContent = "Deberías cargar " + cantidadLitros + " litros de gasolina."
}