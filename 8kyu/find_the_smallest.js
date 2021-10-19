/*
Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.
*/
/*
class SmallestIntegerFinder {
  findSmallestInt(args) {
    
  }
}
*/

function findSmallestInt(args) {
	//a place to store the first number of the given array
	let b = args[0];
	//iterate over the array
	for (var i=1; i < args.length; i++) {
		//if current number is less than next
			if(args[i]<b){
				//store the number
				b=args[i];
			}
	}
	//return that number
	return b;
}
	
console.log(findSmallestInt([78,56,232,12,8]),8);
console.log(findSmallestInt([78,56,232,12,18]),12);
console.log(findSmallestInt([78,56,232,412,228]),56);
console.log(findSmallestInt([78,56,232,12,0]),0,);
console.log(findSmallestInt([1,56,232,12,8]),1);