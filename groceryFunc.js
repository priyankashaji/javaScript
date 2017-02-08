var grocery = [];
item1={
  itemName : "apple",
  price : 1.00
};
item2= {
  itemName : "orange",
  price: 2.00
};
item3 = {
  itemName : "carrot",
  price: 3.00
};
grocery.push(item1);
grocery.push(item2);
grocery.push(item3);

var total=0;
grocery.forEach(function(item){
 console.log(item.itemName+" price is "+item.price.toFixed(2));

});
grocery.forEach(function(item){
  total=total+item.price;
});

console.log("total price is "+total.toFixed(2));
