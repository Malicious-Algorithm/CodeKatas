/*
There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!

Note:
Your points are not included in the array of your class's points. 
For calculating the average point you may add your point to the given array!
*/

function betterThanAverage(classPoints, yourPoints) {
  
	//a place to store the sum of items inside the array
	let sumItems = 0;
	//a place to store the count of items inside the array
	let count = 0;
	//push my points to the array
	classPoints.push(yourPoints);
	//iterate over the array
	for (var i = 0; i < classPoints.length; i++) {
		//sum up all items
		sumItems += classPoints[i];
		//increment count
		count++;
	}

	//divide the sum by num of items
	let prom = sumItems / count;
	//return true if myPoints are greater than classPoints
	return (yourPoints > prom) ? true : false;
}


//so here i could use a reduce function, 'cause we're reducing to an average number
function betterThanAverage(classPoints, yourPoints) {
  
	classPoints.push(yourPoints);
	var f = classPoints.reduce((count, index)=>{
		return count+index;
	},0);

	let average = f / classPoints.length;

	return (yourPoints > average) ? true : false;
	//yay!
}

console.log(betterThanAverage([2, 3], 5), true);

console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75), true);

console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9), false);
