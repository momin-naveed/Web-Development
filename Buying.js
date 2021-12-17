function whosPaying(names) {
    var numberOfPeople = names.length;
    var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
    var randomPerson = names[randomPersonPosition];
    return randomPerson + " is going to lunch today!"
}
console.log(whosPaying(["Momin", "Imran", "Saim", "Zohaib", "Wahab"]));

