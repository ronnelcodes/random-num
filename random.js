var input = prompt("Please type a number");
var trueNum = parseInt(input);
var randomNum = Math.floor(Math.random() * trueNum) + 1;
document.write("You're lucky number is " + randomNum);
