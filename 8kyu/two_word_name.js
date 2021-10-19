/*
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

Patrick Feeney => P.F
*/


function abbrevName(name){
	//a place to store the first capital letter founded
	let first = name[0]; //S
	//a place to store the second capital letter founded
	let second = "";
	//iterate over the array
	for (var i = 1; i < name.length; i++) {
	  
		//store the first letter after the space 
			if(name[i] == " "){
				second = name[i+1];
			}
	}

	//return the first letter + . + second letter to UpperCase
	return (first + "." + second).toUpperCase(); 
			
}
	

console.log(abbrevName("Sam Harris"), "S.H");
console.log(abbrevName("Patrick Feenan"), "P.F");
console.log(abbrevName("Evan Cole"), "E.C");
console.log(abbrevName("P Favuzzi"), "P.F");
console.log(abbrevName("David Mendieta"), "D.M");
console.log(abbrevName("john smith"), "J.S");

