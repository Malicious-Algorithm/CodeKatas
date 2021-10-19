/*
Complete the solution so that it reverses all of the words within the string passed in.

Example:

"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

*/

function reverseWords(str){
	/*
	//a place to store the new String
	let newString = "";
	let newString1 = "";
	//iterate over the array backwards
	for (var i = str.length; i>=0; i--) {
		//store the word inside the new String
		if(!str[i] == ' '){
			newString += str[i];
		}

	}
	*/

	//well i really don't know how to solve it with "manually", 
		//so i used these functions
	return str.split(' ').reverse().join(' ');
 
}

console.log(reverseWords("hello world!"),"world! hello");

console.log(reverseWords("yoda doesn't speak like this"),"this like speak doesn't yoda")
console.log(reverseWords("foobar"),"foobar")
console.log(reverseWords("kata editor"),"editor kata")
console.log(reverseWords("row row row your boat"),"boat your row row row")
