//Initialize an empty list of "empleados"
let employees = [];


//Create an object constructor for our employees
function Employee(id, name, lastName, dob, position) {
    //Initialize the properties
    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.dob = dob;
    this.position = position;
}

//Function used to create an instance of a new employee when the user calls it
function addEmployee() {
    let id = document.getElementById("txtId").value;
    let name = document.getElementById("txtName").value;
    let lastName = document.getElementById("txtLastName").value;
    let dob = document.getElementById("txtDob").value;
    let position = document.getElementById("txtPosition").value;

    //Create a new instance of employee and append it to the list
    let employee = new Employee(id, name, lastName, dob, position);
    employees.push(employee);

    //Show to the user that the employee has been added, and clear the fields for 
    //a possible next call
    alert("Empleado ha sido agregado al sistema");
    clearFields();
}

function showEmployees() {
    let employeeList = '';
    for (let employee of employees) {
        for (let property in employee) {
            employeeList = employeeList + property.toUpperCase() + ": " + employee[property] + ", "
            console.log(property.toUpperCase() + ": " + employee[property]);
        }
        employeeList = employeeList + "\n";
    }
    alert(employeeList);
}

function clearFields() {
    document.getElementById("txtId").value = "";
    document.getElementById("txtName").value = "";
    document.getElementById("txtLastName").value = "";
    document.getElementById("txtDob").value = "";
    document.getElementById("txtPosition").value = "";
}

