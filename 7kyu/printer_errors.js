function printerErrors(s){
	//a place to store the errors
	let errCount = 0;
	//iterate over the string
	for (var i = 0; i < s.length; i++) {
		const word = s[i];
		//if the current letter is not in range of a-m
		if(word.charCodeAt() >= 97 && word.charCodeAt() <= 109){
			//increment errors count
			
		}else{
			errCount++
		}
	}
	//return counterrors+ / + length of string
	return `${errCount}` + '/' + `${s.length}` ;
}

function printerErrors(s){
	//a place to store the errors
	let errCount = 0;
	//iterate over the string
	for (var i = 0; i < s.length; i++) {
		const word = s[i];
		//if the current letter is not in range of a-m
		if(word < 'a' || word > 'm'){
			//increment errors count
			errCount++
		}
	}
	//return counterrors+ / + length of string
	return `${errCount}` + '/' + `${s.length}` ;
}


//usando Regex
function printerErrors(s){
	let errCount = 0;
	for (var i = 0; i < s.length; i++) {
		const word = s[i];
		if(!word.match(/[a-m]/)){
			errCount++
		}
	}
	return `${errCount}` + '/' + `${s.length}` ;
}

var g = 'a'

const s = 'aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz';
console.log(s.charCodeAt(41))
console.log(printerErrors(s),"3/56"); 