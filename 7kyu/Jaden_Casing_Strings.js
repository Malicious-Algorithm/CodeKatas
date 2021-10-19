/*

Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid 
(2010) and After Earth (2013). Jaden is also known for some of his philosophy that 
he delivers via Twitter. When writing on Twitter, he is known for almost always 
capitalizing every word. For simplicity, you'll have to capitalize each word, 
check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. 
The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way 
he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"


*/
/*
String.prototype.toJadenCase = function () {
	//a place to store the string
	let newString = '';
	//split the string
	let string = str.split(' ');
	console.log(string)

	//iterate over the array
	for (var i = 1; i < string.length; i++) {
		let index = string[i]
		console.log(index)
		for (var j = 0; j < i; j++) {
			console.log(index[j])
			//if we're the first word of the index
			if(j==0){
		 		//turn it to uppercase
				//and push it to the newstring

		 		newString += index[i].toUpperCase();
				console.log(newString)
			}
			
		}
		newString += index[i]
		console.log(newString)
			
	}
	return newString;
};
*/
/*
String.prototype.toJadenCase = function () {

		//a place to store the string
	let newString = '';
	//split the string
	let string = str.split(' ');
	console.log(string)
	for (var i = 0; i < string.length; i++) {
		if(string[i] == ''){
			newString = string[i+1].toUpperCase();
		}
		newString += str[i];
		
	}
	return newString
}
*/
String.prototype.toJadenCase = function () {

		//a place to store the string
	let newString = '';
	let letter = true;
	//split the string
	for (var i = 0; i < str.length; i++) {
		console.log(str[i])
			if(str[i] == ' '){
				letter = true;
				newString += ' ';
			}else{
				if(letter){
					newString += str[i].toUpperCase();
					letter = false;
				}else{
					newString += str[i].toLowerCase();
				}
			}
	}
	return newString 
}
var str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase(),
 "How Can Mirrors Be Real If Our Eyes Aren't Real");
