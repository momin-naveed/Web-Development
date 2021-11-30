function isLeap(year) {
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                return "Leap Year";
            } else {
                return "Not A Leap Year";
            }
        } else {
            return "A Leap Year";
        }
    }
    else {
        return "Not leap year";
    }
}
console.log(isLeap(2001))

var guestList = ["Momin", "Saim", "Adeel", "Wahab"]
console.log(guestList.length);
console.log(guestList[0]);
var guestName = prompt("What is your name?")
if (guestList.includes(guestName)) {
    alert("Welcome!")
}
else {
    alert("Sorry, may be next time.")
}