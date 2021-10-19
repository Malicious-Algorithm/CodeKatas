/*
Your task is to make two functions, max and min that take 
a(n) array/vector of integers list as input and outputs, respectively, 
the largest and lowest number in that array/vector.

#Examples

max([4,6,2,1,9,63,-134,566]) returns 566
min([-52, 56, 30, 29, -54, 0, -110]) returns -110
max([5]) returns 5
min([42, 54, 65, 87, 0]) returns 0
#Notes

You may consider that there will not be any empty arrays/vectors.

*/
var min = function(list){
  	//a place to store the first element of the array given
  	let indexAtZero = list[0];

  	if(list.length == 1){
  		return indexAtZero;
  	}else{
	  	//iterate over the array starting from 1 'til length
	  	for (var i = 1; i < list.length; i++) {
	  		//if second..third..fourth element is less than first
	  			if(list[i] < indexAtZero){
	  				//put the value to be the new smallest
	  				indexAtZero = list[i];
	  			}
	  	}
	  	return indexAtZero
  }
}

var min = function(list){
  	//a place to store the first element of the array given
  	let indexAtZero = list[0];

  	if(list.length == 1){
  		return indexAtZero;
  	}else{
	  	//iterate over the array starting from 1 'til length
	  	for (var i = 1; i < list.length; i++) {
	  		//if second..third..fourth element is greater than first
	  			if(list[i] > indexAtZero){
	  				//put the value to be the new greatest
	  				indexAtZero = list[i];
	  			}
	  	}
	  	return indexAtZero
  }
}

//so here i can use Math.min() and Math.max()

var min = function(list){
	return Math.min(...list);
}
var max = function(list){
	return Math.max(...list);
}

console.log(min([-52, 56, 30, 29, -54, 0, -110]), -110);

console.log(min([42, 54, 65, 87, 0]), 0);


console.log(max([4,6,2,1,9,63,-134,566]), 566);
console.log(max([5]), 5);
