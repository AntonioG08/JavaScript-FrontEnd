//Function used to dynamically generate the form for all the available stores
function createStoreParagraph(labelText, minValue) {
    //Initialize the paragraph and label elements
    let paragraphElement = document.createElement("p");
    let labelElement = document.createElement("label");

    //Connect the label with the input
    labelElement.setAttribute("for", labelText);
    labelElement.innerText = labelText + ": ";

    //Create the input element along with its attributes
    let inputElement = document.createElement("input");
    inputElement.setAttribute("type", "number");
    inputElement.setAttribute("id", labelText);
    inputElement.setAttribute("min", minValue);
    inputElement.setAttribute("value", 0);

    //Append the label and the input to the paragraph
    paragraphElement.appendChild(labelElement);
    paragraphElement.appendChild(inputElement);

    //Return the complete paragraph
    return paragraphElement
}

//Function used to help us create new stores dynamically
function createStores(containerID, min, numStores) {
    //Find the container of our HTML file by its ID
    let containerElement = document.getElementById(containerID);

    //Loop for creating as much stores as needed
    for (let storeCount = 1; storeCount <= numStores; storeCount++) {

        //Create the text of the label so we can call the function
        let labelText = "Tienda " + storeCount;

        //Create a store with the function 'createStoreParagraph
        let storeParagraph = createStoreParagraph(labelText, min);

        //Add the paragraph to the container
        containerElement.appendChild(storeParagraph);
    }
}

//Function used to obtain the numbers from the HTML document
function getNumberFromElement(element) {
    let myElement = element.value;
    let myNumber = Number(myElement);

    return myNumber
}

//Function used to get the total sum from a given array
function sumTotal(miArray) {
    let total = 0;

    for (let sale of miArray) {
        total = total + sale;
    };

    return total;
}

//Function used to get the maximum value of the array
function findHighestSale(miArray) {
    //Initialize with a first value to begin the comparison
    let maxNumber = miArray[0];

    //Loop for anlyzing all the elements of the array
    for (let sale of miArray) {
        if (sale > maxNumber) {
            maxNumber = sale;
        };
    };

    //Return the information back to the caller
    return maxNumber;
}

//Function used to get the minimum value of the array
function findLowestSale(miArray) {
    //Initialize with a first value to begin the comparison
    let maxNumber = miArray[0];

    //Loop for anlyzing all the elements of the array
    for (let sale of miArray) {
        if (sale < maxNumber) {
            maxNumber = sale;
        };
    };

    //Return the information back to the caller
    return maxNumber;
}

//Function used to perform the main calculations of this system
function calculate() {
    //Initialize the variables we will be needing
    let sales = [];
    let salesPosition = 0;
    let salesElements = document.getElementById("storeItems");

    //Initialize a loop looking for the children of the div (container)
    //The children is the paragraph "p" elements, which also contain label + input
    for (let item of salesElements.children) {
        //The label is the element 0, while the input is the element 1. 
        //See the saved image for further references
        let saleValue = getNumberFromElement(item.children[1]);

        //Assign the obtained value to our list, and increment the index accordingly
        sales[salesPosition] = saleValue;
        salesPosition++;
    }

    //Perform the calculations for the user
    let totalSales = sumTotal(sales);
    let highestSale = findHighestSale(sales);
    let lowestSale = findLowestSale(sales);

    //Display the messages to the user
    let outputMessage = "Total Ventas: " + totalSales + " | Venta Mayor: " + highestSale + " | Venta Menor: " + lowestSale;
    let outputElement = document.getElementById("outputParagraph");

    outputElement.textContent = outputMessage;
}
