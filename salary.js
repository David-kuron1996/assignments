let basicsalary = (prompt("Enter your basic salary here"));
let benifits = (prompt("Enter your benifits here"));

function calculateNetSalary(basicsalary, benifits) {
    const grossSalary = basicsalary + benifits;

    const paye = 0.0275
    const NHIF = 0.0825
    

    const Netsalary = grossSalary - ( 0.0275 + 0.0825);

    return ("Gross Salary:" , grossSalary);
    return ("PAYE:" , paye);
    return ("NHIF:" , NHIF)
    return ("Net Salary:", Netsalary)

    

}
calculateNetSalary(basicsalary, benifits)










