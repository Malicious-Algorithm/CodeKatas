/*
This time no story, no theory. The examples below show you how to write function accum:

Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"

The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

function accum(s) {
	//a place to store the string
	let newString="";
	//iterate over the array
	for (var i = 0; i < s.length; i++) {
		const cont = i+1;
		console.log(cont);
	  //iterate over the letter
		for (var j = 0; j < cont; j++) {
	  	//if it's the first one
			if (j == 0) {
	  		//turn it into uppercase
				newString += s[i].toUpperCase();
				console.log(newString);
	  	//else
			}else{
	  		//turn it into lowercase
				newString += s[i].toLowerCase()
				console.log(newString);
			}
		}
		//if we're not the last, append a "-" to the newString
		if(i != s.length - 1){
			newString += "-";
		}
	}

	//return the string
	return newString; 
}


console.log(accum("abcd"), "A-Bb-Ccc-Dddd");
console.log(accum("ZpglnRxqenU"), "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu");
console.log(accum("NyffsGeyylB"), "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb");
console.log(accum("MjtkuBovqrU"), "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu");
console.log(accum("EvidjUnokmM"), "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm");
console.log(accum("HbideVbxncC"), "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc");
