var number = prompt("Please enter a number between 1 and 10", "");
var random_number = Math.floor((Math.random() * 10) + 1);

if (number >= 1 && number <= 10) {
  if (random_number == number){
    console.log("System generated random number " + random_number + " is matching with your number " + number);
  } else {
    console.log("System generated random number " + random_number + " is not matching with your number " + number);
  }
} else {
  console.log("The number you entered, " + number + " is not a number between 1 and 10");
}
