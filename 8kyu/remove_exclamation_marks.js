/*
Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
*/

function removeExclamationMarks(s) {
	//a place to store the new string
	let newString = '';
	//iterate over the array
	for (var i = 0; i < s.length; i++) {
		//if current word is not !
		if(s[i] != '!'){
			//append word
			newString += s[i];
		}
	}

	//return word
	return newString
}

console.log(removeExclamationMarks("Hello World!"), "Hello World");