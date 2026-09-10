function recomendarPelicula(genero) {
    let edadCliente = document.getElementById("edadCliente").value;
    let recomendacion = document.getElementById("recomendacion")

    /*Switch cases to recommend a movie based on the selected genre, and
      then filtered by the age of the client*/
    switch (genero) {
        case ("drama"):
            if (edadCliente < 13) {
                recomendacion.textContent = "Casablanca";
            } else {
                if (edadCliente < 16) {
                    recomendacion.textContent = "The Shawshank Redemption";
                } else {
                    recomendacion.textContent = "Taxi Driver";
                }
            }
            break;
        case ("accion"):
            if (edadCliente < 13) {
                recomendacion.textContent = "Tadeo: El explorador perdido";
            } else {
                if (edadCliente < 16) {
                    recomendacion.textContent = "Transformers";
                } else {
                    recomendacion.textContent = "Terminator";
                }
            }
            break;
        case ("comedia"):
            if (edadCliente < 13) {
                recomendacion.textContent = "Rio";
            } else {
                if (edadCliente < 16) {
                    recomendacion.textContent = "Son como niños";
                } else {
                    recomendacion.textContent = "American pie";
                }
            }
            break;
        case ("ciencia ficcion"):
            if (edadCliente < 13) {
                recomendacion.textContent = "Back to the Future";
            } else {
                if (edadCliente < 16) {
                    recomendacion.textContent = "Star Wars";
                } else {
                    recomendacion.textContent = "Dune";
                }
            }
            break;
    }
}