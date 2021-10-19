/*
I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.
*/

/*
function arrayPlusArray(arr1, arr2) {
	//a place to store the sum of arr2
	//a place to store the sum of arr1
	let sum1=0;
	let sum2=0;

	//iterate over the arr1
	for (var i = 0; i < arr1.length; i++) {
		//summ all the numbers
		//store them
		sum1 += arr1[i];
	}

	//iterate over the arr2
	for (var j = 0; j < arr2.length; j++) {
		//summ all the numbers
		//store them
		sum2 += arr2[j];
	}
	
	//return the sum of the 2 variables
  return sum1+sum2;
}
*/

//so, im not proud of my first solution, i had to use 2 for loops... 
//well maybe i can use the "vieja confiable" .reduce() function!
	//let's try it

let arrayPlusArray1 = (arr1, arr2) =>{
	let arrAll = Array();


	arrAll.push(arr1,arr2); // USE: arr1.concat(arr2)
// arr1.concat(arr2) // arr1.concat(arr2)


	//mmm well... my ugly code speaks for itself i guess.
	let v = arrAll[0].reduce((sum,value) =>{
		return sum+value;
	},0);

	let j = arrAll[1].reduce((sum,value) =>{
		return sum+value;
	},0);

	return v+j;
}

//let's use concat now that 
let arrayPlusArray = (arr1, arr2) =>{

	let c = arr1.concat(arr2);

	let v = c.reduce((sum,value) =>{
		return sum+value;
	});

	return v;
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]), 21);
console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]), -21);
console.log(arrayPlusArray([0, 0, 0], [4, 5, 6]), 15);
console.log(arrayPlusArray([100, 200, 300], [400, 500, 600]), 2100);