/*
Write a function that takes an array of numbers and returns the sum of the numbers. 
The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

Examples
Input: [1, 5.2, 4, 0, -1]
Output: 9.2

Input: []
Output: 0

Input: [-2.398]
Output: -2.398

Assumptions

You can assume that you are only given numbers.
You cannot assume the size of the array.
You can assume that you do get an array and if the array is empty, return 0.


What We're Testing

We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
Advanced users may find this extremely easy and can easily write this in one line.
*/

// Sum Numbers
function sum (numbers) {

	//if the given array is empty then
	if(numbers.length == 0){ 
		//return 0
		return 0;
	//else 
	}else{
		//a place to store the sum
		let sum = 0;
		//iterate over the array
		for (var i = 0; i < numbers.length; i++) {
			//sum all the numbers inside
			sum += numbers[i];
		}
		//return the sum
		return sum;
	}
};

//we can use a reduce function here
function sum (numbers) {

	var result = numbers.reduce((count,index) =>{
		return count+index;
	},0);

	return result;
};

//we can even shorten the previous function like this
function sum (numbers) {
	return numbers.reduce((count,index) => count+index,0);
};


console.log(sum([]), 0);
console.log(sum([1, 5.2, 4, 0, -1]), 9.2);