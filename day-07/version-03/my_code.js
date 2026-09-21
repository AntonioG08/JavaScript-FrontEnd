//Function used to dynamically generate the form for all the available stores
function createStoreParagraph(labelText, minValue) {
    //Initialize the paragraph and label elements
    let paragraphElement = document.createElement("p");
    let labelElement = document.createElement("label");

    //Connect the label with the input
    labelElement.setAttribute("for", labelText);

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

//Function used to obtain the numbers from the HTML document
function getNumberFromElement(element) {
    let myElement = document.getElementById(element).value;
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

function calculate() {
    let sales = [];

    sales[0] = getNumberFromElement("storeSales1");
    sales[1] = getNumberFromElement("storeSales2");
    sales[2] = getNumberFromElement("storeSales3");
    sales[3] = getNumberFromElement("storeSales4");
    sales[4] = getNumberFromElement("storeSales5");

    let totalSales = sumTotal(sales);
    let highestSale = findHighestSale(sales);
    let lowestSale = findLowestSale(sales);

    let outputMessage = "Total Ventas: " + totalSales + " / Venta Mayor: " + highestSale + " / Venta Menor: " + lowestSale;
    let outputElement = document.getElementById("outputParagraph");

    outputElement.textContent = outputMessage;
}
