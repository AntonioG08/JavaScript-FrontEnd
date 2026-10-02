
//The object constructor
function Vehicle(brand, model, color, year, owner) {
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.year = year;
    this.owner = owner;
}

//Create 3 instances easily by using the constructor
let car1 = new Vehicle("Nissan", "Skyline", "Blue", 2015, "Antonio");
let car2 = new Vehicle("Mazda", "Model 6", "Red", 2020, "Pedro");
let car3 = new Vehicle("Bmw", "Model 5", "Grey", 2026, "Luis");

//Initialize an empty list for saving all the objects that will be created
let allMyVehicles = [];

//Append the new intances into the list
allMyVehicles.push(car1);
allMyVehicles.push(car2);
allMyVehicles.push(car3);

//Prototype function inherited to all the previous and new objects.
//It helps to update the owner record
Vehicle.prototype.sellCar = function (newOwner) {
    this.owner = newOwner;
};

//Protoype function used to return the information of the car object
Vehicle.prototype.seeCar = function () {
    const text = `${this.brand} ${this.model} - ${this.year} - ${this.owner}`;
    return text;
};

//Prototype function used to alert the user that the car is on and moving
Vehicle.prototype.runCar = function () {
    alert("The car is running.");
}

//Function used to iterate over all the object and show the information per object
function showCars() {
    //Obtain the UL HTML element, and clean it in case the function has been run before.
    //this gives idempotency, as clicking the button more than 1 time will not keep appending
    //the same information again and again.
    documentSection = document.getElementById("carList");
    documentSection.textContent = "";

    for (const x of allMyVehicles) {
        //Initialize the list item
        let newItem = document.createElement("li");

        //Add the text into the LI element
        newItem.textContent = x.seeCar();

        //Append to the HTML body
        documentSection.appendChild(newItem);
    }
}

//Function used to clear the page if needed
function clearHtml() {
    documentSection = document.getElementById("carList");
    documentSection.textContent = "";
}