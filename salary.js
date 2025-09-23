let basicsalary = (prompt("Enter your basic salary here")); // this prompt input is use for entering basic salary by user
let benifits = (prompt("Enter your benifits here")); // this prompt input is use for entering benifits by user

function calculateNetSalary(basicsalary, benifits) { // this function use for calculate basicsalary and benifits
    const grossSalary = basicsalary + benifits;  // this show the formular for grossSalary or calculation for grossSalry

    const paye = 0.0275   //it is the value of Paye
    const NHIF = 0.0825   //it is the value of NHIF
    

    const Netsalary = grossSalary - ( 0.0275 + 0.0825); // this formular is use for calculating Netsalary

    console.log("Gross Salary:" , grossSalary);  //this print the result of grossSalary
    console.log ("PAYE:" , paye);     //this print the result of Paye
    console.log ("NHIF:" , NHIF)      //this print the result of NHIF
    console.log ("Net Salary:", Netsalary)  //this print the result of Netsalary

    

}
calculateNetSalary(basicsalary, benifits)  //this method is to call the function of calculating Netsalary










