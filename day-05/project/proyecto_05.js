function recommendMovie(genre) {
    let clientAge = document.getElementById("clientAge").value;
    let recommendation = document.getElementById("recommendation")

    /*Switch cases to recommend a movie based on the selected genre, and
      then filtered by the age of the client*/
    switch (genre) {
        case ("drama"):
            if (clientAge < 13) {
                recommendation.textContent = "Casablanca";
            } else {
                if (clientAge < 16) {
                    recommendation.textContent = "The Shawshank Redemption";
                } else {
                    recommendation.textContent = "Taxi Driver";
                }
            }
            break;
        case ("accion"):
            if (clientAge < 13) {
                recommendation.textContent = "Tadeo: El explorador perdido";
            } else {
                if (clientAge < 16) {
                    recommendation.textContent = "Transformers";
                } else {
                    recommendation.textContent = "Terminator";
                }
            }
            break;
        case ("comedia"):
            if (clientAge < 13) {
                recommendation.textContent = "Rio";
            } else {
                if (clientAge < 16) {
                    recommendation.textContent = "Son como niños";
                } else {
                    recommendation.textContent = "American pie";
                }
            }
            break;
        case ("ciencia ficcion"):
            if (clientAge < 13) {
                recommendation.textContent = "Back to the Future";
            } else {
                if (clientAge < 16) {
                    recommendation.textContent = "Star Wars";
                } else {
                    recommendation.textContent = "Dune";
                }
            }
            break;
    }
}