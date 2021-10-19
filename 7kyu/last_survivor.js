/*
The goal of this exercise is to convert a string to a new string where each 
character in the new string is "(" if that character appears only once in the original 
string, or ")" if that character appears more than once in the original string. 
Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes

Assertion messages may be unclear about what they display in some languages. 
If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
*/

function lastSurvivor(letters) {

	//conver to lowercase
	const lower = letters.toLowerCase();
	//a place to store the new string
	let obj = {};
	let app = '';
	//iterate over the array 
	for (var i = 0; i < lower.length; i++) {
		let index = lower[i];
		if(!obj[index]){
			obj[index] = 1;
		}else{
			obj[index]++;
		}
	}

	for (var i = 0; i < lower.length; i++) {
		var cont = obj[lower[i]]; //wow
		console.log(cont)
        if(cont == 1){
            app += '(';
            continue;
        }
        app += ')';
    }
	
	return app;
}
// console.log(lastSurvivor("din"),"(((");
// console.log(lastSurvivor("recede"),"()()()");
// console.log(lastSurvivor("Success"),")())())","should ignore case");
// console.log(lastSurvivor("(( @"),"))((");