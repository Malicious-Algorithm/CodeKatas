/*
Simple, given a string of words, 
return the length of the shortest word(s).

String will never be empty and you do not need 
to account for different data types.

*/

//kms picos 


function findShort(s){
  var arr = s.split(' ');
  var smallest = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if(arr[i].length < smallest.length){
      smallest = arr[i];
    }
  }
  return smallest.length;
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
console.log(findShort("turns out random test cases are easier than writing out basic ones"), 3); 
console.log(findShort("Let's travel abroad shall we"), 2);
