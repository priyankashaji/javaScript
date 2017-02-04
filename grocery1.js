var grocery = [["apple",1],["orange",2],["carrot",3]];
var size = grocery.length;
var total=0;
for(i=0;i<size;i++)
  {
    var item = grocery[i];
    console.log(item[0]+" price is "+item[1])
    total=total+ item[1];
  }
console.log("total price is "+total)
