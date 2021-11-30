// you can use + in front of a string to covert it into a number
console.log(typeof + "5")
// + in front of data object will convert it into number of milliseconds
console.log(+new Date())
// | 0 after a floating point number will convert in into a integer
console.log(35.354 | 0)
// use es6 to remove duplicate from array
console.log([...new Set([1, 2, 2, 3, 4, 4, 5])])
let name = 'momin';
console.log(name);
let firstName = 'Momin';
let lastName = 'Naveed';
console.log(firstName, lastName);
// var n = Math.random();
// console.log(n);
//lovescore calculator
a = 2;
b = "a"
if (a == b) {
    console.log("Yes")
}
else {
    console.log("No")
}
prompt("What is your name?");
prompt("What is their name?");
var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;
if (loveScore > 70) {
    alert("Your love score is " + loveScore + "%" + ", you love each other too much")
}
if (loveScore > 30 && loveScore <= 70) {
    alert("Your love score is " + loveScore + "% too much")
}
else {
    alert("Your love score is " + loveScore + "%")
}