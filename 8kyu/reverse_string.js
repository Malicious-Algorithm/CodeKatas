/*
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'

*/

function solution(str){
  //a place to store the new string
  let newString = "";
  //if str is empty then return empty string?
  if(str == ""){
  	return "";
  }
	
	  //iterate over the array backwards
	  for(var i= str.length - 1;i >= 0;i--){ 
	  	let letter = str[i];
	  	newString += letter;
	  	//shift the first letter with the last one
	  	
	  	//append the letter to the new string
	  	
	  	//return the new string
   }
   return newString;
}

//built-in functions
function solution(str){
  return str.split('').reverse().join('');
}


console.log(solution('world'), 'dlrow');
console.log(solution('hello'), 'olleh');
console.log(solution(''), '');
console.log(solution('h'), 'h');