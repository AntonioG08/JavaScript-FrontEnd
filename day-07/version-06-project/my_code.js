//Function used to dynamically generate the form for all the available stores
function crearParrafoTienda(textoLabel, valorMin) {
    //Initialize the paragraph and label elements
    let elementoParrafo = document.createElement("p");
    let elementoEtiqueta = document.createElement("label");

    //Connect the label with the input
    elementoEtiqueta.setAttribute("for", textoLabel);
    elementoEtiqueta.innerText = textoLabel + ": ";

    //Create the input element along with its attributes
    let elementoInput = document.createElement("input");
    elementoInput.setAttribute("type", "number");
    elementoInput.setAttribute("id", textoLabel);
    elementoInput.setAttribute("min", valorMin);
    elementoInput.setAttribute("value", 0);

    //Append the label and the input to the paragraph
    elementoParrafo.appendChild(elementoEtiqueta);
    elementoParrafo.appendChild(elementoInput);

    //Return the complete paragraph
    return elementoParrafo
}

//Function used to help us create new stores dynamically
function crearTiendas(contenedorID, min, numTiendas) {
    //Find the container of our HTML file by its ID
    let elementoContenedor = document.getElementById(contenedorID);

    //Loop for creating as much stores as needed
    for (let conteoTiendas = 1; conteoTiendas <= numTiendas; conteoTiendas++) {

        //Create the text of the label so we can call the function
        let textoEtiqueta = "Tienda " + conteoTiendas;

        //Create a store with the function 'crearParrafoTienda
        let parrafoTienda = crearParrafoTienda(textoEtiqueta, min);

        //Add the paragraph to the container
        elementoContenedor.appendChild(parrafoTienda);
    }
}

//Function used to obtain the numbers from the HTML document
function extraerNumeroDesdeElemento(elemento) {
    let miElemento = elemento.value;
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

//Function used to perform the main calculations of this system
function calcular() {
    //Initialize the variables we will be needing
    let ventas = [];
    let posicionVentas = 0;
    let elementosVentas = document.getElementById("itemsTiendas");

    //Initialize a loop looking for the children of the div (container)
    //The children is the paragraph "p" elements, which also contain label + input
    for (let item of elementosVentas.children) {
        //The label is the element 0, while the input is the element 1. 
        //See the saved image for further references
        let valorVenta = extraerNumeroDesdeElemento(item.children[1]);

        //Assign the obtained value to our list, and increment the index accordingly
        ventas[posicionVentas] = valorVenta;
        posicionVentas++;
    }

    //Perform the calculations for the user
    let totalVentas = sumarTotal(ventas);
    let ventaMayor = hallarMayorVenta(ventas);
    let ventaMenor = hallarMenorVenta(ventas);

    console.log(ventaMayor);
    console.log(ventaMenor);

    //Iterate searching for the highest and lowest selling values
    for (let item of elementosVentas.children) {
        let valorVenta = extraerNumeroDesdeElemento(item.children[1]);

        item.children[1].className = "menuNeutroTony";

        if (valorVenta == ventaMayor) {
            item.children[1].className = "menuInputMayor";
        }

        if (valorVenta == ventaMenor) {
            item.children[1].className = "menuInputMenor";
        }
    }

    //Display the messages to the user
    let mensajeSalida = "Total Ventas: " + totalVentas;
    let elementoSalida = document.getElementById("parrafoSalida");

    elementoSalida.textContent = mensajeSalida;
}
