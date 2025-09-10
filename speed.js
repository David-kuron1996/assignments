let speed = (prompt("Enter your speed: "));

checkSpeed(speed);

function checkSpeed(speed) {
    if (speed <= 70) {
        return "Ok";
    } else {
        let demeritPoints = Math.floor((speed - 70) / 5);
        if (demeritPoints >= 12) {
            return "License suspended";
        } else {
            return "Demerit points: " + demeritPoints;
        }
    }
}
