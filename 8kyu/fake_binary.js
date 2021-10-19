/*
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
*/

function fakeBin(x){

		//a place to store the new string
		let newString="";
		//iterate over the array
		for (var i = 0; i < x.length; i++) {
			//if the current number is grater than 5
			if(x[i] >= 5){
				//append a 1 to the new string
				newString += 1;
			}else{
			//else
				//append a 0
				newString += 0; 
			}
		}

		//return the new string
		return newString;
}

//let's try to use a js built-in function
	//let's use map()
function fakeBin(x) {
    return x.split('').map((n) => n < 5 ? 0 : 1).join('');
}

console.log(fakeBin('45385593107843568'), '01011110001100111');
console.log(fakeBin('509321967506747'), '101000111101101'); 
console.log(fakeBin('366058562030849490134388085'), '011011110000101010000011011'); 