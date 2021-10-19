/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

function XO(str) {

	//a place to store the amount of x
	let xes = 0;
	//a place to store the amount of o
	let ohs = 0;
	//turn the string to lowerCase
	var newStr = str.toLowerCase()
	//iterate over the array
	for (var i = 0; i < newStr.length; i++) {
		//if current letter is an o
		if(newStr[i] == 'o'){
			//increment count of o
			ohs++;
		//else if current letter is x
		}else if(newStr[i] == 'x'){
			//increment count of x
			xes++;
		}else if(!newStr == 'x' && 'o'){
			return true;
		}
	}
	//return true or false if the count is equal 
	return ohs == xes ? true : false;
}

console.log(XO('xo'),true);
console.log(XO("xxOo"),true);
console.log(XO("xxxm"),false);
console.log(XO("Oo"),false);
console.log(XO("ooom"),false);
console.log(XO("zpzpzpp"),true);