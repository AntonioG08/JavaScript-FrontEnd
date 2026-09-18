
let listadoMaterias = ["Historia", "Ciencias", "Español", "Matemáticas", "Biología", "Geografía"];
let listadoCalificaciones = [9, 10, 7, 8, 4, 9];
let totalMaterias = listadoMaterias.length

//Function used to display to the user, a list of their current subjects along with their grades
function mostrarListado() {
    //Variables needed for this function
    let listaDesordenda = document.getElementById("textoListadoCalificaciones");

    //Clean always the UL, in case the code has been executed more than 1 time
    listaDesordenda.innerHTML = "";

    //Begin with the main loop. We will iterate over the list, with an index to get 
    //The elements in that position
    for (let x = 0; x < totalMaterias; x++) {
        //Create the list item
        let itemLista = document.createElement("li");

        //Prepare the text dynamically by taking the subject name and calification
        itemLista.innerText = `Calificación de ${listadoMaterias[x]}: ${listadoCalificaciones[x]}`;

        //Append the new List Item
        listaDesordenda.appendChild(itemLista);
    };
};

//Function used to calculate the average of the student based on the current obtained gradess
function mostrarPromedio() {
    //Variables needed for this function
    let elementoTextoPromedio = document.getElementById("textoPromedio");
    let sumaCalificaciones = 0;

    //Open the for cycle, to sum all the grades, needed for the average
    for (let x of listadoCalificaciones) {
        //Sum the grade, and at the end perform the average calc
        sumaCalificaciones = sumaCalificaciones + x;
    };

    //Display the text to the user
    elementoTextoPromedio.textContent = `El promedio total es: ${sumaCalificaciones / totalMaterias}`
};

//Function used to find the highest grade obtained by a student and display it
function mostrarNotaAlta() {
    //Variables needed for this function
    let elementoNotaAlta = document.getElementById("textoNotaAlta");
    let x = 0
    let notaMasAlta = 0

    //Begin with the Loop (the teacher promped to use "While" for this function)
    while (x < totalMaterias) {
        if (listadoCalificaciones[x] > notaMasAlta) {
            notaMasAlta = listadoCalificaciones[x];
        };
        x++;
    };

    //Display the text to the user
    elementoNotaAlta.textContent = `La nota mas alta encontrada fue: ${notaMasAlta}`;
}

//Function used to search through the grades, to see if the student failed a subject
function mostrarReprobados() {
    //Variables needed for this function
    let elementoReprobado = document.getElementById("textoReprobado");
    let x = 0;

    //Main loop that will search until finding THE FIRST failed subject
    do {
        if (listadoCalificaciones[x] < 6) {
            elementoReprobado.textContent = "Lamentamos informarle que SI hay una materia reprobada";
            return;
        };
        x++;
    } while (x < totalMaterias);

    //IF no subject was failed, send a congratulations message
    elementoReprobado.textContent = "¡Felicidades! No hubo ninguna materia reprobada";
}