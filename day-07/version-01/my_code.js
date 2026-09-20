function extraerNumeroDesdeElemento(elemento) {
    let miElemento = document.getElementById(elemento).value;
    let miNumero = Number(miElemento);

    return miNumero
}

function calcular() {
    let ventas1, ventas2, ventas3, ventas4, ventas5;

    ventas1 = extraerNumeroDesdeElemento("ventasTienda1");
    ventas2 = extraerNumeroDesdeElemento("ventasTienda2");
    ventas3 = extraerNumeroDesdeElemento("ventasTienda3");
    ventas4 = extraerNumeroDesdeElemento("ventasTienda4");
    ventas5 = extraerNumeroDesdeElemento("ventasTienda5");

    let totalVentas = ventas1 + ventas2 + ventas3 + ventas4 + ventas5;

    let mensajeSalida = "Total Ventas: " + totalVentas;
    let elementoSalida = document.getElementById("parrafoSalida");

    elementoSalida.textContent = mensajeSalida;
}