/*
Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
You can assume that all values are integers. Do not mutate the input array/list.
*/

function invert(array) {
	//a place to store the new array
	let a = Array();
	if(array[0] == 0){//works, but not sure about this
		return [0];
	}else{
		//iterate over the array
		for (var i = 0; i < array.length; i++) {
			//multiply each number by -1
			let c = (array[i]*-1);
			//push the numbers inside the new array
			a.push(c);
		}
	}
	//return the new array
	return a;
}


//let's use the map() function !
function invert(array) {

	var s = array.map((values) =>{
		if(array[0] == 0){
			 return 0 + values * -1; //hmm better way?
		}else{
			return values * - 1 
		}
	});
	return s;
}
console.log(invert([1,2,3,4,5]), [-1,-2,-3,-4,-5]);
console.log(invert([1,-2,3,-4,5]), [-1,2,-3,4,-5]);
console.log(invert([]), []);
console.log(invert([0,2,4,-1]), [0]);
console.log(invert([0]), [0]);