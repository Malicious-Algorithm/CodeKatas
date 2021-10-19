/*
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

*/

function grow(x){
	//a place to store the number
	let sum = 1;
	//iterate over the array
	for (var i = 0; i < x.length; i++) {
		//multiply each number by index
	 	sum = sum * x[i];
	 } 

	//return the number
	return sum;
}

//we can use reduce here
function grow(x){

	var sum = x.reduce((index,number) =>{
		return index*number;
	});

	return sum;
}

console.log(grow([1, 2, 3]), 6);
console.log(grow([4, 1, 1, 1, 4]), 16);
console.log(grow([2, 2, 2, 2, 2, 2]), 64);
console.log(grow([1, 2, 3, 4]),24);
