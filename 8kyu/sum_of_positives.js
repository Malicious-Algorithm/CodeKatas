/*
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
*/

function positiveSum(arr) {
  //a place to store the sum
  let sum = 0;
  	//if the length of the array is grater than 0 then
  	if(arr.length > 0){
	  //iterate over the array
		for (var i = 0; i < arr.length; i++) {
			let index = arr[i];
			//if the current number(index) is less than 0 
			if(index < 0){
				//skip that number or "continue"
				continue;
				//and increment the index
				index++;
			}
			//else add the numbers to the sum
			sum += index;
		}
		//then return the sum of all numbers
		return sum;

		//else return 0
	}else
	  return 0;

}

function positiveSum(arr) {
  //a place to store the sum
  let sum = 0;
  	//if the length of the array is grater than 0 then
  	if(arr.length > 0){
	  //iterate over the array
		for (var i = 0; i < arr.length; i++) { //best practice -> always initialize i with var or let 
													//inside the for loop -> hoisting
			let index = arr[i];
		
			if(index > 0){
				
				sum += index;
			}
			
		}
		//then return the sum of all numbers
		return sum;

		//else return 0
	}else
	  return 0;

}



//now let's use the "reduce" function!
const arr = [1,2,3,4,5];
const arr2 =[1,-2,3,4,5];
const arr3 =[];
const arr4 = [-1,-2,-3,-4,-5];
const arr5 =[-1,2,3,4,-5];
 
  const result = arr5.reduce((accum,val) =>{	
  	//devuelve cada valor por cada iteración y lo guarda en accum
  		//si el val actual es < 0, then return el valor actual en el accum
  			//sino que lo sume y así...
  	//return (val < 0) ? val = accum : accum + val
  	if(val < 0){
  		return val = accum;
  	}else
  		return accum + val;
  }, 0);


console.log(result,9);



/*
console.log(positiveSum([1,2,3,4,5]),15);
console.log(positiveSum([1,-2,3,4,5]),13);
console.log(positiveSum([]),0);
console.log(positiveSum([-1,-2,-3,-4,-5]),0); 
console.log(positiveSum([-1,2,3,4,-5]),9); * 
*/