/*
Sum all the numbers of the array (in F# and Haskell you get a list) except the highest and the lowest element (the value, not the index!).
(The highest/lowest element is respectively only one element at each edge, even if there are more than one with the same value!)

Example:

{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6

If array is empty, null or None, or if only 1 Element exists, return 0.

*/

function sumArray(array) {
	var menor = Math.min(...array);//esto esta muuy bueno! c'est trés bon! this is awsome !
	var mayor = Math.max(...array);
	let sum = 0;
	if(array.length == 1 || array == null){
		return 0;
	}else{
	
		for (var i = 0; i < array.length; i++) {
			if(array[i] == menor || array[i] == mayor){
				continue;
			}else{
				sum += array[i];
			}	
		}
	}
	return sum;
	
}



console.log(sumArray([ 6, 2, 1, 8, 10 ]), 16);
console.log(sumArray([ 1, 1, 1, 8, 10 ]), 16);
console.log(sumArray([]), 0);
console.log(sumArray([3,3,3,2,2,1]), 0);