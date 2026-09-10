function multiplicar() {
    //Obtain the number that the user passed, and change it to a Number type
    let numeroUsuario = document.getElementById("textoTabla").value;
    let numeroTabla = Number(numeroUsuario);

    //Obtain the table element from the HTML document
    let elementoTablaMultiplicar = document.getElementById("listaTabla")

    //Generate the multiply table and show to the user
    for (let x = 1; x <= 10; x++) {
        //Calculate the number for each iteration
        let numeroResultado = numeroTabla * x;

        //Create the string with the result
        let textoResultado = `${numeroTabla} por ${x} es igual a: ${numeroResultado}`;

        //Create a list element
        /*Note: First we need to create a list element, since we only initialized an 
          unordered list in the HTML, because we didn't knew how many elements would 
          be in the list. Tomorrow maybe we want the loop to go through 15 elements
          instead of 10. 
          So to stay dynamic, we only initialized the 'ul', so we need to create the list 
          item with 'createElement. Now that it has been created, we can modify its 
          text, and then append into the 'ul'. So the flow is:
          create 'il' element -> modify its content -> append to the 'ul'*/
        let itemLista = document.createElement("li");
        itemLista.innerText = textoResultado;
        elementoTablaMultiplicar.appendChild(itemLista);
    }

}