/*
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined
*/

function countSheeps(arrayOfSheep) {
	//a place to store te count
	let count = 0;
	//iterate over the array
	for (var i = 0; i < arrayOfSheep.length; i++) {
		//if current item equals true
		if(arrayOfSheep[i] == true){
			//add to count
			count++;
		}else if(arrayOfSheep[i] == null){
			return null
		}
	}
	//return the count
	return count
}

var array1 = [true,  true,  true,  false,
              true,  true,  true,  true ,
              true,  false, true,  false,
              true,  false, false, true ,
              true,  true,  true,  true ,
              false, false, true,  true ];
              
console.log(countSheeps(array1)==17, "There are 17 sheeps in total")