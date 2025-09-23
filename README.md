# This JavaScript code provides three main functionalities:

A grade calculator that converts numerical marks to letter grades

A net salary calculator that computes gross salary, deductions, and net salary

A speed checker that determines if a driver is within speed limits or should receive demerit points

## Features
## Grade Calculator
Converts numerical marks (0-100) to letter grades (A-E)

Handles invalid input (marks outside 0-100 range)

Simple user input prompt

## Salary Calculator
Calculates gross salary from basic salary and benefits
Computes PAYE (Pay As You Earn) tax at 2.75%
Computes NHIF (National Hospital Insurance Fund) at 8.25%
Displays gross salary, PAYE, NHIF, and net salary

## Speed Checker
Checks if a vehicle's speed is within the limit (70 km/h)
Calculates demerit points for speeds above the limit
Issues a license suspension warning if demerit points reach 12 or more

### Usage

### Grade Calculator:
Run the code and enter your marks when prompted
The function will return a letter grade (A-E) or "Invalid marks"

### Salary Calculator:
Enter your basic salary when prompted
Enter your benefits when prompted
The function will display gross salary, PAYE, NHIF, and net salary

### Speed Checker:
Enter your speed when prompted
The function will return "Ok" for speeds ≤70 km/h
For speeds >70 km/h, it will calculate demerit points or issue a license suspension


### Grade Calculator
let Marks = (prompt("Enter your marks: "));
getGrade(Marks);

function getGrade(Marks) {
    // getGrade login
}

// Salary Calculator
let basicsalary = (prompt("Enter your basic salary here"));
let benifits = (prompt("Enter your benifits here"));

function calculateNetSalary(basicsalary, benifits) {
    // Salary calculation logic
}

calculateNetSalary(basicsalary, benifits);

// Speed Checker
let speed = (prompt("Enter your speed: "));
checkSpeed(speed);

function checkSpeed(speed) {
    // Speed checking logic
}
