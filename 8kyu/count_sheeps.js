/*
If you can't sleep, just count sheep!!

Task:
Given a non-negative integer, 3 for example, 
return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

*/

var countSheep = function (num){

	let string="";
	for (var i = 1; i <= num; i++){
		string += `${i} sheep...`;
	}
	return string;
}

console.log(countSheep(1), "1 sheep...");
console.log(countSheep(2), "1 sheep...2 sheep...");
console.log(countSheep(3), "1 sheep...2 sheep...3 sheep...");