let speed = (prompt("Enter your speed: ")); // it is the input for the speed where the user will enter

checkSpeed(speed); // this method is use to call the checkspeed function 

function checkSpeed(speed) {
    if (speed <= 70) { // to check if the speed is less than or equal to 70
        return "Ok";
    } else {
        let demeritPoints = Math.floor((speed - 70) / 5); // this method is to round a number down to the nearest whole integer
        if (demeritPoints >= 12) { // to check if the demeritpoints is greater than or equal to 12 then it return "License suspended"
            return "License suspended";
        } else {
            return "Demerit points: " + demeritPoints; // this just to display points if it is more than 12 points
        }
    }
}
