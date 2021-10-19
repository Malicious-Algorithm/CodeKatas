/*
It's pretty straightforward. 
 Your goal is to create a function that removes the first and last characters of a string. 
 You're given one parameter, the original string. 
 You don't have to worry with strings with less than two characters.
*/

function removeChar(str){
 //a place to store the string
 let newString = "";
 //iterate over the array starting from 1 til -1
 	for (var i = 1; i < str.length - 1; i++) {
 		let oldString = str[i];
 		//append the letters to the new string
 		newString += oldString;
 	}
 	//retun the string
 	return newString;
}

function removeChar(str){
 //You got this!
return str.slice(1, -1)
};

//.slice(1) will remove first character of string, and .slice(-1) will remove
//last character of string

console.log(removeChar('eloquent'), 'loquen');
console.log(removeChar('country'), 'ountr');
console.log(removeChar('person'), 'erso');
console.log(removeChar('place'), 'lac');
console.log(removeChar('fer'), 'e');