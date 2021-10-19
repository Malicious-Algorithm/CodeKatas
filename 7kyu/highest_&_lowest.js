/*
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Example:

highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes:

All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.

*/

function highAndLow(numbers){
	/*
  var newNumbers = numbers.split(' ')
  //a place to store the highest number
  let highest = 0;
  //a place to store the lowest number
  let lowest = 0;
  //a placet to compare the first number with the other ones in the array
  let num = numbers[0];

  //iterate over the array
  for (var i = 1; i < newNumbers.length; i++) {
  	let index = newNumbers[i];
  	//if the first number is the highest
  	if(index < num){
  		//set that number to be the highest number
  		num = index;
  		lowest = num
  }
}
  for (var j = 1; j < newNumbers.length; j++) {
  	let index2 = newNumbers[j];
  	//if the first number is the highest
  	if(index2 - 1 > num){
  		//set that number to be the highest number
  		num = index2;
  		highest = num;
  	}

}
  	//return the highest + " " + lowest
  	return highest+ " "+lowest; 
  	*/

  	//ok i suck, i could've done this instead
  	 var newNumbers = numbers.split(' ');
  	 var maxi = Number(newNumbers[0]);
  	 var mini  = Number(newNumbers[0]);
  	 var num; 
  	 for (var i = 1; i < newNumbers.length; i++) {
  	 	 num = Number(newNumbers[i]);

  	 	if(num > maxi) maxi = num;
  	 	console.log(maxi)
  	 	if(num < mini) mini = num;
  	 	console.log(mini)

  	 }
  	 return maxi + " " + mini;
}

function highAndLow(numbers) {
  numbers = numbers.split(' ').map(Number);
  const max = Math.max(...numbers);
  const min = Math.min(...numbers);
  return `${max} ${min}`;
}

console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"), "542 -214");