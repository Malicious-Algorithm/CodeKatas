/*
It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.
*/

function getAverage(marks){
	//a place to store the count of items in the array
	let count=0;
	//a place to store the sum of all numbers of the array
	let addAll=0;
	//iterate over the array
	for (var i = 0; i < marks.length; i++) {
		//store the number items inside of the array
		//add each number of the array
		addAll += marks[i];
		count++;
	}
	//return the number of items divided by amount
	return Math.floor(addAll/count);
}

console.log(getAverage([2,2,2,2,2]),2);
console.log(getAverage([1,2,3,4,5,]),3);
console.log(getAverage([1,1,1,1,1,1,1,2]),1);
console.log(getAverage([1,5,87,45,8,8]),25);

/*
//we can use the reduce function!
let v =[1,1,1,1,1,1,1,2]; // 9es la suma  y8 es la cant     => suma/cant

var j = v.reduce((accum,valActual) =>{
	//index+sum means -> add the items inside of the array
		//index is the total amount of items inside of the array
	let s = accum+valActual;//9
	let c = accum-1;
	return (s+c) //really struggling here, bare with me please xD
},0);


//now let's re-write our previous function but using reduce() instead of for() loop
function getAverage(marks){

var result = marks.reduce((index,sum) =>{
	return Math.floor((index+sum) / index); 
});

return result;
}
*/