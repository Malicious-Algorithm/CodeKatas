/*
Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

i.e.

friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
Note: keep the original order of the names in the output.
*/

function friend(friends){

	//a place to store the new array
	let arr = Array();
	console.log(friends)
	//iterate over the array
	for (var i = 0; i < friends.length; i++) {
		const word = friends[i]; 
		//if current is equals to 4
		if(word.length == 4){
			//push that name into the array
			arr.push(word);
		}
	}
	//return that newarray
	return arr;
}

//we can use a map function
function friend(friends){

	var f = friends.map((word)=>
	    word.length == 4 ? word : ""
	);

	return Array(f.join(" "));
}

function friend(friends){

	return friends.map(word =>{ (word.length == 4) ? word : "" })

}

console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]), ["Ryan"]);
console.log(friend(["Ryan", "Kieran", "Mark"]), ["Ryan", "Mark"]);
console.log(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]), ["Jimm", "Cari", "aret"]);
console.log(friend(["Love", "Your", "Face", "1"]), ["Love", "Your", "Face"]);
