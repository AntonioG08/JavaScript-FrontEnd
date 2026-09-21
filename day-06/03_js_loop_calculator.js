function multiply() {
  //Obtain the number that the user passed, and change it to a Number type
  let userNumber = document.getElementById("tableText").value;
  let tableNumber = Number(userNumber);

  //Obtain the table element from the HTML document
  let multiplyTableElement = document.getElementById("tableList")

  /*Clear the 'ul' element, in case the function has been called previously.
    Please note that there is a difference between using "innerHTML" and 
    "innerText". The "innerHTMML" treats the input as HTML code, being a 
    potential threat as it could allow a XSS attack. Otherwise, "innerText"
    treats the input as plain harmless text. */
  multiplyTableElement.innerHTML = "";
  //multiplyTableElement.replaceChildren();

  //Generate the multiply table and show to the user
  for (let x = 1; x <= 10; x++) {
    //Calculate the number for each iteration
    let resultNumber = tableNumber * x;

    //Create the string with the result
    let resultText = `${tableNumber} por ${x} es igual a: ${resultNumber}`;

    //Create a list element
    /*Note: First we need to create a list element, since we only initialized an 
      unordered list in the HTML, because we didn't knew how many elements would 
      be in the list. Tomorrow maybe we want the loop to go through 15 elements
      instead of 10. 
      So to stay dynamic, we only initialized the 'ul', so we need to create the list 
      item with 'createElement. Now that it has been created, we can modify its 
      text, and then append into the 'ul'. So the flow is:
      create 'il' element -> modify its content -> append to the 'ul'*/
    let listItem = document.createElement("li");
    listItem.innerText = resultText;
    multiplyTableElement.appendChild(listItem);
  }

}