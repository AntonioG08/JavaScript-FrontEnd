
let subjectsList = ["Historia", "Ciencias", "Español", "Matemáticas", "Biología", "Geografía"];
let gradesList = [9, 10, 7, 8, 4, 9];
let totalSubjects = subjectsList.length

//Function used to display to the user, a list of their current subjects along with their grades
function showList() {
    //Variables needed for this function
    let unorderedList = document.getElementById("gradesListText");

    //Clean always the UL, in case the code has been executed more than 1 time
    unorderedList.innerHTML = "";

    //Begin with the main loop. We will iterate over the list, with an index to get 
    //The elements in that position
    for (let x = 0; x < totalSubjects; x++) {
        //Create the list item
        let listItem = document.createElement("li");

        //Prepare the text dynamically by taking the subject name and calification
        listItem.innerText = `Calificación de ${subjectsList[x]}: ${gradesList[x]}`;

        //Append the new List Item
        unorderedList.appendChild(listItem);
    };
};

//Function used to calculate the average of the student based on the current obtained gradess
function showAverage() {
    //Variables needed for this function
    let averageTextElement = document.getElementById("averageText");
    let gradesSum = 0;

    //Open the for cycle, to sum all the grades, needed for the average
    for (let x of gradesList) {
        //Sum the grade, and at the end perform the average calc
        gradesSum = gradesSum + x;
    };

    //Display the text to the user
    averageTextElement.textContent = `El promedio total es: ${gradesSum / totalSubjects}`
};

//Function used to find the highest grade obtained by a student and display it
function showHighestGrade() {
    //Variables needed for this function
    let highestGradeElement = document.getElementById("highestGradeText");
    let x = 0
    let highestGrade = 0

    //Begin with the Loop (the teacher promped to use "While" for this function)
    while (x < totalSubjects) {
        if (gradesList[x] > highestGrade) {
            highestGrade = gradesList[x];
        };
        x++;
    };

    //Display the text to the user
    highestGradeElement.textContent = `La nota mas alta encontrada fue: ${highestGrade}`;
}

//Function used to search through the grades, to see if the student failed a subject
function showFailed() {
    //Variables needed for this function
    let failedElement = document.getElementById("failedText");
    let x = 0;

    //Main loop that will search until finding THE FIRST failed subject
    do {
        if (gradesList[x] < 6) {
            failedElement.textContent = "Lamentamos informarle que SI hay una materia reprobada";
            return;
        };
        x++;
    } while (x < totalSubjects);

    //IF no subject was failed, send a congratulations message
    failedElement.textContent = "¡Felicidades! No hubo ninguna materia reprobada";
}