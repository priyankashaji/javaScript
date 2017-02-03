var event = prompt("What event casual, semi-formal, or formal?");
var temperature = prompt("what temperature?")
var attireSuggestion = "";
var coatSuggestion ="";

if (event === "casual") {
  attireSuggestion = "something comfy";
} else if (event === "semi-formal"){
  attireSuggestion= "a polo or";
} else if (event === "formal") {
  attireSuggestion = "a suit";
} else {
  var event = prompt("Please enter either casual, semi-formal or formal and check typing.");
}

if (temperature < 54){
  coatSuggestion = "a coat";
} else if (temperature > 54 && temperature < 70) {
  coatSuggestion = "a jacket";
} else if (temperature > 70){
  coatSuggestion = "no jacket";
}else{
  var temperature = prompt("Please enter a degree value.")
}

console.log("You should wear " + attireSuggestion + " with " + coatSuggestion);
