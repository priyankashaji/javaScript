var temp = prompt("Is your current temp in Celsius orFahrenheit?");
if(temp==="Celsius")
  {
    var degree = prompt("Enter the temperature");
   var converted_temp = (degree * 1.8) +32;

console.log("Temperature in Celsius is "+ converted_temp);
  }
else
  {
    var degree = prompt("Enter the temperature");
    var converted_temp = (degree - 32) / 1.8;

console.log("Temperature in Fahrenheit is "+ converted_temp);
  }
