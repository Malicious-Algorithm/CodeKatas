/*
You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.
*/

function check(a, x) {

	//a place to store the number or string;
	let store;
	//iterate over the array
	for (var i = 0; i <= a.length; i++) {
		//if current number is equal to x
		if (a[i] == x) {
			//return true
			return true;
		}
	}
	return false;
}

//we can use the "includes()" method, beacose it'll return a boolean value!
function check(a, x) {
	return a.includes(x) ? true : false
}


console.log(check([66, 101], 66), true);
console.log(check([80, 117, 115, 104, 45, 85, 112, 115], 45), true);
console.log(check(['t', 'e', 's', 't'], 'e'), true);
console.log(check(['what', 'a', 'great', 'kata'], 'kat'), false);

