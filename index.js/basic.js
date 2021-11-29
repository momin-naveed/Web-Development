alert(prompt("Compose your tweet:").slice(0, 140));
// var tweetCount = tweet.length;
// alert("you have written "+ tweetCount + " characters, you have " + (140 - tweetCount) + " characters remaining.")

// var name = "Momin";
// name.slice(2,5);

// var dogAge = prompt("What is your dogAge")
// var humanAge = ((dogAge - 2) * 4) + 21;
// alert("Your dog is " + humanAge + " years old in human years.");
function getMilk(money, costPerBottle) {
    console.log("buy " + calcBottles(money, 2) + " bottles of milk");
    return money % 2;
}
function calcBottles(startingMoney, costPerBottle) {
    var numberOfBottles = Math.floor(startingMoney / costPerBottle);
    return numberOfBottles;
}
function calcChange(startingAmount, costPerBottle) {
    var change = startingAmount % costPerBottle;
    return change;
}
console.log("Hello master, here is your " + getMilk(10, 2) + " change.");