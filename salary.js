basicSalary = prompt("Enter your basic salary: ");
benefits = prompt("Enter your benefits: ");






function calculateNetSalary(basicSalary, benefits) {
    let grossSalary = (basicSalary) + (benefits);
    console.log("Gross Salary: " + grossSalary);
    return grossSalary;

}

calculateGrossSalary(basicSalary, benefits);
   
