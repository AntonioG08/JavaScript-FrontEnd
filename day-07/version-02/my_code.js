//Function used to obtain the numbers from the HTML document
function extraerNumeroDesdeElemento(elemento) {
    let miElemento = document.getElementById(elemento).value;
    let miNumero = Number(miElemento);

    return miNumero
}

//Function used to get the total sum from a given array
function sumarTotal(miArray) {
    let total = 0;

    for (let venta of miArray) {
        total = total + venta;
    };

    return total;
}

//Function used to get the maximum value of the array
function hallarMayorVenta(miArray) {
    //Initialize with a first value to begin the comparison
    let maximoNumero = miArray[0];

    //Loop for anlyzing all the elements of the array
    for (let venta of miArray) {
        if (venta > maximoNumero) {
            maximoNumero = venta;
        };
    };

    //Return the information back to the caller
    return maximoNumero;
}

//Function used to get the minimum value of the array
function hallarMenorVenta(miArray) {
    //Initialize with a first value to begin the comparison
    let maximoNumero = miArray[0];

    //Loop for anlyzing all the elements of the array
    for (let venta of miArray) {
        if (venta < maximoNumero) {
            maximoNumero = venta;
        };
    };

    //Return the information back to the caller
    return maximoNumero;
}

function calcular() {
    let ventas = [];

    ventas[0] = extraerNumeroDesdeElemento("ventasTienda1");
    ventas[1] = extraerNumeroDesdeElemento("ventasTienda2");
    ventas[2] = extraerNumeroDesdeElemento("ventasTienda3");
    ventas[3] = extraerNumeroDesdeElemento("ventasTienda4");
    ventas[4] = extraerNumeroDesdeElemento("ventasTienda5");

    let totalVentas = sumarTotal(ventas);
    let ventaMayor = hallarMayorVenta(ventas);
    let ventaMenor = hallarMenorVenta(ventas);

    let mensajeSalida = "Total Ventas: " + totalVentas + " / Venta Mayor: " + ventaMayor + " / Venta Menor: " + ventaMenor;
    let elementoSalida = document.getElementById("parrafoSalida");

    elementoSalida.textContent = mensajeSalida;
}