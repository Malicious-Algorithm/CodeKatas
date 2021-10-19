/*
Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]

For the beginner, try to use the map method - it comes in very handy quite a lot so is a good one to know.

*/

function maps(x){
	//a place to store the doubled numbers
	let a = Array();
	//iterate over the array
	for (var i = 0; i < x.length; i++) {
		//multiply each number
		let v = x[i]*2;
		//push those numbers into the new array
		a.push(v);
		
	}

	//return the new array
	return a;
}

//now let's use the map function
function maps(x){

	//takes an argument and this function is called every time
	var v = x.map((num) =>{
		return num*2;
	});

	return v;
}

console.log(maps([1, 2, 3]), [2, 4, 6]);

console.log(maps([4, 1, 1, 1, 4]), [8, 2, 2, 2, 8]); 

console.log(maps([2, 2, 2, 2, 2, 2]), [4, 4, 4, 4, 4, 4]); 