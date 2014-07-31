//function that multiples to values together
var area=function(length,width){
  return length * width
}
area(8,8)

//if else statement with a function about going to mcdonalds
var mcTrips = function(trips){
  if(trips>4){
    return "Not so healthy"
  }
else{
  return "You still probably shouldnt go there"
}
}

mcTrips(6)

//shows global and local scope
var myweight= 180

var fattify=function(weight){
  var myweight= weight*5;
  console.log(myweight);
}
fattify(180)

console.log(myweight)
