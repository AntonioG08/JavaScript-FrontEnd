function getNumberFromElement(element) {
    let myElement = document.getElementById(element).value;
    let myNumber = Number(myElement);

    return myNumber
}

function calculate() {
    let sales1, sales2, sales3, sales4, sales5;

    sales1 = getNumberFromElement("storeSales1");
    sales2 = getNumberFromElement("storeSales2");
    sales3 = getNumberFromElement("storeSales3");
    sales4 = getNumberFromElement("storeSales4");
    sales5 = getNumberFromElement("storeSales5");

    let totalSales = sales1 + sales2 + sales3 + sales4 + sales5;

    let outputMessage = "Total Ventas: " + totalSales;
    let outputElement = document.getElementById("outputParagraph");

    outputElement.textContent = outputMessage;
}