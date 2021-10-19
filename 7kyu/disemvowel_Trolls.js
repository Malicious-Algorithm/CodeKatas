
/*
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.

*/
function disemvowel(str) {
  //a place to store the string
  let newString = "";
  //iterate over the array
  for (var i = 0; i < str.length; i++) {
  	//if we find an a,e,i,o,u
  	if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u'|| str[i] == 'A' || str[i] == 'E' || str[i] == 'I' || str[i] == 'O' || str[i] == 'U'){
  		//do nothing
  	}else
  	newString += str[i];
  }
  	//return the new array
  return newString;
}

function disemvowel(str) {
  let obj = {
  	'a':true,
  	'e':true,
  	'i':true,
  	'o':true,
  	'u':true,
  	'A':true,
  	'E':true,
  	'I':true,
  	'O':true,
  	'U':true
  };
  let newString = ""; 

  for (var i = 0; i < str.length; i++) {
  	if(obj[str[i]]){

  	}else{
  	newString += str[i];
  }
}
  return newString;
}

console.log(disemvowel("This website is for losers LOL!"), "Ths wbst s fr lsrs LL!");
/*
console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read"), "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd");
console.log(disemvowel("What are you, a communist?"), "Wht r y,  cmmnst?");
*/