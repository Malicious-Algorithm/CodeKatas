/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

function getCount(str) {
  //a place to store the count
  var vowelsCount = 0;
  //iterate over the array
  for (var i = 0; i < str.length; i++) {
  	//if there is an a,e,i,o,u 
  	if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
  		//increment vowelsCount
  		vowelsCount++;
  	}
  }

  //return vowlsCount
  return vowelsCount;
}

//we can create an object storing the vowels
//let's see
function getCount(str) {
  var vowelsCount = 0;
  
  var vowels = {
  	'a':true,
  	'e':true,
  	'i':true,
  	'o':true,
  	'u':true
  };

  for (var i = 0; i < str.length; i++) {
  	//so for every character we're iterating over, 
  		//if that letter returns true, then we increment the vowels count
  		if(vowels[str[i]]){
  			vowelsCount++;
  		}
  }
  return vowelsCount;
}

//we could even use a regex exp to match every single vowel in the array
//but i don't know how, yet.
console.log(getCount("abracadabra"), 5);