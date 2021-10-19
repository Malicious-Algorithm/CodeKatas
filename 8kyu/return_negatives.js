/*In this simple assignment you are given a number and have to make it negative.
 But maybe the number is already negative?

Example:

makeNegative(1); // return -1
makeNegative(-5); // return -5
makeNegative(0); // return 0
makeNegative(0.12); // return -0.12
Notes:

The number can be negative already, in which case no change is required.
Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.*/

function makeNegative(num) {
  	//if the given number is 0 then return 0
  	if(num === 0){
  		return 0;
  		
  		//else if the given number is less than 0 return that number
  	}else if(num < 0){
  		return num;
  	}else{
  		//else multiply the given number by -1 
  			//return the number
  		return num * -1;
  	}
  	
}

console.log(makeNegative(1),-1); // return -1
console.log(makeNegative(-5),-5); // return -5
console.log(makeNegative(0),0); // return 0
console.log(makeNegative(0.12),-0.12); // return -0.12