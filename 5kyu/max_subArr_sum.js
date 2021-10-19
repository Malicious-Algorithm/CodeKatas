/*
The maximum sum subarray problem consists in finding the maximum
 sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
Easy case is when the list is made up of only positive numbers and 
the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. 
Note that the empty list or array is also a valid sublist/subarray.
*/

var maxSequence = function(arr){
  //a place to store the first indexNum of array given
  let first = arr[0];
  let num = 0;
  //iterate over the array
  for (var i = 1; i < arr.length - 1; i++){
  	//if current is > firstNumb
  	if (arr[i] > first) {
  	   //store firstNumb = [i];
  	  	first = i;
  	  	num = arr[i];
  	}
  }
  
  let arry = Array();
  console.log(arr[first]);

  for (var i = first; i < first + arr[first]; i++) {
  		arry.push(arr[i]);
  }
  console.log(arry)
  let sum = 0;

  for (var i = 0; i < arry.length; i++) {
  	sum += arry[i];
  }

  return sum;
}
console.log(maxSequence([]), 0);
// console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);