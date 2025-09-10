let Marks = (prompt("Enter your marks: "));



getGrade(Marks);

function getGrade(Marks) {
    if (Marks > 79 && Marks <= 100) {
        return grade="A";
    } else if (Marks >= 60 && Marks <= 79) {
        return grade="B";
    } else if (Marks >= 49 && Marks <= 59) {
        return grade="C";
    } else if (Marks >= 40 && Marks <= 49) {
        return grade="D";
    } else if (Marks >= 0 && Marks <= 39) {
        return grade="E";
    } else {
        return "Invalid marks";
    }
}


