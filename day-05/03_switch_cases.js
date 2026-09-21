function checkPrice() {
    let answerElement = document.getElementById("priceText");

    /*Obtain the number (index) of the fruit, from the client UI and 
      assemble the switch case */
    let fruit = document.getElementById("fruitNumber").value;
    switch (fruit) {
        case "1":
            answerElement.textContent = "$8.45";
            break;
        case "2":
            answerElement.textContent = "$1.3";
            break;
        case "3":
            answerElement.textContent = "$6.90";
            break;
        case "4":
            answerElement.textContent = "$4.30";
            break;
        case "5":
            answerElement.textContent = "$12.30";
            break;
    }

}