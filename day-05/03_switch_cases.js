function consultarPrecio() {
    let elementoRespuesta = document.getElementById("textoPrecio");

    /*Obtain the number (index) of the fruit, from the client UI and 
      assemble the switch case */
    let fruta = document.getElementById("numeroFruta").value;
    switch (fruta) {
        case "1":
            elementoRespuesta.textContent = "$8.45";
            break;
        case "2":
            elementoRespuesta.textContent = "$1.3";
            break;
        case "3":
            elementoRespuesta.textContent = "$6.90";
            break;
        case "4":
            elementoRespuesta.textContent = "$4.30";
            break;
        case "5":
            elementoRespuesta.textContent = "$12.30";
            break;
    }

}