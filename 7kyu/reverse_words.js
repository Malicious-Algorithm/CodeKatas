/*
Complete the function that accepts a string parameter, and reverses each word in the string. 
All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"

*/


function reverseWords(str) {
  //a place to store the new string
  let newString = '';
  //a place to store if we are over a word
  let secondString = '';

  //iterate over the array
  for(var i = 0 ;i < str.length; i++){
  	const index = arr[i];
  	if(index !== ''){
  		newString = index + newString;
  	}else{
  		newString += index
  	}
  	
  }

  //return that string
  return newString.join("")
}

console.log(reverseWords('The quick brown fox jumps over the lazy dog.'), 'ehT kciuq nworb xof spmuj revo eht yzal .god');

console.log(reverseWords('apple'), 'elppa');
console.log(reverseWords('a b c d'), 'a b c d');
console.log(reverseWords('double  spaced  words'), 'elbuod  decaps  sdrow');


function wordsReverser(string){
    var arr = string.split("");
    var output = [];
    for(var i = arr.length - 1;  i >= 0; i--){
        output.push(arr[i]);
    }
  return output.join("");
}
    console.log(wordsReverser("Kodlogs is doing great"));