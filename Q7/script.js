//ForEach
var sum = 0;
var numbers = [65, 44, 12, 4];
console.log("total value of sum initially: " + sum);
numbers.forEach(myFunction);
function myFunction(item) {
  sum += item;   //indexOf
  console.log(
    "adding item " +
      numbers.indexOf(item) +     
      " of array i.e. " +
      item +
      " makes total of : " +
      sum
  ); 
}

//isArray

console.log(Array.isArray(numbers));

//join

console.log(numbers.join());

///keys


var ky = numbers.keys();
console.log(ky);