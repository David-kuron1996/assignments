let speed = (prompt("Enter your speed: "));

checkSpeed(speed);

function checkSpeed(speed) {
    if (speed <= 70) {
        console.log("Ok");
    } else {
        let demeritPoints = Math.floor((speed - 70) / 5);
        if (demeritPoints >= 12) {
            console.log("License suspended");
        } else {
            console.log("Demerit points: " + demeritPoints);
        }
    }
}
