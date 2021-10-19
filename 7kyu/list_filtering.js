/*
In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

*/

function filter_list(l) {

	//an array to store the numbers
	var array = Array();
	//iterate over the array
	for (var i = 0; i < l.length; i++) {
		//if current number is equal to typeOf number
		if(typeof l[i] ==  "number"){
			//push it into the array
			array.push(l[i]);
		}
	}
	//return the new array 
	return array;
}

//we can use filter!
function filter_list(l) {
	return l.filter((num) => typeof num == 'number');
}

console.log(filter_list([1,2,'a','b']),[1,2]);
console.log(filter_list([1,'a','b',0,15]),[1,0,15]);
console.log(filter_list([1,2,'aasf','1','123',123]),[1,2,123]);