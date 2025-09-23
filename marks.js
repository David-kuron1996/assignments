let Marks = (prompt("Enter your marks: ")); // it is the input where user to enter their marks



getGrade(Marks); //this to call the grade function

function getGrade(Marks) {        
    if (Marks > 79 && Marks <= 100) { //to check if the marks is from 80 to 100(grade=A)
    return grade="A";
    } else if (Marks >= 60 && Marks <= 79) { //to check if the marks is from 60 to 79(grade=B)
        return grade="B";
    } else if (Marks >= 49 && Marks <= 59) { //to check if the marks is from 49 to 59(grade=C)
        return grade="C";
    } else if (Marks >= 40 && Marks <= 49) { //to check if the marks is from 40 to 49(grade=D)
        return grade="D";
    } else if (Marks >= 0 && Marks <= 39) { //to check if the marks is from 0 to 39 (grade=E)
        return grade="E";
    } else {
        return "Invalid marks"; //to return invalid marks if the marks exceed or more than 100
    }
}


