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
// isLeap(2000);
console.log(isLeap(2001))