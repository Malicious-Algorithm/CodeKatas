/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
Implement a function that determines whether a string that contains only letters is an isogram.
Assume the empty string is an isogram. Ignore letter case.

isIsogram("Dermatoglyphics") == true
isIsogram("aba") == false
isIsogram("moOse") == false // -- ignore letter case
*/

function isIsogram(str){
	//str.to lowercase
	var h = str.toLowerCase();
	let obj = {};
	if(str.length == 0){
		return true
	}
	//iterate over the array
	for (var i = 0; i < h.length; i++) {
		if(!obj[h[i]]){
			obj[h[i]] = 1;
		}else{
			return false
		}
	}
	return true;

}

console.log(isIsogram("Dermatoglyphics"), true);
console.log(isIsogram("isogram"), true);
console.log(isIsogram("aba"), false);
console.log(isIsogram("moOse"), false);
console.log(isIsogram("isIsogram"), false);
console.log(isIsogram(""), true);
